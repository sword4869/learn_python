- [1. 颜色通道和size](#1-颜色通道和size)
- [2. 保存图片格式](#2-保存图片格式)
- [3. rgb归一化](#3-rgb归一化)
  - [3.1. 255到1.0](#31-255到10)
  - [3.2. 保存rgb归一化的图片](#32-保存rgb归一化的图片)

---
## 1. 颜色通道和size

images are represented as NumPy arrays `<class 'numpy.ndarray'>`. RGB and BGR use the same color space, except the order of colors is reversed. 
- `opencv`: BGR
- `scikit-image`: RGB
- `imageio`: RGB
- `PIL`: RGB
- convert: `image = image[:, :, ::-1]`, 
    ```python
    # img需要是uint8格式
    img = (img * 255).astype(np.uint8)
    img_cv = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    ```


就PIL特殊，直接显示是特殊格式，`img.size`，`(W,H)`；其他库都是`(H,W,C)`.

但PIL有函数可以和ndarry转化，转化为ndarry的后就正常是`(H,W,C)`

## 2. 保存图片格式

选择`png`。`jpg`会压缩，图片质量下降，这比较指标的时候就麻瓜了。

网络预测出来的，用`iio`保存，

## 3. rgb归一化

- `[0, 255]`, `np.uint8`
- `[0.0, 1.0]`, `np.float64`
### 3.1. 255到1.0


```python
# 不能缩写除法
# image /= 255
# UFuncTypeError: Cannot cast ufunc 'divide' output from dtype('float64') to dtype('uint8') with casting rule 'same_kind'

# python 除法默认是浮点数, 4/2=2.0
# 所以结果都是 float64 
image = image / 255
image = image / 255.
```


### 3.2. 保存rgb归一化的图片
- skimage, imageio 的显示对`[0, 255]`和`[0.0, 1.0]`都行。

- skimage 读取进来就是 float64的 `[0.0, 1.0]`
  imageio 读取进来是uint8 

- 但是保存`[0, 255]`行，`[0.0, 1.0]`不行，skimage, imageio, PIL, torch 都是调用 PIL的`save()`。
```python
# Image.fromarray 需要 ndarry 数组的格式 是[0, 255], uint8
image = (image * 255).astype(np.uint8)

im = Image.fromarray(ndarr)
im.save(fp, format=format)
```
- imageio 的 `imwrite` 是直接调用，需用户转化
- skimage 的 `imsave` 是直接调用，需用户转化
- torchvision.utils.save_image 是自动转化后调用，不需要转化。但是通道有变, `[C, H, W]`