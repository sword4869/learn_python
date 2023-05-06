
---

## install

```python
pip install imageio
```
## read，show, write
```python
import imageio.v3 as iio
import matplotlib.pyplot as plt

# 读入
img = iio.imread('imageio:chelsea.png')

# 显示图片
plt.imshow(img)

# 保存图片
iio.imwrite('1.jpg', img)
```
![图 1](../../../images/27e1735ce8892eeafa202335c4388c0703a8c7f7511c00b88dbdc10566970104.png)  

### gif
```python
import imageio.v3 as iio
# frames: [N, H, W, C]
# duration = 1000/fps
iio.imwrite('1.gif', frames, duration=1000/1)
```
## shape
```python
# [H, W, C]，HW对应行列, 数组样式，C对应RGBA
img.shape
```
