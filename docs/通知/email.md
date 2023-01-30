# email

## send


只有文字的版本
```python
import smtplib
from email.mime.multipart import MIMEMultipart    
from email.mime.text import MIMEText    
from email.mime.image import MIMEImage
from email.header import Header

server_host = 'smtp.163.com'
username = 'sandal33s@163.com'
password = 'LJJFBAQEMNUCEAIZ'

### 
# 邮件内容
# - 发件人昵称
# - 收件人昵称
# - 主题
### 
# 正文内容：plain, html
msg = MIMEText("Python 邮件发送测试...", 'plain', 'utf-8')
# msg = MIMEText("<H1>Python</H1><a href='https://www.baidu.com'>百度一下</a>", 'html', 'utf-8')

# 对应发件人邮箱昵称（随便起）
msg['From'] = Header("发件人邮箱昵称", 'utf-8')
# 对应收件人邮箱昵称（随便起）
msg['To'] = Header("收件人邮箱昵称", 'utf-8')
# 主题
msg['Subject'] = Header('主题', 'utf-8')

try:
    smtp = smtplib.SMTP()
    smtp.connect(server_host)
    smtp.login(username, password)
    send_add = 'sandal33s@163.com'  # 邮件发送者地址
    to_add = '1084662708@qq.com'    # 邮件接收者地址
    smtp.sendmail(send_add, to_add, msg.as_string()) 
    smtp.quit()
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

想要图片、附件，去学<https://zhuanlan.zhihu.com/p/318387004>

## 检查邮箱

```python
from imapclient import IMAPClient       # pip install imapclient
import email

class MyEmail:
    def __init__(self) -> None:
        self.server_host = 'imap.163.com'
        self.username = 'xxxxxxxxxx@163.com'    
        self.password = 'LQJFBAQEMNUCEAIQ'  # 授权码 

    def build_connect(self):
        self.server = IMAPClient(self.server_host)
        self.server.login(self.username, self.password)
        # 163邮箱，采用新版email标准，需要提供id，随便写
        self.server.id_({"name": "IMAPClient", "version": "2.1.0"})

    def activate(self):
        """确保激活"""
        try:
            self.server.select_folder('INBOX')
            self.server.search("UNSEEN")
        except ConnectionAbortedError as e:
            # 如果出现掉线的情况，那么重连
            self.build_connect()
        
    def check_email(self):
        '''True表示有新邮件，False表示无'''
        # 收信箱
        self.server.select_folder('INBOX')
        # 查看未读邮件，下面fetch()后自动标记为已读，就不会重复。
        messages = self.server.search("UNSEEN")
        # 遍历每封邮件
        for uid, message_data in self.server.fetch(messages, "RFC822").items():
            # 转为email对象
            message = email.message_from_bytes(message_data[b"RFC822"])
            # 各种payload，正文、附件、图片
            multipart_payload = message.get_payload()
            for sub_message in multipart_payload:
                # 如果是 text/plain 的话
                if sub_message.get_content_type() == 'text/plain':
                    # The actual text/HTML email contents, or attachment data
                    content = sub_message.get_payload(decode=True)
                    with open('./1.yml', 'wb') as f:
                        print(content)
                        f.write(content)
                    return True
        return False
        pass


if __name__ == '__main__':
    myEmail = MyEmail()
    myEmail.build_connect()

    # 遍历等邮件
    import time
    for i in range(10000):
        myEmail.activate()
        flag = myEmail.check_email()
        print('* waiting for email...', flag)
        if flag == True:
            break
        time.sleep(3)
```