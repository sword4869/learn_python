```python
import cv2

# cv2.VideoWriter(filename, FourCC code, fps, (W, H))
fourcc = cv2.VideoWriter_fourcc(*'MP4V')
h, w = imgs.shape[1:3]  # imgs: [N, H, W, C]
fps = 25
out = cv2.VideoWriter(savename + ".mp4", fourcc, fps, (w, h))

for img in imgs:
    out.write(cv2.cvtColor(img, cv2.COLOR_RGB2BGR))
out.release()
```
```python
import os 
import cv2

def video2sequence(video_path):
    videofolder = os.path.splitext(video_path)[0]
    os.makedirs(videofolder, exist_ok=True)
    video_name = os.path.split(videofolder)[-1]
    print(1)

    vidcap = cv2.VideoCapture(video_path)
    print(2)
    success, image = vidcap.read()
    count = 0
    imagepath_list = []
    while success:
        imagepath = os.path.join(videofolder, f"{video_name}_frame_{count:04d}.png")
        cv2.imwrite(imagepath, image)
        success, image = vidcap.read()
        count += 1
        imagepath_list.append(imagepath)
        print(f"{count} video frames are stored in {videofolder}")
    return imagepath_list
```