

# 和字典的区别

```json
{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
```

```python
import json

jsonData = '{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}'

text = json.loads(jsonData)
print(text)
```
必须是双引号, 而不是单引号
是字符串, 而不是字典类型

# json中不能有注释
```json
// comment
{
  "key": "value" // comment
}
```

解法：
使用字段key加前缀做注释key

例如加入属性的key是`xyz`, 则`?xyz`作为注释字段。这样的好处是，没有重名的字段，完全符合JSON协议。常用的前缀还有`#,` `_`, `__`等
```json
{
  "name": "Roman",
  "?name": "defines a nickname"
}
```