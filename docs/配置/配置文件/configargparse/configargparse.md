- [1. configargparse](#1-configargparse)
  - [1.1. Instal](#11-instal)
  - [1.2. 头](#12-头)
  - [1.3. unique feature](#13-unique-feature)
    - [1.3.1. config file](#131-config-file)
    - [1.3.2. parse string](#132-parse-string)
    - [1.3.3. format\_values](#133-format_values)
  - [1.4. project example](#14-project-example)
    - [1.4.1. verbosity 分组](#141-verbosity-分组)
    - [1.4.2. 小型项目](#142-小型项目)
    - [1.4.3. 大型项目自定义分组](#143-大型项目自定义分组)

# 1. configargparse
## 1.1. Instal

configargparse 是 argparse的 增强版， configargparse 完全支持所有argparse功能 ， 可以取代 argparse 。

```bash
pip install configargparse
```
注意：不是`configparser`，那是专门用来解析ini的。


可惜不能用 notebook执行，只能用py脚本。
## 1.2. 头

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


## 1.3. unique feature

which `argparse` don't have.
### 1.3.1. config file

默认的`ArgumentParser()` 直接就对 txt, ini, yaml格式都支持。

```python
# python t.py --config 'some.txt'
# python t.py --config 'some.ini'
# python t.py --config 'some.yaml'

import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", type=int)
parser.add_argument("--no_cache", action='store_true')
args = parser.parse_args()
print(args)

# Namespace(config='some.txt', num=1, no_cache=True)
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
# 可以 no_cache 表示 True，不写就 False
# 此外，区别于命令行传参， 这里可以显示传值，允许 no_cache = True 和 no_cache = False
no_cache
--no_cache
no_cache = True    # "True" and "true" are the same
no_cache: False    # "False"， Allowed

```

### 1.3.2. parse string

```python
import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", default=0, type=int)
parser.add_argument("--no_cache", action='store_true')

cmd = '--no_cache'
# 甚至还能融合config file。cmd = '--config ./some.txt --no_cache'

parser.parse_args(cmd)
print(parser.parse_args(cmd))

'''
Namespace(config=None, no_cache=True, num=0)
'''
```

### 1.3.3. format_values

直接想要`parser.format_values()`，看似不用`args = parser.parse_args()`的返回值`args`。但是`parser.parse_args()`不仅只是返回参数，而且是一个初始化的过程。所以还得写。
```python
import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", default=0, type=int)
parser.add_argument("--no_cache", action='store_true')
parser.add_argument("--default_value", default=0, type=int)
parser.add_argument("--value", type=int)
parser.add_argument("--test", action='store_true')


parser.parse_args()
print(parser.format_values())
```
```bash
$ python t.py --config some.txt --test
Command Line Args:   --config some.txt --test
Config File (some.txt):
  num:               1
  no_cache:          true
Defaults:
  --default_value:   0
```
会打印来自命令行、配置文件、默认值的参数。然而，不在这三者的`value`就不会被打印。


## 1.4. project example

### 1.4.1. verbosity 分组
当显示帮助消息时，ArgumentParser 将 命令行 参数分组为 “positional arguments” 和 “optional arguments”
```python
# 互斥
group = parser.add_mutually_exclusive_group()
group.add_argument('--verbose', action='store_true')
group.add_argument('--quiet', action='store_true')
args = parser.parse_args()
print('hello', args)

if args.quiet:
    print('quiet form')
elif args.verbose:
    print('long form')
else:
    print('normal form')


'''
(fff) PS E:\CodeProject\Git\rubbish> python a.py --h
usage: a.py [-h] [--verbose | --quiet]

optional arguments:
  -h, --help  show this help message and exit
  --verbose
  --quiet
(fff) PS E:\CodeProject\Git\rubbish> python a.py 
hello Namespace(verbose=False, quiet=False)
normal form
(fff) PS E:\CodeProject\Git\rubbish> python a.py --quiet
hello Namespace(verbose=False, quiet=True)
(fff) PS E:\CodeProject\Git\rubbish> python a.py --verbose
hello Namespace(verbose=True, quiet=False)
long form
'''
```

### 1.4.2. 小型项目
```python
import configargparse

def config_parser(cmd=None):
    parser = configargparse.ArgumentParser()
    
    # config file
    parser.add_argument('--config', is_config_file=True, help='config file path')
    parser.add_argument('--with_depth', action='store_true')
    parser.add_argument("--batch_size", type=int, default=4096)
    parser.add_argument("--seed", type=int, default=None, help="random seed for generating consistent images per prompt")
    parser.add_argument("--lr_init", type=float, default=0.02, help='learning rate')    
    parser.add_argument('--model_name', type=str, default='TensorVMSplit', choices=['TensorVMSplit', 'TensorCP'])

    if cmd is not None:
        return parser.parse_args(cmd)
    else:
        return parser.parse_args()

        
def main():
    # cmd = '--config ./config.txt --with_depth'
    # args = config_parser(cmd)
    args = config_parser()
    print(args)

    #### 解系参数
    # 根据是不是None而有不同的处理方案
    if args.seed is None:
        ...
    else:
        ...

    if  args.with_depth:
        ...


    engine()
```



### 1.4.3. 大型项目自定义分组
定一个类,
`__init__()`包办，生成实例就直接返回args。`args = Arguments().args`


<https://github.com/derv82/wifite2/blob/master/wifite/args.py>
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from .util.color import Color

import argparse, sys

class Arguments(object):
    ''' Holds arguments used by the Wifite '''

    def __init__(self, configuration):
        # Hack: Check for -v before parsing args; so we know which commands to display.
        self.verbose = '-v' in sys.argv or '-hv' in sys.argv or '-vh' in sys.argv
        self.config = configuration
        self.args = self.get_arguments()

    def _verbose(self, msg):
        if self.verbose:
            return Color.s(msg)
        else:
            return argparse.SUPPRESS

    def get_arguments(self):
        ''' Returns parser.args() containing all program arguments '''

        parser = argparse.ArgumentParser(usage=argparse.SUPPRESS,
                formatter_class=lambda prog: argparse.HelpFormatter(
                    prog, max_help_position=80, width=130))

        self._add_global_args(parser.add_argument_group(Color.s('{C}SETTINGS{W}')))
        self._add_wep_args(parser.add_argument_group(Color.s('{C}WEP{W}')))
        self._add_wpa_args(parser.add_argument_group(Color.s('{C}WPA{W}')))
        self._add_wps_args(parser.add_argument_group(Color.s('{C}WPS{W}')))
        self._add_pmkid_args(parser.add_argument_group(Color.s('{C}PMKID{W}')))
        self._add_command_args(parser.add_argument_group(Color.s('{C}COMMANDS{W}')))

        return parser.parse_args()


    def _add_global_args(self, glob):
        glob.add_argument('-v',
            '--verbose',
            action='count',
            default=0,
            dest='verbose',
            help=Color.s('Shows more options ({C}-h -v{W}). Prints commands and ' +
                'outputs. (default: {G}quiet{W})'))
        
        # ...

    def _add_wep_args(self, wep):
        # WEP
        wep.add_argument('--wep',
            action='store_true',
            dest='wep_filter',
            help=Color.s('Show only {C}WEP-encrypted networks{W}'))

    def _add_wpa_args(self, wpa):
        wpa.add_argument('--wpa',
            action='store_true',
            dest='wpa_filter',
            help=Color.s('Show only {C}WPA-encrypted networks{W} (includes {C}WPS{W})'))
        wpa.add_argument('-wpa', help=argparse.SUPPRESS, action='store_true',
                dest='wpa_filter')

if __name__ == '__main__':
    from .config import Configuration
    Configuration.initialize(False)
    # 这里调用
    a = Arguments(Configuration)
    args = a.args
    for (key,value) in sorted(args.__dict__.items()):
        Color.pl('{C}%s: {G}%s{W}' % (key.ljust(21),value))
```