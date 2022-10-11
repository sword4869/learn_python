

# 简单嵌入变量

```python
name = 'model'
filename = f'{name}.txt'
```

# 复杂效果
![picture 1](/image/e592944f5b9e84cbdfd95adbc282a085f9125b12012108a4527b422ac6b8addb.png)  

```python
print("{:#^20}".format('hello'))
#######hello########

print("{: >20}".format('hello'))
               hello

print("{:.3s}".format('hello'))
hel
```
```python
print("{:0>5}".format(45))
00045
```

```python
print("{:,d}".format(123456))
123,456
```

```python
print("{:c} {:c} {:c}".format(48, 65, 97))
0 A a

print("{0:d} {0:b} {0:o} {0:x} {0:X}".format(111))
111 1101111 157 6f 6F
```

```python
print("{:.3f}".format(3.1415926))
3.142

# 不能print("{0:d}".format(3.1415926))
print("{:.0f}".format(3.1415926))
3

print("{0:.3e} {0:.3E} {0:.3%}".format(3.1415926))
3.142e+00 3.142E+00 314.159%
```