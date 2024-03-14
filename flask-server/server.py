import requests
import cv2
from flask import Flask, render_template, Response

from parse_config import parse_config_file
from detector import AnimalDetector

def send_detected_animals_list(animal_names_list):
    # Define the URL of the endpoint where you want to send the detected animal names
    endpoint_url = 'http://localhost:5001/save_animals_list'  # Example URL, modify it according to your actual endpoint

    # Send a POST request with the detected animal names as JSON data
    response = requests.post(endpoint_url, json={'animal_names': animal_names_list})

    # Check the response status
    if response.status_code != 200:
        print("Error occurred while sending detected animal names:", response.text)

def generate_frames(process_every_nth_frame = 10):

    yolo_model_path, url, scale_factor, confidence_threshold = parse_config_file('./config.json')
    print(url)
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
                # send_detected_animals_list(detected_animal_names_list) # Send the detected animal names list to another endpoint

                ret, jpeg = cv2.imencode('.jpg', last_processed_frame)
                jpeg_buffer = jpeg.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + jpeg_buffer + b'\r\n\r\n')
                
            else:
                if last_processed_frame is not None:
                    # send_detected_animals_list(detected_animal_names_list) # Send the detected animal names list to another endpoint
                    ret, jpeg = cv2.imencode('.jpg', last_processed_frame)
                    jpeg_buffer = jpeg.tobytes()
                    yield (b'--frame\r\n'
                           b'Content-Type: image/jpeg\r\n\r\n' + jpeg_buffer + b'\r\n\r\n')
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