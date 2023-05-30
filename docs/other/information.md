# python version

```python
# 内置库
import sys
print(f"Python: {sys.version}")

'''
Python: 3.9.12 (main, Apr  5 2022, 06:56:58) 
[GCC 7.5.0]
'''
```

# os platform
```python
# 内置库
import platform

print(platform.system())
# 'Windows'
# 'Linux'
```
```python
import os

# `posix`, `nt`, `java`
print(os.name)
```

- `posix`是 Portable Operating System Interface of UNIX（可移植操作系统接口）的缩写。Linux 和 Mac OS 均会返回该值；
- `nt`全称应为“Microsoft Windows NT”，大体可以等同于 Windows 操作系统，因此 Windows 环境下会返回该值；
- `java`则是 Java 虚拟机环境下的返回值。