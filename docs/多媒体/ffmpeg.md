<http://ffmpeg.org/download.html>

#示例
```bash
# Mp3 转换为 16k 16bit 单声道 pcm
ffmpeg -y -i test.mp3 -acodec pcm_s16le -f s16le -ac 1 -ar 16000 test.pcm

# wav 转换为 16k 16bit 单声道 pcm
ffmpeg -y -i test.wav -acodec pcm_s16le -f s16le -ac 1 -ar 16000 test.pcm

# 44100,16bit,单声道pcm 转换为 16k 16bit 单声道 pcm
ffmpeg -y -f s16le -ar 44100 -ac 1 -i test.pcm -acodec pcm_s16le -f s16le -ac 1 -ar 16000 test.pcm
```

# cmd = f'ffmpeg -i {inmp4} -i {wav_file} -codec copy ./final_output.mp4'
# cmd = f'ffmpeg -i {inmp4} -i {wav_file} -codec copy ./demo_mead_rec.mp4'