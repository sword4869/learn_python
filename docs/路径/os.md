- [1. os](#1-os)
  - [1.1. Intro](#11-intro)
  - [1.2. 列出文件和目录](#12-列出文件和目录)
---

# 1. os

## 1.1. Intro

```python
import os
```


## 1.2. 列出文件和目录


`walk`可以深入到子目录中， 展示所有的文件
```python
# root 表示当前正在访问的文件夹路径
# dirs 表示该文件夹下的子目录名list
# files 表示该文件夹下的文件list
for root, dirs, files in os.walk("..", topdown=False):
    # 用途一：遍历文件
    for name in files:
        print(os.path.join(root, name))

    # 用途二：遍历所有的文件夹
    for name in dirs:
        print(os.path.join(root, name))
```