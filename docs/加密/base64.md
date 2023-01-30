```python
import base64

hello = 'hello!'                # 原字符串，unicode

###
# 编码
# b64encode函数的参数为bytes类型
# 返回的还是bytes
### 
hello_encode = base64.b64encode(hello.encode()) 
print(hello_encode.decode())             # 将bytes转化unicode
# aGVsbG8h


###
# 解码
# b64decode函数的参数为bytes类型
###
hello_decode = base64.b64decode(hello_encode)
print(hello_decode.decode())             # 将bytes转化unicode
# hello!

world = 'd29ybGQh'
world_decode = base64.b64decode(world.encode())
print(world_decode.decode())             # 将bytes转化unicode
# world!
```