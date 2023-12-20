- [1. 守护线程](#1-守护线程)
- [2. join让主进程等待](#2-join让主进程等待)



---

## 1. 守护线程

设置`daemon=True`(默认False)会标记其为守护线程。

- 当主进程已经结束后，如果剩下的线程只有守护线程时，守护进程直接退出。
- 当主进程没有结束，那么剩下的线程只有守护线程时，守护进程也不会退出。


比如，我有两个线程，一个read线程一直在print消息，另一个write线程则在input。我们想设置一个退出信号`q`，让write线程退出后，read线程也跟着退出。

```
import threading
import time


def read():
	i=0
	while True:
		print(i)
		i+=1
		time.sleep(1)

def write():
	while True:
		s=input()
		if s=='q':
			break

if __name__ == '__main__':
    print('test begin...')
    
    tw=threading.Thread(target=write)
    tr=threading.Thread(target=read, daemon=True)
    tw.start()
    tr.start()
	
    for i in range(5):
        print('main', i)
        time.sleep(1)
		
'''
# main的5秒后输入q，则主线程已经退出，write线程一退出，read线程立马退出。
(nerf) PS D:\git\gpuhot> & D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
test begin...
0
main 0
1
main 1
2
main 2
3
main 3
main 4
4
5
6
q7

# main的5秒内输入q，则write线程退出，但主线程还没退出，read线程就仍在跑。
# 当过了5秒，主线程退出后，read线程立马退出。
(nerf) PS D:\git\gpuhot> & D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
test begin...
0
main 0
1
main 1
q
2
main 2
main 3
3
main 4
4
'''
```

## 2. join让主进程等待


```python
'''
等待子线程结束后，主线程才继续输出 `'world'`.

hello
666
world
'''
import threading
import time

def print666():
    time.sleep(5)
    print('666')

if __name__ == '__main__':

    t = threading.Thread(target=print666)
    t.start()
    
    print('hello')
    t.join();
    print('world')
```


```
'''
陷入死循环。因为主线程在等read结束，而read守护线程只有当主线程结束才自动退出。
'''
import threading
import time


def read():
	i=0
	while True:
		print(i)
		i+=1
		time.sleep(1)

def write():
	while True:
		s=input()
		if s=='q':
			break

if __name__ == '__main__':
    print('test begin...')
    
    tw=threading.Thread(target=write)
    tr=threading.Thread(target=read, daemon=True)
    tw.start()
    tr.start()
	
    tr.join()
    print('main')
```

```

'''

import threading 
import time 

def run(): 
	while True: 
		print('thread running') 
		global stop_threads 
		if stop_threads: 
			break

stop_threads = False
t1 = threading.Thread(target=run) 
t1.start() 
time.sleep(1) 
stop_threads = True
t1.join() 
print('thread killed') 

'''

'''
import threading 
import time 


def run(stop_threads): 
    while True: 
        print('thread running') 
        # global stop_threads 
        if stop_threads(): 
            break

stop_threads = False

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# 必须有逗号，不然 TypeError: run() argument after * must be an iterable, not bool
t1 = threading.Thread(target=run, args=(lambda: stop_threads,)) 
t1.start() 
time.sleep(1) 
stop_threads = True
t1.join() 
print('thread killed') 

'''

'''
import threading 
import time 


def run(stop_threads): 
    while True: 
        print('thread running') 
        # global stop_threads 
        if stop_threads(): 
            break

class Dog():
    def __init__(self):
        self.stop_threads = False

        # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        # 必须有逗号，不然 TypeError: run() argument after * must be an iterable, not bool
        t1 = threading.Thread(target=run, args=(lambda: self.stop_threads,)) 
        t1.start() 
        time.sleep(1) 
        self.stop_threads = True
        t1.join() 
        print('thread killed') 
        pass

dog = Dog()
'''

```python
'''
已验证：

# breakoff 等 1秒
(nerf) PS D:\git\gpuhot> & D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
thread running
True
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
True
over
thread killed


# breakoff 等 2秒
(nerf) PS D:\git\gpuhot> & D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
thread running
True
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
over
False
dead thread
'''
import threading 
import time 

class Dog():
    def __init__(self):
        self.stop_threads = False

        # 注意：args 只有一个参数时，必须有逗号，不然不是 tuple
        self.t1 = threading.Thread(target=self.run, args=(lambda: self.stop_threads,)) 
        self.t1.start() 
        print(self.t1.is_alive())
        self.breakoff()
        pass

    def breakoff(self):
        time.sleep(1) 
        print(self.t1.is_alive())
        if self.t1.is_alive():
            self.stop_threads = True
            self.t1.join() 
            print('thread killed') 
        else:
            print('dead thread')
        
    def run(self, stop_threads): 
        for i in range(10): 
            print('thread running') 
            time.sleep(0.1)
            if stop_threads(): 
                break
        print('over')

dog = Dog()
```

'''
import threading

def get_i_lists(i,i_lists):
    i_lists.append(i)
    import time
    time.sleep(10)
    pass

if __name__ == '__main__':

    threads = []
    i_lists = []
    for i in range(10):
        t = threading.Thread(target=get_i_lists,args=(i,i_lists))
        threads.append(t)    
    
    for t in threads:
        t.setDaemon(True)
        t.start()
    
    print('hello')
    
    for t in threads:
        t.join();

    print('world')


    for i in i_lists:
        print(i)
'''
```
