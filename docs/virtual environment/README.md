# README

## 没有 pip

出现场景的电脑系统：linux

我猜，这是你安装系统的python时发生的事情。

与其用系统的python，不如直接安装conda，python和pip都有，而且`conda install pip`。

## Microsoft Visual C++ 14.0 

出现场景的电脑系统：windows系统

- 如果这包 conda 有， 那么可以
  ```
  conda install libpython m2w64-toolchain -c msys2
  ```
  然后用 conda 安装你需要的包

- pip 轮子
  去这两个网址找轮子，<https://www.lfd.uci.edu/~gohlke/pythonlibs/>， <https://pypi.org/project/>