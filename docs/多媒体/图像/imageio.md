```python
import imageio
```

```python
img = imageio.imread('/home/sword/Downloads/output-onlinepngtools.png')
```

```python
# [H, W, C]，HW对应行列, 数组样式，C对应RGBA
img.shape
```

显示图片
```python
import matplotlib.pyplot as plt
plt.imshow(img)
```
![图 1](../../../images/27e1735ce8892eeafa202335c4388c0703a8c7f7511c00b88dbdc10566970104.png)  
