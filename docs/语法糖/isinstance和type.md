一样
```python
>>> import torch
>>> type([]) == list
True
>>> type('') == str
True
>>> type(torch.randn(3))==torch.Tensor
True

>>> isinstance([], list)
True
>>> isinstance('', str)
True
>>> isinstance(torch.randn(3), torch.Tensor)
True
```