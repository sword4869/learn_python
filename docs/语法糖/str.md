
---
## long str

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
## split
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