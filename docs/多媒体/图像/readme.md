- [1. 颜色通道和size](#1-颜色通道和size)
- [2. 保存图片格式](#2-保存图片格式)
- [3. rgb归一化](#3-rgb归一化)
  - [3.1. 255到1.0](#31-255到10)
  - [3.2. 对比](#32-对比)
- [多图](#多图)

---
## 1. 颜色通道和size

> type and shape

images are represented as NumPy arrays `<class 'numpy.ndarray'>`, `(H,W,C)`. 就PIL特殊，直接显示是特殊格式，`img.size`，`(W,H)`；其他库都是`(H,W,C)`. 但PIL有函数可以和ndarry转化，转化为ndarry的后就正常是`(H,W,C)`.

> color channels

RGB and BGR use the same color space, except the order of colors is reversed. 
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


### 3.2. 对比

|功能|skimage|imageio|PIL|torch|
|-|-|-|-|-|
|读入|float64|uint8|转为ndarry, 是uint8||
|显示：两种类型都行|√|√|特有格式，转化需uint8||
|保存：需转化|√|√|√|x，但通道有变|
|plt.imshow和imsave对两种格式都行|√|√|转为ndarry|转为ndarry|

但是保存`[0, 255]`行，`[0.0, 1.0]`不行，skimage, imageio, PIL, torch 都是调用 PIL的`save()`。
- imageio 的 `imwrite` 是直接调用，需用户转化
- skimage 的 `imsave` 是直接调用，需用户转化
- torchvision.utils.save_image 是内部自动转化后调用。但是通道有变, `[C, H, W]`
```python
'''
保存rgb归一化的图片
'''

# Image.fromarray 需要 ndarry 数组的格式 是[0, 255], uint8
image = (image * 255).astype(np.uint8)

im = Image.fromarray(ndarr)
im.save(fp, format=format)
```

## 多图

```python
import torchvision
from PIL import Image

def make_Tensor2PIL_grid(x):
    """
    Given a batch of images x, make a grid and convert to PIL
    x: Tensor(B,C,H,W) or a list of Tensors(C,H,W)
    return: a PIL image
    """
    x = x * 0.5 + 0.5  # Map from (-1, 1) back to (0, 1)
    grid = torchvision.utils.make_grid(x)
    grid_im = grid.detach().cpu().permute(1, 2, 0).clip(0, 1) * 255
    grid_im = Image.fromarray(np.array(grid_im).astype(np.uint8))
    return grid_im


def make_PIL2PIL_grid(images, size=64):
    """
    Given a list of PIL images, stack them together into a line for easy viewing
    images: a list of PIL images
    return: a PIL image
    """
    output_im = Image.new("RGB", (size * len(images), size))
    for i, im in enumerate(images):
        output_im.paste(im.resize((size, size)), (i * size, 0))
    return output_im
```