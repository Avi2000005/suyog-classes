import os
from PIL import Image

def optimize_image(image_path, max_width, quality=80):
    try:
        temp_path = image_path + ".tmp"
        
        # Load the image
        with Image.open(image_path) as img:
            orig_width, orig_height = img.size
            aspect = orig_height / orig_width
            
            # Compute new size
            if orig_width > max_width:
                new_width = max_width
                new_height = int(max_width * aspect)
            else:
                new_width, new_height = orig_width, orig_height
                
            # Resize
            resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save to temporary path as WebP
            resized_img.save(temp_path, 'WEBP', quality=quality)
            
        # Overwrite the original file
        if os.path.exists(temp_path):
            if os.path.exists(image_path):
                os.remove(image_path)
            os.rename(temp_path, image_path)
            print(f"Successfully optimized and overwrote {image_path}:")
            print(f"  New dimensions: {new_width}x{new_height}")
            print(f"  New size: {os.path.getsize(image_path)} bytes")
            
    except Exception as e:
        print(f"Error optimizing {image_path}: {e}")
        if os.path.exists(temp_path):
            os.remove(temp_path)

# Optimize the images in place
optimize_image("public/images/hero-class-photo.webp", 800)
optimize_image("public/images/owner-photo.webp", 600)
