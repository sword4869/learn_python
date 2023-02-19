- [1. conda还可以安装什么](#1-conda还可以安装什么)
  - [1.1. packages that conda can install](#11-packages-that-conda-can-install)
  - [1.2. Microsoft Visual C++ 14.0](#12-microsoft-visual-c-140)

# 1. conda还可以安装什么

## 1.1. packages that conda can install

```python
conda install git

# 系统python没有pip时，我们可以这样给系统python安装pip
conda install pip

# Installing latest CUDA Releases
conda install cuda -c nvidia
# Installing Previous CUDA Releases
conda install cuda -c nvidia/label/cuda-11.3.0
```



## 1.2. Microsoft Visual C++ 14.0 

出现场景的电脑系统：windows系统

- 如果这包 conda 有， 那么可以
  ```
  conda install libpython m2w64-toolchain -c msys2
  ```
  然后用 conda 安装你需要的包

- pip 轮子
  去这两个网址找轮子，<https://www.lfd.uci.edu/~gohlke/pythonlibs/>， <https://pypi.org/project/>