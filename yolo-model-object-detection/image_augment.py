import os
import random
import numpy as np
from PIL import Image, ImageEnhance
from tensorflow.keras.preprocessing.image import ImageDataGenerator

import cv2

def flip_upside_down(image):
    return image.transpose(Image.FLIP_TOP_BOTTOM)

def simulate_night_time(image):
    image_np = np.array(image)
    r, g, b = cv2.split(image_np)
    r = cv2.convertScaleAbs(r, alpha=0.165)
    g = cv2.convertScaleAbs(g, alpha=0.165)
    b = cv2.convertScaleAbs(b, alpha=0.275)
    enhanced_image_np = cv2.merge([r, g, b])
    gamma = 1.15
    img_array_night = np.power(enhanced_image_np / 255., gamma) * 255
    enhanced_image = Image.fromarray(img_array_night.astype('uint8'))
    return enhanced_image

def rotate_image_with_generator(image):
    rotation_angle = random.choice([-60, 60])

    # ImageDataGenerator for rotation
    datagen = ImageDataGenerator(rotation_range=rotation_angle, fill_mode='nearest')
    image = np.expand_dims(image, axis=0)
    aug_iter = datagen.flow(image, batch_size=1)
    rotated_image = next(aug_iter)[0].astype('uint8')
    return Image.fromarray(rotated_image)


def convert_to_grayscale(image):
    return image.convert('L')

def augment_image(image_path, output_folder):
    original_image = Image.open(image_path).convert("RGB")

    # Save original image
    original_image.save(os.path.join(output_folder, f"{os.path.splitext(os.path.basename(image_path))[0]}_original.jpg"))

    # Flip upside down
    flipped_image = flip_upside_down(original_image)
    flipped_image.save(os.path.join(output_folder, os.path.splitext(os.path.basename(image_path))[0] + '_flipped.jpg'))

    # Simulate night time
    night_time_image = simulate_night_time(original_image)
    night_time_image.save(os.path.join(output_folder, os.path.splitext(os.path.basename(image_path))[0] + '_night.jpg'))

    # Rotate using ImageDataGenerator
    rotated_image = rotate_image_with_generator(original_image)
    rotated_image.save(os.path.join(output_folder, os.path.splitext(os.path.basename(image_path))[0] + '_rotated.jpg'))

    # Convert to grayscale
    grayscale_image = convert_to_grayscale(original_image)
    grayscale_image.save(os.path.join(output_folder, os.path.splitext(os.path.basename(image_path))[0] + '_grayscale.jpg'))

def augment_images_in_directory(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png") or filename.endswith(".webp"):
            image_path = os.path.join(input_folder, filename)
            augment_image(image_path, output_folder)

if __name__ == "__main__":
    input_folder = "../tiger"
    output_folder = "./tiger"
    augment_images_in_directory(input_folder, output_folder)
