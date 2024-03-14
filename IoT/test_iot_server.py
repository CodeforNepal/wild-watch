import requests
import json

def send_animal_data(animal_names_list):
    url = "http://192.168.23.188/api/animal-detected"
    data = {"animal_names": animal_names_list}
    headers = {"Content-Type": "application/json"}

    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()
        print("Data sent successfully")
    except requests.exceptions.RequestException as e:
        print("Error sending data:", e)

# Example usage:
animal_names_list = ["Tiger"]
send_animal_data(animal_names_list)
