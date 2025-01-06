[toc]

## install

方式：

1、直接scrcpy项目：https://github.com/Genymobile/scrcpy/releases

2、adb 可以通过python安装

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

## 链接问题
### kill-server与start-server
```bash
adb kill-server			# 杀死连接的设备
adb start-server		# 启动连接搜寻设备
```

### 显示
```bash
adb devices
```
### 有线链接
插上手机线后，开发者也打开后，usb调试也打开，然后在终端输入
```bash
$ adb devices
List of devices attached      
61BANF99HYNRAAMN        device
```
### 无线链接
将手机和电脑连在同一个局域网WIFI下，或者**直接手机开wifi给电脑**

1. **链接手机和电脑的数据线**
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

2. 手机ip：

    如果手机和电脑连在同一个局域网WIFI下：则查看手机的IP address (in Settings → About phone → Status)，比如你的手机IP是`192.168.1.101`

    如果手机开wifi给电脑，那么简单从 ipconfig 看 wlan，网关ip就可以。`192.168.101.130`

    ```bash
    Wireless LAN adapter WLAN:
    
       Connection-specific DNS Suffix  . :
       IPv6 Address. . . . . . . . . . . : 240e:462:700:3f76:386c:1045:af71:b3bd
       Temporary IPv6 Address. . . . . . : 240e:462:700:3f76:88cf:c766:17cc:9a47
       Link-local IPv6 Address . . . . . : fe80::21e7:847e:e1f:c1dd%28
       IPv4 Address. . . . . . . . . . . : 192.168.101.95
       Subnet Mask . . . . . . . . . . . : 255.255.255.0
       Default Gateway . . . . . . . . . : fe80::f89f:98ff:fe5b:24ed%28
                                           192.168.101.130
    ```

    

    然后

    ```bash
    $ adb connect 192.168.1.101:5555
    connected to 192.168.1.101:5555
    ```

3. 现在**可以拔掉插头了**

​	PS：感觉有点神奇的是，我把手机的开发者模式关闭后，按理来说已经不能操作手机了，但居然还可以。



## 常用

### 权限root
```bash
adb root
```
### 文件传送 adb push与adb pull

【命令格式 A->B】

- `adb push <电脑local> <手机remote>`: 电脑->手机，push推送到手机上

- `adb pull <手机remote> <电脑local>`: 手机->电脑，pull从手机上提取出来

 - `adb pull <手机remote>`
文件保存的路径为你使用adb命令时的当前目录

电脑的路径可为绝对路径：如`adb pull /sdcard/myworldstring/02.png D:/Mystring`
也可为只省略当前路径前缀的相对路径，如当前是`D:\`，
`adb pull sdcard/myworldstring/02.png ./Mystring`


### 安装软件 install

- 新的应用（该应用未安装）：`adb install apk路径`

- 应用已安装，重安装覆盖： `adb install -r apk路径`

### 卸载软件 uninstall
- 完全卸载：`adb uninstall 应用包(xxxx.xxx.com)`

- 卸载后保存软件配置和缓存文件(keep)：`abd uninstall -k 应用包(xxxx.xcom)`

## adb shell终端

两种方式：

1、直接一次性命令

```bash
(base) PS D:\NOTES> adb shell input swipe 1050 600 1050 1600 500
(base) PS D:\NOTES> adb shell input swipe 1050 600 1050 1600 500
```

2、在adb shell中

```bashh
(base) PS D:\NOTES> adb shell
RMX2205CN:/ $ input swipe 1050 600 1050 1600 500
RMX2205CN:/ $ input swipe 1050 600 1050 1600 500
RMX2205CN:/ $ exit
(base) PS D:\NOTES>
```

### 同linux文件系统

内存卡位置，`/storage/emulated/0` 和 `/sdcard/` 是一样的地方。

`su`来获取root权限

```bash
(base) PS D:\NOTES> adb shell
RMX2205CN:/ $ su
RMX2205CN:/ # exit
RMX2205CN:/ $ exit
```

### input keyevent
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

### input tap
```
input tap x y
```
模拟触屏一次，以左上角为原点，横轴是x轴，纵轴是y轴
如：`input tap 400 500`，触摸(400,500)



优化：单个命令很慢，但支持多线程来加快速度，实现快速连击

```python
import subprocess

for i in range(50):
    subprocess.run("adb shell input tap 400 500", shell=True)
```


### input swipe
```bash
input swipe <x1> <y1> <x2> <y2> [<duration(ms)>]
```
模拟滑屏，从(x1,y1)到(x2,y2)，持续duration(ms)按压时间

### screencap命令

【格式】
`screencap -p [FILENAME]`
在当下屏幕上截图，后面的路径是图片在设备中的文件路径（这个FILENAME在这里是绝对路径/sdcard/1.png）
- `-p`: save the file as a png.

#### 截图并传输到电脑上
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

def get_screen(save_path):
    '''screen shot and upload'''
    file_path = f'{save_path}/{1.png}'
    cmds = [
        'adb shell screencap -p /sdcard/1.png',
        f'adb pull /sdcard/1.png {file_path}',
        'adb shell rm /sdcard/1.png'
    ]
    for cmd in cmds:
        subprocess.check_output(cmd, shell=True)
    return Image.open(file_path).convert("RGB")
```


### 获取手机屏幕分辨率 wm size
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
### 修改手机时间 date 

```bash
(base) PS D:\NOTES> adb shell date '20:45:00'
Mon Jan  6 20:45:00 CST 2025
date: cannot set date: Operation not permitted
```

得进入adb shell 用su的方式

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

### TroubleShoot

#### 无法识别设备

（1）90%的情况，数据线有问题。

（2）一般win10、11都已经自带驱动了。如果出错，试试 MiFlash 安装驱动。
#### no permissions

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