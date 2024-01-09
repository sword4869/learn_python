```python
from typing import Dict, Union, List, Optional, Literal

Optional[int] = None
Dict[str, NVSEvaluationMetricsBundle]
List[int]
Literal['viewer', 'wandb'] = 'wandb'
```
```python
###
# Optional和默认值的效果一样，顶多有个编译器能识别默认值会提示给你的好处
###

from typing import Optional


def foo_v1(a: int = None, b: Optional[int] = None):
    if a:
        print(a + b)
    else:
        print("parameter a is a NoneType!")


def foo_v2(a: int = 1, b: Optional[int] = 1):
    if a:
        print(a + b)
    else:
        print("parameter b is a NoneType!")

foo_v1()
# foo_v1(1)
# foo_v1(1,1)

# foo_v2()
# foo_v2(None)
# foo_v2(1)
# foo_v2(1, None)
# foo_v2(1, 2)
```