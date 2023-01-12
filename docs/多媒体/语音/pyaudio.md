[toc] 

---

[[toc]]

---

- [1. pyaudio](#1-pyaudio)
  - [1.1. Intro](#11-intro)
  - [1.2. pyaudio](#12-pyaudio)
    - [1.2.1. 固定秒数录音](#121-固定秒数录音)
    - [1.2.2. 不定秒数录音](#122-不定秒数录音)

---

# 1. pyaudio
## 1.1. Intro


> Installation

```bash
pip install pyaudio
pip install wave
```

## 1.2. pyaudio
### 1.2.1. 固定秒数录音
```python
import wave
import pyaudio

# 定义数据流块
FORMAT = pyaudio.paInt16    # paInt16（一个数据点占2个字节）或者paInt32（一个数据点占4个字节）
CHANNELS = 1    # 声道数
RATE = 16000    # 采样率
CHUNK = 1024    # 一个buffer(chunk)包含多少帧


# 创建PyAudio对象
p = pyaudio.PyAudio()

# 打开数据流
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK)

print("* recording")

# 开始录音
RECORD_SECONDS = 5  # 录音时间
frames = []
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

# 停止数据流
stream.stop_stream()
stream.close()

# 关闭PyAudio
p.terminate()

# 写入录音文件
WAVE_OUTPUT_FILENAME = "output.wav"
wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(CHANNELS)   # 声道数目
wf.setsampwidth(p.get_sample_size(FORMAT))  # 采样带宽
wf.setframerate(RATE)   # 频率
wf.writeframes(b''.join(frames))
wf.close()
```

### 1.2.2. 不定秒数录音

```python
import time
import wave

import pyaudio


class MyAudio:
    # 定义音频属性
    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    WAVE_OUTPUT_FILENAME = "output.wav"  
    
    def __init__(self):
        pass
        
    def _record_start(self):
        # 创建PyAudio对象
        self.p = pyaudio.PyAudio()

        # 创建wave对象        
        self.wf = wave.open(self.WAVE_OUTPUT_FILENAME, 'wb')
        self.wf.setnchannels(self.CHANNELS)
        self.wf.setsampwidth(self.p.get_sample_size(self.FORMAT))
        self.wf.setframerate(self.RATE)


        def callback(in_data, frame_count, time_info, status):
            self.wf.writeframes(in_data)
            return (in_data, pyaudio.paContinue)

        # 打开数据流
        self.stream = self.p.open(format=self.FORMAT,
                        channels=self.CHANNELS,
                        rate=self.RATE,
                        input=True,
                        frames_per_buffer=self.CHUNK,
                        stream_callback=callback)

        print("* recording")

        # 开始录音
        self.stream.start_stream()


    def _record_stop(self):
        # 停止数据流
        self.stream.stop_stream()
        self.stream.close()

        # 关闭PyAudio
        self.p.terminate()

        # 关闭 wave
        self.wf.close()

        print("* done recording")


    def _record_play(self):
        wf=wave.open(self.WAVE_OUTPUT_FILENAME,'rb')
 

        p=pyaudio.PyAudio()
        stream=p.open(
            format=p.get_format_from_width(width=wf.getsampwidth()),
            channels=wf.getnchannels(),
            rate=wf.getframerate(),
            output=True
        )
        
        print('* play...')
        
        while True:
            data=wf.readframes(self.CHUNK)
            if data==b"":   # 空字节退出
                break
            stream.write(data)
        
        # 停止数据流
        stream.stop_stream()
        stream.close()

        # 关闭PyAudio
        p.terminate()

        # 关闭 wave
        wf.close()

        print('* done play')

if __name__ == '__main__':
    myAudio = MyAudio()
    myAudio._record_start()
    time.sleep(3)
    myAudio._record_stop()
    myAudio._record_play()
```
