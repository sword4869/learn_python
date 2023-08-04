- [1. 数组变成元组](#1-数组变成元组)
- [2. in](#2-in)


---
## 1. 数组变成元组

```python
# 这是个元组, 为什么, 因为在']'后加了个逗号
plugins = [
    "vuepress-plugin-helper-live2d",
    "vuepress-plugin-reading-progress",
    "vuepress-plugin-code-copy",
],
```

## 2. in

```python
# (2) or (4)
(1) in (2,4), (2) in (2,4), (3) in (2,4), (4) in (2,4), (5) in (2,4)
# (False, True, False, True, False)
```