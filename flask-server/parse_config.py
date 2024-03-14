import json

def parse_config_file(config_file_path):

    with open(config_file_path, 'r') as config_file:
        config_data = json.load(config_file)

        yolo_model_path = config_data['yolo_model_path']
        url = config_data['url']
        scale_factor = config_data['scale_factor']
        confidence_threshold = config_data['confidence_threshold']
        esp32_api = config_data['esp32_api']


        return yolo_model_path, url, scale_factor, confidence_threshold, esp32_api