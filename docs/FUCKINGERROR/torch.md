## ninja

```
Traceback (most recent call last):
  File "D:\Applications\miniconda\envs\gaussian_splatting\lib\site-packages\torch\utils\cpp_extension.py", line 1814, in _run_ninja_build
    env=env)
  File "D:\Applications\miniconda\envs\gaussian_splatting\lib\subprocess.py", line 512, in run
    output=stdout, stderr=stderr)
subprocess.CalledProcessError: Command '['ninja', '-v']' returned non-zero exit status 1.
```

修改文件 `"D:\Applications\miniconda\envs\gaussian_splatting\lib\site-packages\torch\utils\cpp_extension.py"` line 1773
```python
  def _run_ninja_build(build_directory: str, verbose: bool, error_prefix: str) -> None:
-     command = ['ninja', '-v']
+     command = ['ninja', '--version']
```