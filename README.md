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

# Frontend

To run the frontend, follow these steps:

1. Ensure that the server is running. If not, follow the instructions in the previous section to start the server.

2. Navigate to the frontend directory in your terminal:
    ``` 
    cd path_to_your_front_end_directory
    ```
3. Install dependencies by running:
   ``` 
   npm install
   ```
4. Once the dependencies are installed, start the frontend application with:
   ``` 
   npm start
   ```
5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the frontend interface.
6. You can now see the video feed and output sections to observe animal detection results.
7. Additionally the team member details are provided


# Contributors

| Name              | Contribution          | Linkedin Profile                              |
|:-----------------:|:---------------------:|:---------------------------------------------:|
| **Abhash Rai**    | Team Lead & Backend | [Abhash Rai](https://www.linkedin.com/in/abhash-rai/) |
| **Nabin Oli**     | Machine Learning      | [Nabin Oli](https://www.linkedin.com/in/nabinoli/) |
| **Bishesh Giri**  | Frontend              | [Bishesh Giri](https://www.linkedin.com/in/bisheshgiri/) |
| **Sudeep Fullel** | IOT                   | [Sudeep Fullel](https://www.linkedin.com/in/sudeepfullel/) |
| **Sanket Shrestha** | Documentation       | [Sanket Shrestha](https://www.linkedin.com/in/sanketstha/) |
| **Shankar Tamang**  | Documentation       | [Shankar Tamang](https://www.linkedin.com/in/shankartamang/) |

