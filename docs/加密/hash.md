# hash

## md5
```python
### 直接加密

import hashlib

encryptor_md5 = hashlib.md5()
encryptor_md5.update(b'1675038924753')
output_md5 = encryptor_md5.hexdigest()
# '16c94d09681fbfd1674c8616a88c0e7a'
```

```python
### 加salt

import hashlib

encryptor_md5 = hashlib.md5()

# update(a), update(b) 等同于 update(a + b)，即encryptor_md5.update(b'qdreader' + b'1675038924753')
encryptor_md5.update(b'qdreader')       # salt
encryptor_md5.update(b'1675038924753')
output_md5 = encryptor_md5.hexdigest()
# 'f09046fb74f353864cf6c79568e183f4'
```

## sha256

```python
import hashlib

encryptor_sha256 = hashlib.sha256()
encryptor_sha256.update(b'1675038924753')
output_sha256 = encryptor_sha256.hexdigest()
# 'c74e7b8dc462b3281ce2501a5aada3ddff8aebe78fc11c427ee00d2425f4d3ba'
```