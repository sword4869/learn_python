> 代码版本：3.6.3    文档：[3.6.6eval()](https://docs.python.org/3.6/library/functions.html?#eval)

 eval()是Python内置函数，点进去是这样的

```python
def eval(*args, **kwargs): 
    """    
    Evaluate the given source in the context of globals and locals.    
    The source may be a string representing a Python expression or a code object as returned by compile().    
    The globals must be a dictionary and locals can be any mapping, defaulting to the current globals and locals.    
    If only globals is given, locals defaults to it.    
    """
    pass
```

 pycharm提示是这样的

![eval](https://img-blog.csdn.net/20180802181004165?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xub3RpbWU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70) ![evalts](https://img-blog.csdn.net/20180802181033613?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xub3RpbWU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

eval()接收一个字符串格式的表达式参数，和两个可选参数globals和locals，如果给的话，[global](https://so.csdn.net/so/search?q=global&spm=1001.2101.3001.7020)是必须是字典，locals可以是任何映射对象。返回表达式的结果。

可选参数其实是给一个寻找的范围，如果给的话，用位置传参格式，不能用关键字传参格式。如果不给定，则从locals()和globals()里寻找内容，返回表达式的结果。

例子：

没有globals和locals参数的：

```python
def f():
    pass
 
 
class A:
    pass
 
 
a = A()
 
my_list = ['1', '1.0', '[2]', '(1,)', '{1,}', '{"k":"v"}', 'f', 'A', 'a']
for i in my_list:
    da = eval(i)
    print(da, type(da))
 
 
# 结果：
# 1 <class 'int'>
# 1.0 <class 'float'>
# [2] <class 'list'>
# (1,) <class 'tuple'>
# {1} <class 'set'>
# {'k': 'v'} <class 'dict'>
# <function f at 0x000001DB6D376048> <class 'function'>
# <class '__main__.A'> <class 'type'>
# <__main__.A object at 0x000001DB6D98C320> <class '__main__.A'>
```

有参数的：

```python
def fa():
    print('func a is run')
 
 
def fb():
    print('func b is run')
 
 
g = {'fa': fb, 'fb': fa}
 
eval('fa')()
eval('fa', g)()
 
 
# 结果:
# func a is run
# func b is run
```

一直说是表达式，举个例子

```python
def fa():
    return 3
 
print(eval('print(1)'))
print(eval('fa()'))

 
ss1 = "5*8"
num = 90
g = {'a': 1}
print(eval(ss1), eval("pow(3,2)"),eval('num+10'))
print(eval('a+1', g))

# 结果：
# 1
# None
# 3
# 40 9 100
# 2
```

注意，第一个参数必须是可执行的表达式，如果只是一个普通的字符串，那就报错

```python
eval('tomorrow')
# Traceback (most recent call last):
#   File "E:x/x.py", line 1, in <module>
#     eval('tomorrow')
#   File "<string>", line 1, in <module>
# NameError: name 'tomorrow' is not defined
 
 
eval('see you')
# Traceback (most recent call last):
#   File "E:x/x.py", line 10, in <module>
#     eval('see you')
#   File "<string>", line 1
#     see you
#           ^
# SyntaxError: unexpected EOF while parsing
```

可选参数传入的话要注意，会改变你传入的字典本来的内容。文档：

> If the globals dictionary is present and lacks `__builtins__`, the current globals are copied into globals before expression is parsed.




## 四、eval()函数的应用

 **1、使用eval()函数，将字符串还原为数字类型，和int()函数的作用类似**

```python
# 1.使用eval()函数，将字符串还原为数字类型，和int()函数的作用类似
a = input()
print(type(a))
#利用eval()将字符串类型转为整形
print(type(eval(a)),type(int(a)))
```

 ![](https://img-blog.csdnimg.cn/136afc9e491e4f9d975e7396aa0df976.png)
