- [1. 误写](#1-误写)
  - [1.1. 单元素的逗号](#11-单元素的逗号)
  - [1.2. 数组变成元组](#12-数组变成元组)
- [2. in](#2-in)


---
## 1. 误写

### 1.1. 单元素的逗号


```python
>>> type((2))
<class 'int'>
>>> type((2,)) 
<class 'tuple'>
>>> type(('f')) 
<class 'str'>
>>> type(('f',)) 
<class 'tuple'>
```

### 1.2. 数组变成元组

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
1 in (2,4), 2 in (2,4), 3 in (2,4), 4 in (2,4), 5 in (2,4)
# (False, True, False, True, False)
```