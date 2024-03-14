# Wild Watch: Early Animal Detection for Ultimate Protection

Wild watch aims to boost safety along Nepal's wildlife habitats bordering human settlements using object detection technique. It spots dangerous animals and alerts authorities or nearby communities for swift action, focusing on areas near national parks, wildlife reserves, and forests.

It uses a custom-trained YOLOv8 model. This model is deployed on a Flask server for processing of live feed, which is then recieved by a react app and an alert system. Alert system seamlessly integrates IoT components like LCD displays and buzzers, enabling timely alerts for proactive measures.

# Prerequisites

- You must have `Python 3` installed on your system.
- You must have `Git` installed on your system.
- **(Optional)** You should have `Node.js` (npm) installed on your system (if using development server)


# Server

To run the server, execute the following command:

``` 
python server.py
``` 

Certain parameters in the `config.json` file can be changed to customize the system's behavior:
```json
{
    "yolo_model_path": "best.pt",
    "url": 0,
    "scale_factor": 0.5,
    "confidence_threshold": 0.65,
    "esp32_api": "http://192.168.23.188/api/animal-detected"
}
```

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

## VideoStream Component

The `VideoStream` component is responsible for displaying the video feed and output data from the backend server. It communicates with the server to fetch the video feed and real-time output data using HTTP requests.

### How It Works

1. **Video Feed**: The component requests the video feed from the backend server using an HTTP GET request to `http://localhost:5000/video_feed`. The video feed is then displayed using an `<img>` tag with the appropriate source URL.

2. **Output Data**: The component fetches real-time output data from the backend server using an asynchronous `fetch` request to `http://localhost:5000/output_data`. This data contains information about detected animals. The component periodically fetches new data every 5 seconds.

## Ports and Endpoints

Ensure that the backend server is running on port 5000 for the component to fetch the video feed and output data. The following ports and endpoints are used:

- **Video Feed**: `http://localhost:5000/video_feed`
- **Output Data**: `http://localhost:5000/output_data`

## Usage

To integrate the `VideoStream` component into your frontend application, simply import it and include it in your component hierarchy. You can customize the appearance and behavior of the component as needed.

```jsx
import React from "react";
import VideoStream from "./components/VideoStream";

const App = () => {
  return (
    <div className="App">
      <VideoStream />
    </div>
  );
};

export default App;
```


# Contributors

| Name              | Contribution          | Linkedin Profile                              |
|:-----------------:|:---------------------:|:---------------------------------------------:|
| **Abhash Rai**    | Team Lead & Backend | [Abhash Rai](https://www.linkedin.com/in/abhash-rai/) |
| **Nabin Oli**     | Machine Learning      | [Nabin Oli](https://www.linkedin.com/in/nabinoli/) |
| **Bishesh Giri**  | Frontend              | [Bishesh Giri](https://www.linkedin.com/in/bisheshgiri/) |
| **Sudeep Fullel** | IOT                   | [Sudeep Fullel](https://www.linkedin.com/in/sudeepfullel/) |
| **Sanket Shrestha** | Documentation       | [Sanket Shrestha](https://www.linkedin.com/in/sanketstha/) |
| **Shankar Tamang**  | Documentation       | [Shankar Tamang](https://www.linkedin.com/in/shankartamang/) |

