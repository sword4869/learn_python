# progressbar

## Install

```bash
pip install tdqm
```
```python
from tqdm import tqdm
```

## Basic

### iterable
> 手动关闭
```python
l1 = list(range(5))

# tdqm(a iterable object, not iterator)
pbar1 = tqdm(l1)
for i in pbar1:
    # print(i) , 迭代的东西还是可以用的
    sleep(0.5)
pbar1.close()

'''
100%|██████████| 5/5 [00:00<00:00, 92385.55it/s]
'''
```

> with自动关闭
```python
with tqdm(range(5)) as pbar2:
    for i in pbar2:
        # print(i)
        sleep(0.5)
```

PS: `pbar1 = tqdm(l1)`和`pbar2 = tqdm(l2)`要是写在一起, 那么第二个进度条就不会显示出来. 所以创建`pbar2 = tqdm(l2)`要写在`pbar1.close()`后面.
```python
pbar1 = tqdm(range(5))
# pbar2 = tqdm(range(5)) # 不该写在这里

for i in pbar1:
    sleep(0.5)
pbar1.close()

pbar2 = tqdm(range(5))
for i in pbar2:
    sleep(0.5)
```

### total

```python
# 一共10个
with tqdm(total=10) as pbar:
    for i in range(10):
        pbar.update(1)  # 每次更新1个
        sleep(0.1)
```


## Advance
### 前缀
> 这种方式用于没有动态内容的前缀
```python
with tqdm(range(3),desc='Prefix') as pbar5:
    for i in pbar5:
        sleep(0.25)
'''
Prefix: 100%|██████████| 3/3 [00:00<00:00,  3.99it/s]
'''
```
> 这种方式用于有动态内容的前缀
```python
with tqdm(range(3)) as pbar6:
    for i in pbar6:
        # 动态展示当前运行到的 i
        pbar6.set_description(f'Dynamic Prefix-{i}')
        sleep(0.25)

'''
Dynamic Prefix-1:  33%|███▎      | 1/3 [00:00<00:00,  2.32it/s]
Dynamic Prefix-2: 100%|██████████| 3/3 [00:00<00:00,  3.98it/s]
'''
```

### 后缀

```python
pbar1 = tqdm(range(5))

for i in pbar1:
    pbar1.set_postfix(KEY='VALUE', a_num = 1, a_bool= False, a_list=[1,2])
    sleep(0.1)
'''
100%|██████████| 10/10 [00:01<00:00,  9.90it/s, KEY=VALUE, a_bool=0, a_list=[1, 2], a_num=1]
'''
```

### 颜色

```python
with tqdm(range(3), colour='#00ff00') as pbar5:
    for i in pbar5:
        sleep(0.25)
```

### 单位

描述处理项目的文字, 默认是'it', 例如: 100 it/s, 处理照片的话设置为'img' ,则为 100 img/s, 下载时设为'B'.

```python
pbar2 = tqdm(range(5), unit="单位")
for i in pbar2:
    sleep(0.5)

'''
100%|██████████| 5/5 [00:02<00:00,  1.99单位/s]
'''
```

### 数字换算
自动根据国际标准进行项目处理速度的换算, 例如 100000 it/s >> 100k it/s
```python
total_size = 123456
l1 = list(range(total_size))
with tqdm(total=total_size, unit_scale=True) as pbar:
    for i in l1:
        pbar.update(1000)
        sleep(0.1)

'''
unit_scale默认False: 
32%|███▏      | 40000/123456 [00:03<00:08, 10142.84it/s]

unit_scale=True: 
59%|█████▉    | 73.0k/123k [00:07<00:05, 10.1kit/s]
'''
```