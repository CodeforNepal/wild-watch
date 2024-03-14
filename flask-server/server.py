import requests
import cv2
import json
from flask import Flask, render_template, Response

from parse_config import parse_config_file
from detector import AnimalDetector

config_file_path = './config.json'

def send_detected_animals_list(animal_names_list):
    _, _, _, _, url = parse_config_file(config_file_path)
    data = {"animal_names": animal_names_list}
    headers = {"Content-Type": "application/json"}

    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()
        print("Data sent successfully")
    except requests.exceptions.RequestException as e:
        print("Error sending data:", e)


def generate_frames(process_every_nth_frame = 10):

    yolo_model_path, url, scale_factor, confidence_threshold, esp32_api = parse_config_file(config_file_path)
    
    wild_watch = AnimalDetector(
        yolo_model_path=yolo_model_path,
        url = url,
        scale_factor=scale_factor,
        confidence_threshold=confidence_threshold
    )

    try:
        frame_counter = 0
        last_processed_frame = None
        detected_animal_names_list = []

        while True:
            frame_counter += 1
            
            if frame_counter % process_every_nth_frame == 0:
                frame_counter = 0
                frame, detected_animal_names_list = next(wild_watch.run())
                last_processed_frame = frame

                print(detected_animal_names_list)
                animal_names_json = json.dumps(detected_animal_names_list)
                send_detected_animals_list(detected_animal_names_list) # Send the detected animal names list to another endpoint

                ret, jpeg = cv2.imencode('.jpg', last_processed_frame)
                jpeg_buffer = jpeg.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + jpeg_buffer + b'\r\n\r\n'
                       b'animal_names: ' + animal_names_json.encode() + b'\r\n\r\n')
                
            else:
                if last_processed_frame is not None:
                    send_detected_animals_list(detected_animal_names_list) # Send the detected animal names list to another endpoint
                    animal_names_json = json.dumps(detected_animal_names_list)
                    ret, jpeg = cv2.imencode('.jpg', last_processed_frame)
                    jpeg_buffer = jpeg.tobytes()
                    yield (b'--frame\r\n'
                            b'Content-Type: image/jpeg\r\n\r\n' + jpeg_buffer + b'\r\n\r\n'
                            b'animal_names: ' + animal_names_json.encode() + b'\r\n\r\n')
    except Exception as e:
        print(e)
        wild_watch.release()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.js')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=False)