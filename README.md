# Wild Watch: Early Animal Detection for Ultimate Protection
----------------------------------------------------------------------------

Wildwatch is an animal detection and alarm system that uses a custom-trained YOLOv8 model. This model is deployed on a Flask server to ensure efficient processing. The system is paired with a user-friendly React frontend, guaranteeing a smooth and intuitive user experience. Additionally, it seamlessly integrates IoT components like LCD displays and buzzers, enabling timely alerts for proactive measures.

### By team - **Team Incognito**
>**Overview**
>
>Welcome to Team Incognito's repository for the "Wild Watch" project. Our team has developed a model using YOLO-v5 for early animal detection to prevent human-wildlife conflicts.
Getting Started


# Server

To run the server, execute the following command:

``` 
python server.py
``` 

Certain parameters in the server.py file can be changed to customize the system's behavior:

- `yolo_model_path`: The yolo_model_path parameter denotes the file path to the YOLOv8 model. This model is crucial for identifying animals within images or video streams.

- `url`: Denotes the URL or index related to camera input. The value "0" suggests it represents the index of the camera source, allowing users to specify which camera feed the system should analyze for animal detection.

- `scale_factor`: Determines the scaling factor applied to input images before processing by the detection model.Input images are resized to half of their original dimensions, impacting processing speed and detection accuracy.

- `confidence_threshold`: Sets the minimum confidence level required for object detection predictions to be considered valid. A threshold means predictions must have a confidence score of threshold or higher to be accepted.

- `esp32_api`: Specifies the endpoint of an API hosted on an ESP32 device. This API is further used for an alarm system, facilitating communication between the detection system and downstream processes for further proactive measures.



