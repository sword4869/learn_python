- [1. 描述](#1-描述)
- [2. 写](#2-写)
- [3. 读](#3-读)
  - [3.1. 不包含DEFAULT](#31-不包含default)
  - [3.2. 包含DEFAULT](#32-包含default)
- [4. 符号:引号、等号、%](#4-符号引号等号)
- [5. Reference](#5-reference)

---

# 1. 描述
- 第三方库：
```python
pip install configparser
```
- 配置文件`example.ini`格式，比如
```
[DEFAULT]
serveraliveinterval = 45
compression = yes
compressionlevel = 9

[bitbucket.org]
user = hg

[topsecret.server.com]
port = 50022
forwardx11 = no
```

# 2. 写
```python
# -*- coding: utf-8 -*-

import configparser

config = configparser.ConfigParser()

# 直接初始化section
config['DEFAULT'] = {'ServerAliveInterval': '45','Compression': 'yes','CompressionLevel': '9'}

# 先创建section，才能再写入键值对
config['bitbucket.org'] = {}
config['bitbucket.org']['User'] = 'hg'

# 获取section对象后写键值对
config['topsecret.server.com'] = {}
topsecret = config['topsecret.server.com']
topsecret['Port'] = '50022'     # mutates the parser
topsecret['ForwardX11'] = 'no'  # same here

# 写入到文件中
with open('example.ini', 'w') as configfile:
    config.write(configfile)
```


# 3. 读

## 3.1. 不包含DEFAULT
```python
[bitbucket.org]
user = hg

[topsecret.server.com]
port = 50022
forwardx11 = no
```

```python
# -*- coding: utf-8 -*-

import configparser

config = configparser.ConfigParser()
config.read("example.ini")

# 列出section
print(config.sections())
# ['bitbucket.org', 'topsecret.server.com']

# 检测section
print('bitbucket.org' in config)
# True

# 列出键
print(config.options("bitbucket.org"))
# ['user']

# 列出键
# print(config['bitbucket.org'])	# <Section: bitbucket.org>
for key in config['bitbucket.org']:  
    print(key,end=' ')
print()
# user

# 读取键值对
print(config["bitbucket.org"]["user"])
# hg

# 用读取到的section读取键值对
bitbucket = config["bitbucket.org"]
user = bitbucket["user"]
print(user)
# hg
```

## 3.2. 包含DEFAULT 
命名为`DEFAULT`的section是特殊的：
- 会被`config.sections()`跳过，但检测section还是能检测到的
- 其他的section会包含`DEFAULT`section中的内容

```
[DEFAULT]
serveraliveinterval = 45
compression = yes
compressionlevel = 9

[bitbucket.org]
user = hg

[topsecret.server.com]
port = 50022
forwardx11 = no
```
```python
# -*- coding: utf-8 -*-

import configparser

config = configparser.ConfigParser()
config.read("example.ini")

# 列出section
print(config.sections())
# ['bitbucket.org', 'topsecret.server.com']

# 检测section
print('DEFAULT' in config)
# True

# 列出键
print(config.options("bitbucket.org"))
# ['user', 'serveraliveinterval', 'compression', 'compressionlevel']

# 列出键
print(config['bitbucket.org'])
    print(key,end=' ')
print()
# user serveraliveinterval compression compressionlevel

# 读取键值对
print(config["bitbucket.org"]["serveraliveinterval"])
# 45

# 用读取到的section读取键值对
bitbucket = config["bitbucket.org"]
serveraliveinterval = bitbucket["serveraliveinterval"]
print(serveraliveinterval)
# 45
```

# 4. 符号:引号、等号、%
- 引号：不用特意将字符串带上引号
- 等号：值中有`=`，就直接写就行。
- %：如果你不想插值的话，`config = configparser.ConfigParser(interpolation=None)`，不要使用`RawConfigParser `

```
[words]
w1 = 1+1=2
w2 = '1+1=2'
w3 = 1+1\=2
w4 = %45%56
```
```python
# -*- coding: utf-8 -*-

import configparser

config = configparser.ConfigParser(interpolation=None)
config.read("example.ini")

# 读取键值对
for key in config["words"]:
    print(config["words"][key])

'''
1+1=2
'1+1=2'
1+1\=2
%45%56
'''
```

# 5. Reference
<https://pypi.org/project/configparser/>
<https://docs.python.org/3/library/configparser.html>