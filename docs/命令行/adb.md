- [1. install](#1-install)
- [2. 链接问题](#2-链接问题)
  - [2.1. kill-server与start-server](#21-kill-server与start-server)
  - [2.2. 显示](#22-显示)
  - [2.3. 有线链接](#23-有线链接)
  - [2.4. 无线链接](#24-无线链接)
- [3. 常用](#3-常用)
  - [3.1. 权限root](#31-权限root)
  - [3.2. 文件传送 adb push与adb pull](#32-文件传送-adb-push与adb-pull)
  - [3.3. 安装软件 install](#33-安装软件-install)
  - [3.4. 卸载软件 uninstall](#34-卸载软件-uninstall)
- [4. adb shell终端](#4-adb-shell终端)
  - [4.1. 进入和退出](#41-进入和退出)
  - [4.2. 同linux文件系统](#42-同linux文件系统)
  - [4.3. input keyevent](#43-input-keyevent)
  - [4.4. input tap](#44-input-tap)
  - [4.5. input swipe](#45-input-swipe)
  - [4.6. screencap命令](#46-screencap命令)
  - [4.7. 截图并传输到电脑上](#47-截图并传输到电脑上)
  - [4.8. 获取手机屏幕分辨率](#48-获取手机屏幕分辨率)
  - [4.9. 修改手机时间](#49-修改手机时间)
  - [4.10. TroubleShoot](#410-troubleshoot)

---
# 1. install

adb 可以通过python安装

```bash
# https://github.com/google/python-adb
pip install adb
```
```bash
# 然后就可以用 pyadb, 相当于 adb
pyadb devices

# 然后就可以用 pyfastboot, 相当于 fastboot 
pyfastboot devices
```

# 2. 链接问题
## 2.1. kill-server与start-server
```bash
adb kill-server			# 杀死连接的设备
adb start-server		# 启动连接搜寻设备
```

## 2.2. 显示
```bash
adb devices
```
## 2.3. 有线链接
插上手机线后，开发者也打开后，usb调试也打开，然后在终端输入
```bash
$ adb devices
List of devices attached      
61BANF99HYNRAAMN        device
```
## 2.4. 无线链接
1. 将手机和电脑连在同一个局域网WIFI下
2. 查看手机的IP address (in Settings → About phone → Status).
3. **链接手机和电脑的数据线**
    ```bash
    $ adb devices
    * daemon not running; starting now at tcp:5037
    * daemon started successfully
    List of devices attached
    List of devices attached      
    61BANF99HYNRAAMN        device

    # 可以直接用5037
    $ adb tcpip 5555
    restarting in TCP mode port: 5555
    ```
4. 现在**可以拔掉插头了**
5. 比如你的手机IP是`192.168.1.101`
    ```bash
    $ adb connect 192.168.1.101:5555
    connected to 192.168.1.101:5555
    ```
PS：感觉有点神奇的是，我把手机的开发者模式关闭后，按理来说已经不能操作手机了，但居然还可以。
# 3. 常用

## 3.1. 权限root
```bash
adb root
```
## 3.2. 文件传送 adb push与adb pull

【命令格式 A->B】

- `adb push <电脑local> <手机remote>`: 电脑->手机，push推送到手机上

- `adb pull <手机remote> <电脑local>`: 手机->电脑，pull从手机上提取出来

 - `adb pull <手机remote>`
文件保存的路径为你使用adb命令时的当前目录

电脑的路径可为绝对路径：如`adb pull /sdcard/myworldstring/02.png D:/Mystring`
也可为只省略当前路径前缀的相对路径，如当前是`D:\`，
`adb pull sdcard/myworldstring/02.png ./Mystring`


## 3.3. 安装软件 install

- 新的应用（该应用未安装）：`adb install apk路径`
 
- 应用已安装，重安装覆盖： `adb install -r apk路径`

## 3.4. 卸载软件 uninstall
- 完全卸载：`adb uninstall 应用包(xxxx.xxx.com)`

- 卸载后保存软件配置和缓存文件(keep)：`abd uninstall -k 应用包(xxxx.xcom)`


# 4. adb shell终端
## 4.1. 进入和退出
> 进入

```
adb shell
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190929201039881.png)
这样输入在这个命令之下的命令就不用打`adb shell`。
比如：`adb shell input tap 400 800`，触摸屏幕（400,800）点，就可以进入adb shell模式简写为`input tap 455 838`
```
volume@lenovo:~$ adb shell
PD1616:/ $ input tap 455 838 
```

> 退出

```
exit
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190929202311208.png)
## 4.2. 同linux文件系统
> ls

`ls sdcard/MyWorldString`	显示xxx路径下的所有文件
使用-a参数：`adb shell ls -a sdcard/Download`，显示xxx路径下的所有文件（包括隐藏的）
- `-i`：输出文件索引编号和文件
- `-n`：输出UIDS、GIDS、文件列表。
- `-R`：输出当前路径下所有目录中的文件。
- `-s`：输出文件的大小（以块数为单位)和文件


备注：内存卡是sdcard
> pwd

`adb shell pwd`，查看当前路径

> cd

`cd sdcard/MyWorldString`	进入到xxx目录

> rm

`rm sdcard/MyWorldString`	删除文件或目录
- `-d`：删除testDemo目录以及目录中的所有文件和子目录，即使文件不为空
- `-f`：强制删除
- `-r`：删除testDemo目录以及目录中的所有文件和子目录

> mkdir

`adb shell mkdir/sdcard/Download`，创建xxx文件夹
- `-m`：创建文件夹并给文件夹赋予读写执行的权限
- `-p`：adb shell mkdir -p/sdcard/Download/Demo/test1，如果Demo目录不存在，执行该条命令会创建Demo目录和其子目录test1


> touch

`adb shell touch [options] <file >`		创建空白文件或改变文件时间戳


> cp

`cp [options] <source> <dest>`
如：`adb shell cp /sdcard/Download/Demo/test1.log /sdcard/Download/` ，把test1.log复制到/sdcard/Download/路径下
复制文件，不能用于文件夹之间的复制，该版本尝试无法进行目录复制。

> mv

`mv [options] <source> <dest>`
移动或者重命名文件。
移动文件：
`adb shell mv /sdcard/Download/test1.log /sdcard/Download/Demo/`
重命名：
`adb shell mv /sdcard/Download/Demo/test1.log  /sdcard/Download/Demo/test.lg`

## 4.3. input keyevent
input keyevent值
```bash
input keyevent 3		// Home主界面
input keyevent 4		// Back
input keyevent 24		// Volume+
input keyevent 25		// Volume-
input keyevent 82		// Menu ，调出应用列表
input keyevent 26		// Power,电源键。并不能唤醒屏幕，只能锁屏

input keyevent 61		// "KEYCODE_TAB",制表符
input keyevent 62		// "KEYCODE_SPACE",空格
input keyevent 66		// "KEYCODE_ENTER",回车
input keyevent 67		// "KEYCODE_DEL",删除光标前面的字符
input keyevent 112		// "KEYCODE_DEL",删除光标后面的字符

input keyevent 19		// Up
input keyevent 20		// Down
input keyevent 21		// Left
input keyevent 22		// Right
input keyevent 23		// Select(Ok)
```

## 4.4. input tap
```
input tap x y
```
模拟触屏一次，以左上角为原点，横轴是x轴，纵轴是y轴
如：`input tap 400 500`，触摸(400,500)

多重点击
```python
import subprocess

for i in range(50):
    subprocess.run("adb shell input tap 400 500", shell=True)
```


## 4.5. input swipe
```bash
input swipe <x1> <y1> <x2> <y2>[<duration(ms)>]
```
模拟滑屏，从(x1,y1)到(x2,y2)，持续duration(ms)按压时间

## 4.6. screencap命令
【格式】
`screencap -p [FILENAME]`
在当下屏幕上截图，后面的路径是图片在设备中的文件路径（这个FILENAME在这里是绝对路径/sdcard/1.png）
- `-p`: save the file as a png.

## 4.7. 截图并传输到电脑上
```bash
# 截屏保存在手机中，是/sdcard/1.png
# 上传到电脑上
# 删除手机中保存的图片

adb shell screencap -p /sdcard/1.png
adb pull /sdcard/1.png
adb shell rm /sdcard/1.png
```

```python
import subprocess
import PIL

def get_screen():
    '''screen shot and upload'''
    cmds = [
        'adb shell screencap -p /sdcard/1.png',
        'adb pull /sdcard/1.png',
        'adb shell rm /sdcard/1.png'
    ]
    for cmd in cmds:
        subprocess.check_output(cmd, shell=True)
    return Image.open('1.png').convert("RGB")
```


## 4.8. 获取手机屏幕分辨率
```bash
# 宽x高 WH
$ adb shell wm size
Physical size: 1080x2400
```

```python
import re
import subprocess

def get_size():
    '''width x height'''
    cmd = 'adb shell wm size'
    size = subprocess.check_output(cmd, shell=True)
    size = bytes.decode(size)
    size = re.findall('[0-9]+', size)
    return (int(size[0]), int(size[1]))
```
## 4.9. 修改手机时间

`adb shell date xxx`，但如果root了但不彻底，就得用su的方式
```bash
$ adb shell
$ su
$ date '20:45:00'
Mon Jan 30 20:45:00 CST 2023
$ date
Mon Jan 30 20:45:00 CST 2023

$ date '10:10'
$ date '10:10:10'
$ date 100112361981.55

$ exit
# exit后时间才生效
```

```python
def big_clip(self, str_time):
    def small_clip(cmd):
        pg.typewrite(cmd)
        pg.press('enter')

    small_clip(f"date '{str_time}'")
    small_clip('exit')
    small_clip('su')
```


## 4.10. TroubleShoot

```
$ adb devices
List of devices attached
faf80ac1	no permissions (user in plugdev group; are your udev rules wrong?); see [http://developer.android.com/tools/device.html]
```

1. 修改外设规则

不一定是`51-android.rules`
```bash
$ ls /etc/udev/rules.d/
60-vboxdrv.rules

# 在文件末尾添加
# ffb0 是你查找手机设备的usb 的地址。Bus 001 Device 014: ID 19d2:ffb0 ZTE WCDMA Technologies MSM
$ vim /etc/udev/rules.d/60-vboxdrv.rules
ATTR{idProduct}=="ffb0", SYMLINK+="android_adb", MODE="0660", GROUP="plugdev", TAG+="uaccess", SYMLINK+="android"
```
2. 重编

```bash
$ sudo usermod -a -G plugdev $(id -u -n)
$ sudo udevadm control --reload-rules
$ sudo service udev restart
$ sudo udevadm trigger
```

3. 重启adb

```bash
$ adb kill-server 
$ adb start-server
$ adb devices
```

总结:
```bash
$ lsusb
找到ID号

read ID
fileName=/etc/udev/rules.d/`ls /etc/udev/rules.d/`
content='ATTR{idProduct}=="'$ID'", SYMLINK+="android_adb", MODE="0660", GROUP="plugdev", TAG+="uaccess", SYMLINK+="android"'
echo $content >> $fileName
```