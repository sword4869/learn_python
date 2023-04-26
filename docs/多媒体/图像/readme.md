images are represented as NumPy arrays `<class 'numpy.ndarray'>`. RGB and BGR use the same color space, except the order of colors is reversed. 
- `scikit-image`: RGB
- `opencv`: BGR
- `imageio`: RGB
- convert: `image = image[:, :, ::-1]`


就PIL特殊，特殊格式，特殊size(W,H)，通道另算；其他库都是(H,W,C).