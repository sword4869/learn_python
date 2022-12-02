```python
print(f'\033[44mHELLO\033[m')
```
![20220923201825.jpg](/image/20220923201825.jpg)

这个效果和Linux bash shell 的配置一样，唯一的区别就是
只能使用`\033[44m`，不能使用`\e[44m`，也不能`\[\033[44m\]`。

[Linux bash shell 控制台配置](https://github.com/sword4869/learn_linux/blob/main/advance/PS1.md#color)