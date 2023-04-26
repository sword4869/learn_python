- [1. 视频](#1-视频)
  - [1.1. 转换视频格式](#11-转换视频格式)
  - [1.2. 提取声音](#12-提取声音)
  - [1.3. 提取图片](#13-提取图片)
- [2. 由图片生成gif](#2-由图片生成gif)


---

<http://ffmpeg.org/download.html>
<https://itsfoss.com/ffmpeg/>

## 1. 视频

```bash
# 显示信息，同时也是输入文件
# ffmpeg -i file_name
# -hide_banner不显示ffmpeg配置信息

$ ffmpeg -i 001.mp3 -hide_banner
Input #0, mp3, from '001.mp3':
  Metadata:
    encoder         : Lavf58.29.100
  Duration: 00:00:25.66, start: 0.046042, bitrate: 32 kb/s
  Stream #0:0: Audio: mp3, 24000 Hz, mono, fltp, 32 kb/s
At least one output file must be specified
```

### 1.1. 转换视频格式
```bash
# 转换格式
ffmpeg -i video_input.mp4 video_output.avi 
ffmpeg -i audio_input.mp3 audio_output.ogg 

# specify more output files:
ffmpeg -i audio_input.wav audio_output_1.mp3 audio_output_2.ogg
```

### 1.2. 提取声音
```bash
# Extract Audio from Video
ffmpeg -i video.mp4 -vn audio.mp3
```

```bash
# 采样频率
-ar 44100 
# 通道数
-ac 2

ffmpeg -i 001.mp3 -ar 16000 -ac 1 001.wav 
```

-stats

```bash
# Audio Volume Multiplying
# The first command amplifies the volume 1.5 times. The second command makes the audio 1/4 (0.25) times quieter.

ffmpeg -i input.wav -af "volume=1.5" output.wav 
ffmpeg -i input.ogg -af "volume=0.75" output.ogg
```

### 1.3. 提取图片

```bash
ffmpeg -i "video.mov" -f image2 "%05d.png"
```
## 2. 由图片生成gif
```bash
# fps 20
# -i 图片格式, 01.png,02.png
ffmpeg -r 20 -i "%01d.png" "name.gif"
```
