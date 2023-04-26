- [1. install](#1-install)
- [2. Usage](#2-usage)

---
## 1. install

a. Packages for standard desktop environments (Windows, macOS, almost any GNU/Linux distribution)

- Option 1 - Main modules package: 
    `pip install opencv-python`
- Option 2 - Full package (contains both main modules and contrib/extra modulesm listing from OpenCV documentation): 
    `pip install opencv-contrib-python` 

- Option 3 - Headless main modules package: 
    `pip install opencv-python-headless`

- Option 4 - Headless full package (contains both main modules and contrib/extra modules): 
    `pip install opencv-contrib-python-headless`

Headless: Packages for server environments (such as Docker, cloud environments etc.), no GUI library dependencies

所以，一般选择 `pip install opencv-contrib-python` 

## 2. Usage

```python
import cv2

image_path = r'C:\Users\lab\git\learn_python\images\8a85432a391c379d6006ddf59e77df7fd138f2a80e115058abbd06431d727d30.png'
image = cv2.imread(image_path)
```

```python
# 数组模式
h,w,c = image.shape
```