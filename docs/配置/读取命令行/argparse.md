- [1. Install](#1-install)
- [2. Base](#2-base)
  - [2.1. hello example](#21-hello-example)
  - [2.2. 帮助提示](#22-帮助提示)
  - [2.3. 自动匹配前缀](#23-自动匹配前缀)
  - [2.4. 长短参数](#24-长短参数)
  - [2.5. type](#25-type)
  - [2.6. 必选参数\&可选参数](#26-必选参数可选参数)
- [3. action](#3-action)
  - [3.1. 计数count](#31-计数count)
  - [3.2. 限定选项](#32-限定选项)
- [how to specify a list arg (eg. arg which has action="append")](#how-to-specify-a-list-arg-eg-arg-which-has-actionappend)

# 1. Install
内置于python，不需要安装
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
## 2.2. 帮助提示

两处帮助提示。
```python
import argparse

# description是此脚本的提示信息
parser = argparse.ArgumentParser(description='一个最简单的argsparse库的使用的例子')

# help是参数的提示信息
parser.add_argument('--integer', type=int, help='一个输入的整数\n不能换行')

args = parser.parse_args()
print('hello', args.integer)

'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py -h
usage: a.py [-h] [--integer INTEGER]

一个最简单的argsparse库的使用的例子

optional arguments:
  -h, --help         show this help message and exit
  --integer INTEGER  一个输入的整数 不能换行
'''
```

## 2.3. 自动匹配前缀
唯一前缀，怎么缩短都行。注意缩到最短，是`--i`，不要记混成`-i`。
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--integer', type=int)
args = parser.parse_args()
print('hello', args)

'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py --integer 1
hello Namespace(integer=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --integ 1  
hello Namespace(integer=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --in 1   
hello Namespace(integer=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --i 1 
hello Namespace(integer=1)
'''
```
前缀冲突
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--integer1', type=int)
parser.add_argument('--integer2', type=int)
args = parser.parse_args()
print('hello', args)

'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py --i 1      
usage: a.py [-h] [--integer1 INTEGER1] [--integer2 INTEGER2]
a.py: error: ambiguous option: --i could match --integer1, --integer2
(fff) PS E:\CodeProject\Git\rubbish> python a.py --integer1 1
hello Namespace(integer1=1, integer2=None)
'''
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

> int, float, str

```python
parser.add_argument('a', type=int)
```

加上默认值属性，用于配置默认路径。
```python
parser.add_argument("--datadir", type=str, default='./data/llff/fern', 
                        help='input data directory')
```
> bool 

还用上面的写法会在False上出问题，得用action

```python
# 用上表示True，不用False，不能赋值。
parser.add_argument('--online', action='store_true')
'''
$ python a.py
hello Namespace(online=False)

$ python a.py --online  
hello Namespace(online=True)

$ python a.py --online True
usage: a.py [-h] [--online]
a.py: error: unrecognized arguments: True

$ python a.py --online False
usage: a.py [-h] [--online]
a.py: error: unrecognized arguments: False
'''
```

## 2.6. 必选参数&可选参数

> Method1: 有没有`--`
```python
# 必选
parser.add_argument('a', type=int)

# 可选
parser.add_argument('--b', type=int)
```
`python a.py 1`

```python
import argparse

parser = argparse.ArgumentParser()

# 必选
parser.add_argument('a', type=int)

# 可选
parser.add_argument('--b', type=int)

# 集成为args
args = parser.parse_args()

# 获得传入的参数
print('hello', args)

'''
$ python a.py  
usage: a.py [-h] [--b B] a
a.py: error: the following arguments are required: a

$ python a.py a=1
usage: a.py [-h] [--b B] a
a.py: error: argument a: invalid int value: 'a=1'

$ python a.py 1
hello Namespace(a=1, b=None)
'''
```

> Method2：`--`并且`required=True`
```python
# 必选
parser.add_argument('--c', type=int, required=True)

# 可选
parser.add_argument('--d', type=int)
```
`python a.py --c=1`
```python
import argparse

parser = argparse.ArgumentParser()

# 必选
parser.add_argument('--c', type=int, required=True)

# 可选
parser.add_argument('--d', type=int)

# 集成为args
args = parser.parse_args()

# 获得传入的参数
print('hello', args)

'''
$ python a.py  
usage: a.py [-h] --c C [--d D]
a.py: error: the following arguments are required: --c

$ python a.py 1    
usage: a.py [-h] --c C [--d D]
a.py: error: the following arguments are required: --c

$ python a.py --c=1
hello Namespace(c=1, d=None)
'''
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
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 0
hello Namespace(level=0)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 1
hello Namespace(level=1)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --level 12
usage: a.py [-h] [--level {0,1}]
a.py: error: argument --level: invalid choice: 12 (choose from 0, 1)
'''
```








# how to specify a list arg (eg. arg which has action="append")
fruit = [apple, orange, lemon]
indexes = [1, 12, 35 , 40]
