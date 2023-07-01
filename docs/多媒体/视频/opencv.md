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