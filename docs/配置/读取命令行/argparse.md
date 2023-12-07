- [1. Install](#1-install)
- [2. Base](#2-base)
  - [2.1. hello example](#21-hello-example)
  - [2.2. 帮助提示](#22-帮助提示)
  - [2.3. 自动匹配前缀](#23-自动匹配前缀)
  - [2.4. 长短参数](#24-长短参数)
  - [2.5. type](#25-type)
  - [2.6. 必选参数\&可选参数](#26-必选参数可选参数)
  - [2.7. nargs](#27-nargs)
  - [2.8. 矛盾参数](#28-矛盾参数)
- [3. action](#3-action)
  - [3.1. 计数count](#31-计数count)
  - [3.2. 限定选项](#32-限定选项)

# 1. Install
内置于python，不需要安装

<https://docs.python.org/3/library/argparse.html>

# 2. Base
## 2.1. hello example
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--integer', type=int)
args = parser.parse_args()
# 自带的函数，来打印 help信息
parser.print_help()

print(args)
# . 来引用
print(args.integer)
'''
# python t.py --integer=1
$ python t.py --integer 1
usage: t.py [-h] [--integer INTEGER]

optional arguments:
  -h, --help         show this help message and exit
  --integer INTEGER
Namespace(integer=1)
1
'''
```

```python
>>> import argparse
>>> parser = argparse.ArgumentParser()
>>> parser.add_argument('--integer', type=int)
_StoreAction(option_strings=['--integer'], dest='integer', nargs=None, const=None, default=None, type=<class 'int'>, choices=None, required=False, help=None, metavar=None)
>>> parser.parse_args('--integer=1'.split())
Namespace(integer=1)
```
## 2.2. 帮助提示

两处帮助提示。
```python
import argparse

# description是此脚本的提示信息
parser = argparse.ArgumentParser(description='一个最简单的argsparse库的使用的例子')

# help是参数的提示信息
parser.add_argument('--integer', type=int, help='一个输入的整数\n不能换行')
# 在py文件中换行
parser.add_argument(
    "--mixed_precision",
    help=(
        "Whether to use mixed precision. Choose between fp16 and bf16 (bfloat16). Bf16 requires PyTorch >="
        " 1.10.and an Nvidia Ampere GPU.  Default to the value of accelerate config of the current system or the"
        " flag passed with the `accelerate.launch` command. Use this argument to override the accelerate config."
    ),
)
args = parser.parse_args()
print('hello', args.integer)

'''
usage: t.py [-h] [--integer INTEGER] [--mixed_precision MIXED_PRECISION]

一个最简单的argsparse库的使用的例子

options:
  -h, --help            show this help message and exit
  --integer INTEGER     一个输入的整数 不能换行
  --mixed_precision MIXED_PRECISION
                        Whether to use mixed precision. Choose between fp16 and bf16 (bfloat16). Bf16 requires PyTorch >= 1.10.and an Nvidia Ampere GPU. Default to the value of accelerate
                        config of the current system or the flag passed with the `accelerate.launch` command. Use this argument to override the accelerate config.
```

## 2.3. 自动匹配前缀
唯一前缀，怎么缩短都行。注意缩到最短，是`--i`，不要记混成`-i`。
```python
>>> parser.add_argument('--integer', type=int)

>>> parser.parse_args('--integer 1'.split())
Namespace(integer=1)
>>> parser.parse_args('--integ 1'.split())
Namespace(integer=1)
>>> parser.parse_args('--in 1'.split())
Namespace(integer=1)
>>> parser.parse_args('--i 1'.split())
Namespace(integer=1)
```
前缀冲突
```python
>>> parser.add_argument('--integer1', type=int)
>>> parser.add_argument('--integer2', type=int)

>>> parser.parse_args('--in 1'.split())
usage: [-h] [--integer1 INTEGER1] [--integer2 INTEGER2]
: error: ambiguous option: --in could match --integer1, --integer2
>>> parser.parse_args('--integer1 1'.split())
Namespace(integer=None, integer1=1, integer2=None)
```

## 2.4. 长短参数
```python
# 单字母
parser.add_argument('-i', '--integer', type=int)

# 遇到重复单字母时，也可以多字母
parser.add_argument('-iF', '--inputfile', type=str)
```
不要把`-iF`（短参数的多字母）和`--in`（长参数的自动匹配前缀）搞混乱了。
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-i', '--integer', type=int)
parser.add_argument('-iF', '--inputfile', type=str)
args = parser.parse_args()
print('hello', args)

'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py -i 1
hello Namespace(integer=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --integer 1
hello Namespace(integer=1)
'''
```


## 2.5. type



> `int`, `float`, `str`

```python
parser.add_argument('a', type=int)
```


虽然默认 `type=None`， 但其实都解析为 `str` ，传啥都是 str 类型

```python
>>> parser.add_argument('--k')
_StoreAction(option_strings=['--k'], dest='k', nargs=None, const=None, default=None, type=None, choices=None, required=False, help=None, metavar=None)
>>> parser.parse_args('--k None'.split())
Namespace(k='None')
>>> parser.parse_args('--k 1'.split())
Namespace(k='1')
>>> parser.parse_args('--k 1.1'.split())
Namespace(k='1.1')
>>> parser.parse_args('--k [2312]'.split())
Namespace(k='[2312]')
```

默认值 `default=None`, 是None的话就没必要再写了

```python
>>> parser.add_argument('--a')
>>> parser.add_argument('--b', default=12)
>>> parser.parse_args(''.split())
Namespace(a=None, b=12)
```

> bool 

还用上面的写法会在False上出问题，得用action

- `store_true`: 用上时值为`True`，不用时取默认值`False`
```python
# 用上表示True，不用False
>>> parser.add_argument('--online', action='store_true')
_StoreTrueAction(option_strings=['--online'], dest='online', nargs=0, const=True, default=False, type=None, choices=None, required=False, help=None, metavar=None)
# 可以赋值默认False，效果同上
>>> parser.add_argument('--online', action='store_true', default=False)

# 出问题了，用不上和用上都是True
# parser.add_argument('--online', action='store_true', default=True)

### 必须不赋值
>>> parser.parse_args(''.split())
Namespace(online=False)
>>> parser.parse_args('--online'.split())
Namespace(online=True)

### 赋值不可以 error: unrecognized arguments: True
>>> parser.parse_args('--online True'.split())
usage: a.py [-h] [--online]
: error: unrecognized arguments: True
>>> parser.parse_args('--online False'.split())
usage: [-h] [--online]
: error: unrecognized arguments: False
```

- `store_false`: 反向，不用是默认值`True`，用了`False`

```python
# 正确的是
>>> parser.add_argument('--online', action='store_false')
_StoreFalseAction(option_strings=['--online'], dest='online', nargs=0, const=False, default=True, type=None, choices=None, required=False, help=None, metavar=None)
>>> parser.parse_args(''.split())
Namespace(online=True)
>>> parser.parse_args('--online'.split())
Namespace(online=False)
```

## 2.6. 必选参数&可选参数

> Method1: 有没有`--`

```python
# 必选
>>> parser.add_argument('a', type=int)
# 可选
>>> parser.add_argument('--b', type=int)


>>> parser.parse_args('1'.split())
Namespace(a=1, b=None)
>>> parser.parse_args('1 --b=2'.split())
Namespace(b=2, a=1)

# 必须不可缺
>>> parser.parse_args(''.split())
usage: a.py [-h] [--b B] a
: error: the following arguments are required: a
# 这种方式不能加 `--`
>>> parser.parse_args('--a=1'.split())
usage: [-h] [--b B] a
: error: the following arguments are required: a
```

> Method2：`--`并且`required=True`
```python
# 必选
>>> parser.add_argument('--c', type=int, required=True)
# 可选
>>> parser.add_argument('--d', type=int)
>>> parser.parse_args('--c=1'.split())
Namespace(c=1, d=None)

# 同样不可或缺
>>> parser.parse_args(''.split())
usage: [-h] --c C [--d D]
: error: the following arguments are required: --c
# 这种方式必须加 --
>>> parser.parse_args('1'.split())
usage: [-h] --c C [--d D]
: error: the following arguments are required: --c
```

## 2.7. nargs

- 不是列表：通配符 `'?'`

    ```python
    >>> parser.add_argument('--h', nargs='?')
    >>> parser.parse_args(''.split())
    Namespace(h=None)
    >>> parser.parse_args('--h 1'.split())
    Namespace(h='1')
    ```
- 列表：`N`(具体是正整数 1,2,3), 通配符 `'+'`, `'*'`

    nargs=`*`，和`N`类似，但是没有规定列表长度。

    nargs=`+`，和`*`类似，但是给对应的项当没有传入参数时，会报错error: too few arguments。
    ```python
    ######### N
    >>> parser.add_argument('--a', nargs=2) 
    >>> parser.add_argument('--b', nargs=1) 
    >>> parser.parse_args('--a 1 2 --b 3'.split())
    Namespace(a=['1', '2'], b=['3'])

    ######### +
    >>> parser.add_argument('--j', nargs='+')
    >>> parser.parse_args('--j 1'.split())
    Namespace(j=['1'])
    >>> parser.parse_args('--j'.split())
    : error: argument --a: expected at least one argument

    ######### *
    >>> parser.add_argument('--k', nargs='*')
    >>> parser.parse_args('--k 1'.split())
    Namespace(k=['1'])
    >>> parser.parse_args('--k'.split())
    Namespace(k=[])
    ```

    空列表`[]`还是`None`, 修改`default`值
    ```python
    # N + * 都可以
    >>> parser.add_argument('--a', nargs='+')
    >>> parser.add_argument('--b', nargs='+', default=[])
    >>> parser.parse_args(''.split())
    Namespace(a=None, b=[])
    ```

如果没有在命令行中出现对应的项 `parser.parse_args(''.split())`，则给对应的项赋值为default。特殊的是，对于可选项，如果命令行中出现了此可选项，但是之后没有跟随赋值参数 `parser.parse_args('--a'.split())`，则此时给此可选项并不是赋值default的值，而是赋值const的值。

`const`值
```python
# 可选参数的通配符，如果可选参数写了不跟参数，那么用const，而不是default
>>> parser.add_argument('--c', required=True, nargs='+') 
>>> parser.add_argument('--d', nargs='?', const='d_const', default='d_default')
>>> parser.parse_args('--c 1 --d 3'.split())
Namespace(c=['1'], d='3')
>>> parser.parse_args('--c 1 --d'.split())
Namespace(c=['1'], d='d_const')
>>> parser.parse_args('--c 1'.split())
Namespace(c=['1'], d='d_default')
```

## 2.8. 矛盾参数

```python
group = parser.add_mutually_exclusive_group()
# group = parser.add_mutually_exclusive_group(required=True)
group.add_argument("-v", "--verbose", action="store_true")
group.add_argument("-q", "--quiet", action="store_true")
```

# 3. action

## 3.1. 计数count
若default不设为0，则会有None和整数比较的异常。
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--verbosity', default=0, action='count')
args = parser.parse_args()
print('hello', args)

if args.verbosity >= 2:
    print('long long form')
elif args.verbosity >= 1:
    print('long form')
else:
    print('short form')

'''
$ python a.py
hello Namespace(verbosity=0)
short form

$ python a.py --verbosity
hello Namespace(verbosity=1)
long form

$ python a.py --verbosity --verbosity
hello Namespace(verbosity=2)
long long form
'''
```

## 3.2. 限定选项

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--level', type=int, choices=[0,1])
args = parser.parse_args()
print('hello', args)

'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py 
hello Namespace(level=None)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 0
hello Namespace(level=0)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 1
hello Namespace(level=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 12
usage: a.py [-h] [--level {0,1}]
a.py: error: argument --level: invalid choice: 12 (choose from 0, 1)
'''
```

```python
# how to specify a list arg (eg. arg which has action="append")
fruit = [apple, orange, lemon]
indexes = [1, 12, 35 , 40]
```