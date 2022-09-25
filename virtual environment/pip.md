- [1. 换源](#1-换源)
  - [1.1. 国内源](#11-国内源)
  - [1.2. 临时换源](#12-临时换源)
  - [1.3. 永久修改](#13-永久修改)
    - [1.3.1. 手动](#131-手动)
    - [1.3.2. pip自动](#132-pip自动)
- [命令](#命令)
  - [包列表](#包列表)

---

# 1. 换源

## 1.1. 国内源

新版ubuntu要求使用https源，要注意。

- 清华：
  `https://pypi.tuna.tsinghua.edu.cn/simple`
  (install.trusted-host is `https://pypi.tuna.tsinghua.edu.cn`)
- 阿里云：`https://mirrors.aliyun.com/pypi/simple/`
- 中国科技大学 `https://pypi.mirrors.ustc.edu.cn/simple/`


阿里云怎么限速了...

## 1.2. 临时换源

可以在使用pip的时候加参数`-i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com`，其中`-i`表示换源，`--trusted-host`表示信任源。不然会有warning，

![20200602155038752](/image/20200602155038752.png)

例如：
```bash
$ python -m pip install pyspider -i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```
这样就会从阿里云这边的镜像去安装pyspider库。

## 1.3. 永久修改


### 1.3.1. 手动
> Linux下

修改`~/.config/pip/pip.conf` (没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹)

内容如下：
```
$ cat ~/.config/pip/pip.conf
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host = mirrors.aliyun.com
```
PS：不管是`pip`还是`pip3`，都是建立`.pip`，而不是`.pip3`

> windows下

直接在user目录中创建一个pip目录，如：`C:\Users\Administrator\pip`，新建文件`pip.ini`。

![20200422142350661](/image/20200422142350661.png)

### 1.3.2. pip自动
linux和win都一样。

- 设置
```bash
$ pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
Writing to /root/.config/pip/pip.conf
$ pip config set install.trusted-host mirrors.aliyun.com
Writing to /root/.config/pip/pip.conf
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

# 命令

## 包列表
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