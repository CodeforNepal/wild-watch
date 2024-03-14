import cv2
from ultralytics import YOLO

class AnimalDetector:

    def __init__(
            self, 
            yolo_model_path: str, 
            url: str,
            scale_factor: float, 
            confidence_threshold: float
        ):
        self.model = YOLO(yolo_model_path)
        self.cap = cv2.VideoCapture(url)
        self.scale_factor = scale_factor
        self.confidence_threshold = confidence_threshold

    def process_frame(self, frame):
        results = self.model.predict(frame)[0]
        detected_animal_names_list = []

        for box in results.boxes:
            class_id = results.names[box.cls[0].item()]\

            confidence = box.conf[0].item()

            if confidence > self.confidence_threshold:
                detected_animal_names_list.append(class_id)
                
                cords = [round(x) for x in box.xyxy[0].tolist()]
                x1, y1, x2, y2 = cords
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                label = f"{class_id}: {round(confidence, 2)}"
                cv2.putText(frame, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        return frame, detected_animal_names_list

    def run(self):
        if not self.cap.isOpened():
            print("Error: Couldn't open the camera.")
            return

        while True:
            ret, frame = self.cap.read()

            if ret:
                resized_frame = cv2.resize(frame, None, fx=self.scale_factor, fy=self.scale_factor)
                processed_frame, detected_animal_names_list = self.process_frame(resized_frame)
                yield processed_frame, detected_animal_names_list

    def release(self):
        self.cap.release()