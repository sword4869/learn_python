```python
from typing import NamedTuple

class WifiInfo(NamedTuple):
    signal: int
    bssid: str
    chinese_ssid: str
    ssid: str

winfiInfo = WifiInfo(wifi_info.signal, wifi_info.bssid, chinese_ssid, wifi_info.ssid)
```