- [1. 迭代器](#1-迭代器)
- [2. +和\*](#2-和)
- [3. 比较](#3-比较)
- [4. zip](#4-zip)
- [对应](#对应)
- [list转str](#list转str)

---
## 1. 迭代器

```python
l1 = [11,22,33]

iter1 = iter(l1)

a1 = next(iter1)
b1 = next(iter1)

print(a1, b1)
# 11 22
```

```python
l2 = [11, 22, 33]

iter2 = iter(l2)

a2 = next(iter2)

# iter 和 for 循环不会干扰
for b2 in l2:
    print(a2, b2, a2 == b2)
    break
# 11 11 True
```

## 2. +和*
```python
l = []
# append
l += 'hello'
print(l)
# concatenate
l += ['world', '!']
print(l)
# ['h', 'e', 'l', 'l', 'o']
# ['h', 'e', 'l', 'l', 'o', 'world', '!']
```

```python
l = []
l += [1]
l += [2]
l = l*2
print(l)
# [1, 2, 1, 2]
```

## 3. 比较
```python
l1 = [1, 2, 3]
l2 = [4]
sum1 = sum(l1*10 + l2)
print(sum1)
# 64
```

## 4. zip

```python
l1 = [1, 2, 3]
l2 = [4, 5, 6]
for x, y in zip(l1, l2):
    print(x, y)
# 1 4
# 2 5
# 3 6
```

## 对应

```python
l1 = [1, 2, 3]
a, b, c = l1
```

```python
def fun():
    return ['relu', 10e-3, True]

activation, lrate, is_training = fun()
```

## list转str

（1）list [ ] 中包含的元素是str类型。
```python
nums=['ww','22','2s']
s = "".join(nums)
```
（2）如果列表 [ ] 里面含有的元素是整形int ，需要将整形int 转换成str类型
```python
nums=[1,2,3,4,5]
strNums=[str(x) for x in nums]
s = "".join(strNums)
```
（3）如果只是想转化str，不拘泥于list，那么可以转化tuple直接str()
```python
nums=[1,2,3,4,5]
s = str(tuple(nums))
```