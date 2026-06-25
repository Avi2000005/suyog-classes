import os
from PIL import Image

def inspect_image(path):
    try:
        with Image.open(path) as img:
            print(f"{path}:")
            print(f"  Format: {img.format}")
            print(f"  Mode: {img.mode}")
            print(f"  Size: {img.size}")
            print(f"  File size: {os.path.getsize(path)} bytes")
    except Exception as e:
        print(f"Error {path}: {e}")

inspect_image("public/images/hero-class-photo.webp")
inspect_image("public/images/owner-photo.webp")
inspect_image("public/images/logo.webp")
