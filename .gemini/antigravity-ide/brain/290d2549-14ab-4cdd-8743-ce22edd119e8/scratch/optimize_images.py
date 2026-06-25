import os
from PIL import Image

def optimize_image(input_path, output_path, max_width, quality=80):
    try:
        with Image.open(input_path) as img:
            # Get original size
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
            
            # Save as WebP
            resized_img.save(output_path, 'WEBP', quality=quality)
            print(f"Optimized {input_path} -> {output_path}")
            print(f"  Old size: {orig_width}x{orig_height} ({os.path.getsize(input_path)} bytes)")
            print(f"  New size: {new_width}x{new_height} ({os.path.getsize(output_path)} bytes)")
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")

# Optimize into scratch directory first to check
os.makedirs("scratch_images", exist_ok=True)
optimize_image("public/images/hero-class-photo.webp", "scratch_images/hero-class-photo.webp", 800)
optimize_image("public/images/owner-photo.webp", "scratch_images/owner-photo.webp", 600)
optimize_image("public/images/logo.webp", "scratch_images/logo.webp", 300) # Let's see logo too
