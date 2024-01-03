- [1. long str](#1-long-str)
- [2. split](#2-split)
  - [2.1. split 从左边开始分割](#21-split-从左边开始分割)
  - [2.2. rsplit 从右边开始分割](#22-rsplit-从右边开始分割)
- [encode, decode](#encode-decode)

---
## 1. long str

```python
a = """ 
三个连续的引号
"""

a = '''
单引号也可以
'''
```
```python
c = (
    "sdf"
    "不是tuple，没有逗号，只是括号"
)
```
## 2. split

### 2.1. split 从左边开始分割
`my_str.split(str, maxsplit)`: 将 my_str 这个字符串按照 str 进行切割, maxsplit 割几次

```python
my_str = "hello world itcast and itcastcpp"
my_str1 = my_str.split(" ")
print(my_str1)

# maxsplit 割掉指定字符几次，0次不割，n次留下n+1个字符串长度的list，超出或者负数都是最大次数即全割。
my_str2 = my_str.split(" ", 1)
print(my_str2)

# 默认是空白字符(" " "\t" "\n")
my_str3 = my_str.split()  # 用的最多
print(my_str3)

my_str4 = my_str.split("itcast")
print(my_str4)

# 输出结果是
['hello', 'world', 'itcast', 'and', 'itcastcpp']
['hello', 'world itcast and itcastcpp']
['hello', 'world', 'itcast', 'and', 'itcastcpp']
['hello world ', ' and ', 'cpp']
```

### 2.2. rsplit 从右边开始分割

```python
>>> my_str = "hello world itcast and itcastcpp"
>>> my_str.rsplit(" ") 
['hello', 'world', 'itcast', 'and', 'itcastcpp']
>>> my_str.rsplit(" ", 1) 
['hello world itcast and', 'itcastcpp']
```

## encode, decode

```python
##### 中文 utf-8 -> raw_unicode_escape
>>> a = "你好" 
>>> a.encode('utf-8')
b'\xe4\xbd\xa0\xe5\xa5\xbd'
>>> b = a.encode('utf-8').decode('raw_unicode_escape','strict')
>>> b
'ä½\xa0å¥½'

##### raw_unicode_escape -> utf-8 中文
>>> b.encode('raw_unicode_escape','strict')          
b'\xe4\xbd\xa0\xe5\xa5\xbd'
# a = b.encode('raw_unicode_escape','strict').decode('utf-8')  
>> a = b.encode('raw_unicode_escape','strict').decode()  
>>> a
'你好'
```

```python
# 中文 raw_unicode_escape -> gb18030 
>>> c = "你好"
>>> c.encode('raw_unicode_escape','strict')
b'\\u4f60\\u597d'
>>> d = c.encode('raw_unicode_escape','strict').decode('gb18030') 
>>> print(d)
\u4f60\u597d
>>> e = c.encode('raw_unicode_escape','strict').decode('utf-8') 
>>> print(e)
\u4f60\u597d
```