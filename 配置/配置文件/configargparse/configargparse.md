- [1. Instal](#1-instal)
- [2. 头](#2-头)
- [3. config file](#3-config-file)
  - [format_values](#format_values)


# 1. Instal

configargparse 是 argparse的 增强版， configargparse 完全支持所有argparse功能 ， 可以取代 argparse 。

```bash
pip install configargparse
```
注意：不是`configparser`，那是专门用来解析ini的。


可惜不能用 notebook执行，只能用py脚本。
# 2. 头

> 一样的ArgumentParser

argparse
```python
import argparse
parser = argparse.ArgumentParser()
```

configargparse
```python
import configargparse
parser = configargparse.ArgumentParser()
```

`configargparse.ArgumentParser()`默认解读txt配置。


# 3. config file

默认的`ArgumentParser()` 直接就对 txt, ini, yaml格式都支持。

```python
# python t.py --config 'some.txt'
# python t.py --config 'some.ini'
# python t.py --config 'some.yaml'

import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", type=int)
parser.add_argument("--no_cache", type=bool)
args = parser.parse_args()
print(args)
```

```
# this is a comment
; this is also a comment (.ini style)
---            # lines that start with --- are ignored (yaml style)
-------------------
[section]      # .ini-style section names are treated as comments

# how to specify a key-value pair (all of these are equivalent):
num 1     # key is case sensitive: "Num" isn't "num"
num = 1   # (.ini style)  (white space is ignored, so num = 1 same as num=1)
num: 1    # (yaml style)
--num 1   # (argparse style)

# how to set a flag arg (eg. arg which has action="store_true")
# 可以 no_cache 表示有，不写就没有
# 区别于命令行传参， 这里可以显示传值，允许 no_cache = True 和 no_cache = False
no_cache
--no_cache
no_cache = True    # "True" and "true" are the same
no_cache: False    # Allowed


# how to specify a list arg (eg. arg which has action="append")
fruit = [apple, orange, lemon]
indexes = [1, 12, 35 , 40]
```

## format_values


看似不用`args = parser.parse_args()`的返回值`args`，但是要经过`parser.parse_args()`的初始化来读取参数，还得写。
```python
import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", default=0, type=int)
parser.add_argument("--no_cache", action='store_true')
parser.add_argument("--default_value", default=0, type=int)
parser.add_argument("--value", type=int)
parser.add_argument("--test", action='store_true')


args = parser.parse_args()
print(args)
print()
print(parser.format_values())
```
```bash
$ python t.py --config some.txt --test
Namespace(config='some.txt', num=1, no_cache=True, default_value=0, value=None, test=True)

Command Line Args:   --config some.txt --test
Config File (some.txt):
  num:               1
  no_cache:          true
Defaults:
  --default_value:   0
```
会打印来自命令行、配置文件、默认值的参数。然而，不在这三者的`value`就不会被打印。