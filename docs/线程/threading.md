'''
import threading

def print666():
    import time
    time.sleep(10)
    print('666')
    pass

if __name__ == '__main__':

    t = threading.Thread(target=print666)
    t.setDaemon(True)
    t.start()
    
    print('hello')
    t.join();

    print('world')

'''

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

'''
import threading 
import time 




class Dog():
    def __init__(self):
        self.stop_threads = False

        # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        # 必须有逗号，不然 TypeError: run() argument after * must be an iterable, not bool
        self.t1 = threading.Thread(target=self.run, args=(lambda: self.stop_threads,)) 
        self.t1.start() 
        print(self.t1.is_alive)

        self.breakoff()
        pass

    def breakoff(self):
        time.sleep(2) 
        print(self.t1.is_alive)
        if self.t1.is_alive:
            self.stop_threads = True
            self.t1.join() 
            print('thread killed') 
        else:
            print('dead thread')
        


    def run(self, stop_threads): 
        for i in range(1): 
            print('thread running') 
            time.sleep(0.1)
            # global stop_threads 
            if stop_threads(): 
                break
        print('over')

dog = Dog()
'''

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