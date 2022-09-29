```bash
pip install pydub
```
# open
```python
from pydub import AudioSegment
song_wav_version = AudioSegment.from_wav("never_gonna_give_you_up.wav")
song_mp3_version = AudioSegment.from_mp3("never_gonna_give_you_up.mp3")
song_ogg_version = AudioSegment.from_ogg("never_gonna_give_you_up.ogg")
song_flv_version = AudioSegment.from_flv("never_gonna_give_you_up.flv")
song_mp4_version = AudioSegment.from_file("never_gonna_give_you_up.mp4", "mp4")
song_wma_version = AudioSegment.from_file("never_gonna_give_you_up.wma", "wma")
song_aac_version = AudioSegment.from_file("never_gonna_give_you_up.aiff", "aac")
```

# effect

```python
切片音频：

# pydub does things in milliseconds
ten_seconds = 10 * 1000

first_10_seconds = song[:ten_seconds]

last_5_seconds = song[-5000:]
让开始更响亮，结束更安静

# boost volume by 6dB
beginning = first_10_seconds + 6

# reduce volume by 3dB
end = last_5_seconds - 3
连接音频即声音合成（将一个文件添加到另一个文件的末尾）

without_the_middle = beginning + end
查看音屏有多长时间？

without_the_middle.duration_seconds == 15.0
audiosegments是不变的

# song is not modified
backwards = song.reverse()
交叉淡入淡出（再次，开始和结束都不会被修改）

# 1.5 second crossfade
with_style = beginning.append(end, crossfade=1500)
重复音频(重复追加生成一个文件)

# repeat the clip twice
do_it_over = with_style * 2
淡入淡出（请注意，您可以链接操作，因为一切都返回一个AudioSegment）

# 2 sec fade in, 3 sec fade out
awesome = do_it_over.fade_in(2000).fade_out(3000)
```

# output

```python
# 保存结果（所有ffmpeg支持的都支持）
# mp3
song.export("mashup.mp3", format="mp3")
# wav
song.export("mashup.wav", format="wav")


# 用标签保存结果（元数据）
song.export("mashup.mp3", format="mp3", tags={'artist': 'Various artists', 'album': 'Best of 2011', 'comments': 'This album is awesome!'})

# 您可以传递一个可选的比特率参数来使用ffmpeg支持的所有语法进行输出。
song.export("mashup.mp3", format="mp3", bitrate="192k")
```

# Example
## mp3 -> wav
```python
from pydub import AudioSegment
def song_changer(file_name_base):
    # file_name_base = 'never_gonna_give_you_up'
    song = AudioSegment.from_mp3(f"{file_name_base}.mp3")
    song.export(f"{file_name_base}.wav", format="wav")
```