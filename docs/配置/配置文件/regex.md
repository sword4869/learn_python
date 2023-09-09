![picture 1](../../../images/275bcc66bee23b340f87f7a42182610d63d858aacc6123748d4d8449f46540e7.png)  

以上的正则表达式可以匹配 `runoob`、`runoob1`、`run-oob`、`run_oob`， 但不匹配 `ru`，因为它包含的字母太短了，小于 3 个无法匹配。也不匹配 `runoob$`, 因为它包含特殊字符。

正则表达式后面的全局标记 `g` 指定将该表达式应用到输入字符串中能够查找到的尽可能多的匹配。

表达式的结尾处的不区分大小写 `i` 标记指定不区分大小写。

多行标记 `m` 指定换行符的两边可能出现潜在的匹配。


位置
- `^`：开始
- `$`：结尾


次数：
- `?`：0次或1次。

  `?` 等价于 `{0,1}`

  `colou?r` 可以匹配 `color` 或者 `colour`，
- `+` 号：1次或多次。

  `+` 等价于 `{1,}`

  `runoo+b`，可以匹配 `runoob`、`runooob`、`runoooooob` 等，
- `*` 号：0次、或1次、或多次

  `*` 等价于 `{0,}`

  `runoo*b`，可以匹配 `runob、runoob、runoooooob` 等，
- `{n}`: n次
- `{n,}`：至少n次
- `{n,m}`: n到m次
- `{,n}`: 小于等于n次
- `{a12|b34}`: `a12` or `b34`

character class:
- `[xxx]`, 匹配 [...] 中的所有字符
- `[^xxx]`, 匹配 除了[...] 中的所有字符
- `[A-Z`: `-`表示范围

Enclose a group of RegEx: `()`

特殊字符：
- `()`, `[]`, `{}`是特殊字符，但是`<>`不是。


单词匹配：
- `\b`： 词头或词尾巴（单词边界）
  `\bCha`：匹配词头，`Chapter`
  `Cha\b`:匹配词尾巴，`Chapter`
- `\B`：词中（非单词边界）
  `\Bapt`：匹配`Chapter`, 不匹配`aptitude`

常见单字符：
- `[0-9]`, `[1-9]`, `[a-z]`, `[A-Z]`, `[A-Z a-z]`(这是表示包含空格字符， `[A-Z    a-z]`一样，空格字符效果重复冗余了，并不是连续的空格)
- `\d` digit, 即 `[0-9]`。

  `\D` non-digit, 即 `[^0-9]`。
- `\w` alphanumeric, 即 `[0-9a-z0-9A-Z_]` 数字字母下划线
  
  `\W` non-alphanumeric
- `\s` whitespace, *i.e.* `[ \f\n\r\t\v]`(空格、换页符、换行符、回车符、制表符、垂直制表符)。注意 Unicode 正则表达式会匹配全角空格符。
  
  `\S` non-whitespace
- `.` 匹配除`\n`,`\r`之外的任何单字符

常见例子：
- 全字符：`[\s\S]`


## python

<https://www.geeksforgeeks.org/python-regex/>

<https://docs.python.org/3/howto/regex.html>

- `re.match`：尝试从字符串的起始位置匹配一个模式，如果不是起始位置匹配成功的话，返回None。
- `re.search`：扫描整个字符串并返回第一个成功的匹配。
- `re.findall`：返回一个包含所有匹配结果的列表。
- `re.sub`：替换字符串中的匹配项。
- `re.split`：根据匹配项分割字符串。

```python
re.match('^\\s+$','\t\x0b\x0c\r\n \x20\xa0\u3000')
```
## js

在js程序中，regex用`//`包裹
```js
var str = "123abc";
var patt1 = /^[0-9]+abc$/;
document.write(str.match(patt1));


const fileNameWithout_dot_md_Profix = fileName.replace(/\.md$/, '')
```
