- [1. 定义函数](#1-定义函数)
- [2. 传入函数](#2-传入函数)
  - [2.1. 解包](#21-解包)
  - [2.2. dict损耗](#22-dict损耗)
  - [2.3. 只是在传dict](#23-只是在传dict)
  - [2.4. 对应关系](#24-对应关系)

---
[Python之可变参数，*参数，**参数，以及传入*参数，**参数解包，*args，**kwargs的理解](https://blog.csdn.net/cadi2011/article/details/84871401)


- `*`的是args, 主要是`tuple, list`类型
- `**`的是kwargs, `dict`类型、
## 1. 定义函数

定义函数时，`*args`表示不定量的`"北京", "海淀"`这种形式，`**kwargs`(keyword args)表示不定量的`style="开心", price=0.1`这种形式。

顺序： `普通参数`->`默认值参数`->`*args`->`**kwargs`
- 默认值参数位于普通参数后面，
- `*args, **kwargs`位于普通参数和默认值参数后面
- `**kwargs`位于`*args`后面。
```python
# def printStr(普通参数, 默认值参数="默认值", *参数, **参数):
def my_first_blood(name, age=0, *args, **kwargs):
    print(name)
    print(age)
    print(args)
    print(kwargs)

# "王" | 32 | "北京", "海淀" | style="开心"
my_first_blood("王", 32, "北京", "海淀", style="开心")
# 王
# 32
# ('北京', '海淀')
# {'style': '开心'}

# "王" | 32 | "北京", "海淀" | style="开心"
my_first_blood("王", 32, "北京", "海淀", style="开心", price=0.1)
# 王
# 32
# ('北京', '海淀')
# {'style': '开心', 'price': 0.1}
```

## 2. 传入函数
### 2.1. 解包
`*`用来解开 tuple, list, str, range, dict
```python
first = (1,2,3)
print(*first)
# 1 2 3

second = [1,2,3]
print(*second)
# 1 2 3
 
third = "123"
print(*third)
# 1 2 3

fourth = range(4)
print(*fourth)
# 0 1 2 3

fifth = {'a':1, 'b':2}
print(*fifth)
# a b
```

`**`用来解包字典，相当于`k1=v1, k2=v2,...`

### 2.2. dict损耗

```python
def full_dict(first, **dict):
    print(first, dict)
    # 100 {'name': 'tyson', 'age': '99'}

def half_dict(first, name, **dict):
    print(first, name, dict)
    # 100 tyson {'age': '99'}

d = {"name": "tyson", "age":"99"}
# 等同于 full_dict(100, name="tyson", age="99") 
full_dict(100, **d)
half_dict(100, **d)
```

### 2.3. 只是在传dict

```python
def full_dict(first, **dict):
    print(first, dict)
    # 100 {'name': 'tyson', 'age': '99'}

def just_dict(dict):
    print(dict)
    # {'name': 'tyson', 'age': '99'}
    full_dict(100, **dict)
    
d = {"name": "tyson", "age":"99"}
just_dict(d)
```
### 2.4. 对应关系


```python
def test_args_kwargs(arg1, arg2, arg3=None):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)

# 一一对应
args = ("two", 3, 5)
test_args_kwargs(*args)

# 会正确对应到相应的位置：arg1=5, arg2='two', arg3=3
kwargs = {"arg3": 3, "arg2": "two", "arg1": 5}
test_args_kwargs(**kwargs)

# 默认值 arg3=None
kwargs = {"arg2": "two", "arg1": 5}
test_args_kwargs(**kwargs)
```