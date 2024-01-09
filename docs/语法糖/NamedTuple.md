```python
from typing import NamedTuple

class WifiInfo(NamedTuple):
    signal: int
    bssid: str
    chinese_ssid: str
    ssid: str

winfiInfo = WifiInfo(wifi_info.signal, wifi_info.bssid, chinese_ssid, wifi_info.ssid)
```
```python
from dataclasses import dataclass

@dataclass
class Metric:
    psnr: float
    ssim: float
    lpips: float
    mse: float

metric = Metric(1.0, 2.0, 3.0, 4.0)
print(metric.lpips, metric.mse, metric.psnr, metric.ssim)
# 3.0 4.0 1.0 2.0
```