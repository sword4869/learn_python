## ImportError: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by /envs/p3d/lib/python3.10/site-packages/PIL/../../.././libLerc.so)

无问题
```python
>>> from PIL import Image
>>> exit()
```
有问题
```python
>>> import torchvision
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/public/home/hpc2204081200015/envs/diff/lib/python3.10/site-packages/torchvision/__init__.py", line 6, in <module>
    from torchvision import datasets, io, models, ops, transforms, utils
  File "/public/home/hpc2204081200015/envs/diff/lib/python3.10/site-packages/torchvision/datasets/__init__.py", line 1, in <module>
    from ._optical_flow import FlyingChairs, FlyingThings3D, HD1K, KittiFlow, Sintel
  File "/public/home/hpc2204081200015/envs/diff/lib/python3.10/site-packages/torchvision/datasets/_optical_flow.py", line 10, in <module>
    from PIL import Image
  File "/public/home/hpc2204081200015/envs/diff/lib/python3.10/site-packages/PIL/Image.py", line 103, in <module>
    from . import _imaging as core
ImportError: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by /public/home/hpc2204081200015/envs/diff/lib/python3.10/site-packages/PIL/../../.././libLerc.so)
>>> exit()
```