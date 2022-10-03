- [1. 换源](#1-换源)
  - [1.1. 国内源](#11-国内源)
  - [1.2. 临时换源](#12-临时换源)
  - [1.3. 永久修改](#13-永久修改)
    - [1.3.1. pip自动](#131-pip自动)
    - [1.3.2. 手动](#132-手动)
- [2. 命令](#2-命令)
  - [2.1. 包列表](#21-包列表)

---

# 1. 换源

## 1.1. 国内源

新版ubuntu要求使用https源，要注意。

|institution| global.index-url | install.trusted-host |
|-|-|-|
|清华|`https://pypi.tuna.tsinghua.edu.cn/simple`|`https://pypi.tuna.tsinghua.edu.cn`|
|阿里云(限速)|`https://mirrors.aliyun.com/pypi/simple/`|
|中国科技大学|`https://pypi.mirrors.ustc.edu.cn/simple/`|


## 1.2. 临时换源

可以在使用pip的时候加参数`-i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com`，其中`-i`表示换源，`--trusted-host`表示信任源。不然会有warning，

![20200602155038752](/image/20200602155038752.png)

例如：
```bash
$ pip install pyspider -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host https://pypi.tuna.tsinghua.edu.cn
```

## 1.3. 永久修改


### 1.3.1. pip自动
linux和win都一样。

- 设置
```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip config set install.trusted-host https://pypi.tuna.tsinghua.edu.cn
```
修改别的源的话直接再打一遍就会覆盖掉。
- 查看效果
```bash
$ pip config list
global.index-url='https://mirrors.aliyun.com/pypi/simple/'
install.trusted-host='mirrors.aliyun.com'
```
- 删除
```bash
$ pip config unset global.index-url 
Writing to /root/.config/pip/pip.conf

# 就少了[global]的index-url
$ cat /root/.config/pip/pip.conf
[install]
trusted-host = mirrors.aliyun.com

# 再删install的trusted-host
$ pip config unset install.trusted-host
```
### 1.3.2. 手动

内容如下：
```
$ vim ~/.config/pip/pip.conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

> Linux下

修改文件`~/.config/pip/pip.conf`


> windows下

修改文件`C:/Users/Admin/AppData/Roaming/pip/pip.ini`


# 2. 命令

## 2.1. 包列表
```bash
# 打印到控制台
$ pip list
```

```bash
# 输出到文件中
$ pip freeze > requirements.txt

# 安装文件中的包列表
$ pip install -r requirement.txt
```
```bash
# 更新包
pip install --upgrade MODULE

# 更新pip
pip install --upgrade pip
```