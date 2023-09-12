
位置
- `^`：匹配字符串开头
- `$`：匹配字符串末尾

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

- `re.search`：扫描**整个字符串**并返回第一个成功的匹配。
- `re.match`：尝试从字符串的**起始位置**匹配一个模式，如果不是起始位置匹配成功的话，返回None。
- `re.findall`：返回一个包含所有匹配结果的列表。
- `re.sub`：替换字符串中的匹配项。
- `re.split`：根据匹配项分割字符串。

```python
>>> import re
>>> string = 'Tue Sep 12 15:50:08 2023   \r\n Volatile Unc    18%   GPU  Name    21% TCC/WDDM'

>>> re.search('\d{,2}%', string)
<re.Match object; span=(46, 49), match='18%'>

>>> re.match('\d{,2}%', string)

>>> re.findall('\d{,2}%', string)
['18%', '21%']

>>> re.split('\d{,2}%', string)
['Tue Sep 12 15:50:08 2023   \r\n Volatile Unc    ', '   GPU  Name    ', ' TCC/WDDM']
```
## js

在js程序中，regex用`//`包裹
```js
var str = "123abc";
var patt1 = /^[0-9]+abc$/;
document.write(str.match(patt1));


const fileNameWithout_dot_md_Profix = fileName.replace(/\.md$/, '')
```
