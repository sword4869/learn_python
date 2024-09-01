import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t="/learn_python/assets/image-3-de98e5b6.png",p="/learn_python/assets/image-4-93c9228f.png",i="/learn_python/assets/image-5-591d5b3f.png",o="/learn_python/assets/image-6-3ef01318.png",l="/learn_python/assets/image-7-4161f36d.png",c="/learn_python/assets/image-8-c4f6a08c.png",u="/learn_python/assets/image-9-ba2df917.png",r="/learn_python/assets/image-10-155385bb.png",d="/learn_python/assets/image-11-e5deef0f.png",k="/learn_python/assets/image-12-bc06d2de.png",v="/learn_python/assets/image-13-fc18c6f9.png",m="/learn_python/assets/image-14-360eff03.png",b="/learn_python/assets/image-16-18b075f0.png",h="/learn_python/assets/image-15-0e87314b.png",g="/learn_python/assets/image-20-1543122a.png",y="/learn_python/assets/image-17-8ecf6462.png",_="/learn_python/assets/image-18-9ba6391e.png",w="/learn_python/assets/image-19-a89d7d80.png",f="/learn_python/assets/image-21-4d81a36b.png",q="/learn_python/assets/image-22-bca24ec5.png",T={},x=e('<ul><li><a href="#1-%E7%9F%A5%E8%AF%86">1. 知识</a></li><li><a href="#2-%E5%A4%9A%E7%BA%BF%E7%A8%8B">2. 多线程</a><ul><li><a href="#21-%E5%81%9C%E6%AD%A2flag">2.1. 停止flag</a></li><li><a href="#22-%E5%AE%88%E6%8A%A4%E7%BA%BF%E7%A8%8B">2.2. 守护线程</a></li><li><a href="#23-join%E8%AE%A9%E4%B8%BB%E8%BF%9B%E7%A8%8B%E7%AD%89%E5%BE%85">2.3. join让主进程等待</a></li><li><a href="#24-%E5%86%85%E5%AE%B9">2.4. 内容</a></li><li><a href="#25-%E7%94%9F%E4%BA%A7%E8%80%85%E6%B6%88%E8%B4%B9%E8%80%85">2.5. 生产者消费者</a></li><li><a href="#26-%E9%94%81">2.6. 锁</a></li></ul></li><li><a href="#3-%E7%BA%BF%E7%A8%8B%E6%B1%A0">3. 线程池</a></li><li><a href="#4-%E5%A4%9A%E8%BF%9B%E7%A8%8B">4. 多进程</a></li><li><a href="#5-%E5%8D%8F%E7%A8%8B">5. 协程</a></li><li><a href="#6-%E4%BF%A1%E5%8F%B7%E9%87%8F">6. 信号量</a></li></ul><hr><h2 id="_1-知识" tabindex="-1"><a class="header-anchor" href="#_1-知识" aria-hidden="true">#</a> 1. 知识</h2><p><img src="'+t+'" alt="Alt text"></p><p><img src="'+p+'" alt="Alt text"></p><p>全局解释器锁GIL</p><p><img src="'+i+'" alt="Alt text"></p><p><img src="'+o+'" alt="Alt text"></p><p><img src="'+l+`" alt="Alt text"></p><h2 id="_2-多线程" tabindex="-1"><a class="header-anchor" href="#_2-多线程" aria-hidden="true">#</a> 2. 多线程</h2><ul><li><code>threading.Thread(target, name, args, daemon, ...)</code></li><li><code>threading.active_count()</code></li><li><code>threading.current_thread()</code></li><li><code>threading.enumerate()</code></li></ul><p>Instance:</p><ul><li><code>.join()</code></li><li><code>.start()</code></li><li><code>.setDaemon()</code></li><li><code>.is_alive()</code></li></ul><h3 id="_2-1-停止flag" tabindex="-1"><a class="header-anchor" href="#_2-1-停止flag" aria-hidden="true">#</a> 2.1. 停止flag</h3><p>一种 stop_threads 变量的方式</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time 

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> 
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread running&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">if</span> stop_threads<span class="token punctuation">:</span> 
            <span class="token keyword">break</span>

stop_threads <span class="token operator">=</span> <span class="token boolean">False</span>
t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">)</span> 
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> 
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
stop_threads <span class="token operator">=</span> <span class="token boolean">True</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread killed&#39;</span><span class="token punctuation">)</span> 
<span class="token triple-quoted-string string">&#39;&#39;&#39;
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread running
thread killed
&#39;&#39;&#39;</span>


<span class="token comment"># -------------------------</span>

<span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time 

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">False</span>
        t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>self<span class="token punctuation">.</span>run<span class="token punctuation">)</span>
        t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">True</span>
        t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread killed&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> 
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread running&#39;</span><span class="token punctuation">)</span> 
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>stop_threads<span class="token punctuation">:</span> 
                <span class="token keyword">break</span>

dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一种让 stop_threads 变成函数的方式</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time 


<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>stop_threads<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> 
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread running&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">if</span> stop_threads<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
            <span class="token keyword">break</span>

stop_threads <span class="token operator">=</span> <span class="token boolean">False</span>

<span class="token comment"># args 只有一个参数时，必须有逗号，不然不是 tuple</span>
t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> stop_threads<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> 
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
stop_threads <span class="token operator">=</span> <span class="token boolean">True</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread killed&#39;</span><span class="token punctuation">)</span> 



<span class="token comment"># -----------------------</span>
<span class="token comment"># 写成类</span>

<span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time 

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>stop_threads<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> 
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread running&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">if</span> stop_threads<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
            <span class="token keyword">break</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">False</span>
        t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>stop_threads<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">True</span>
        t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread killed&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">pass</span>

dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># ---------------------</span>
<span class="token comment"># 成员函数</span>

<span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time 


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">False</span>
        t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>self<span class="token punctuation">.</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>stop_threads<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
        self<span class="token punctuation">.</span>stop_threads <span class="token operator">=</span> <span class="token boolean">True</span>
        t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread killed&#39;</span><span class="token punctuation">)</span> 
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> stop_threads<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> 
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;thread running&#39;</span><span class="token punctuation">)</span> 
            <span class="token keyword">if</span> stop_threads<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
                <span class="token keyword">break</span>

dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-守护线程" tabindex="-1"><a class="header-anchor" href="#_2-2-守护线程" aria-hidden="true">#</a> 2.2. 守护线程</h3><p>设置<code>daemon=True</code>(默认False)会标记其为守护线程。</p><ul><li>当主进程已经结束后，如果剩下的线程只有守护线程时，守护进程直接退出。</li><li>当主进程没有结束，那么剩下的线程只有守护线程时，守护进程也不会退出。</li></ul><p>比如，我有两个线程，一个read线程一直在print消息，另一个write线程则在input。我们想设置一个退出信号<code>q</code>，让write线程退出后，read线程也跟着退出。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	i<span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		i <span class="token operator">+=</span> <span class="token number">1</span>
		time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> s<span class="token operator">==</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">:</span>
			<span class="token keyword">break</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;test begin...&#39;</span><span class="token punctuation">)</span>
    
    tw<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>write<span class="token punctuation">)</span>
    tr<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>read<span class="token punctuation">,</span> daemon<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    tw<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    tr<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
	
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		
<span class="token triple-quoted-string string">&#39;&#39;&#39;
# main的5秒后输入q，则主线程已经退出，write线程一退出，read线程立马退出。
(nerf) PS D:\\git\\gpuhot&gt; &amp; D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
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
(nerf) PS D:\\git\\gpuhot&gt; &amp; D:/Applications/miniconda/envs/nerf/python.exe d:/git/gpuhot/src/gpuhot/1.py
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
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-join让主进程等待" tabindex="-1"><a class="header-anchor" href="#_2-3-join让主进程等待" aria-hidden="true">#</a> 2.3. join让主进程等待</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
等待子线程结束后，主线程才继续输出 \`&#39;world&#39;\`.
&#39;&#39;&#39;</span>
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">print666</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;666&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>print666<span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
hello
666
world
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
陷入死循环。因为主线程在等read结束，而read守护线程只有当主线程结束才自动退出。
&#39;&#39;&#39;</span>
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	i<span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		i<span class="token operator">+=</span><span class="token number">1</span>
		time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		s<span class="token operator">=</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> s<span class="token operator">==</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">:</span>
			<span class="token keyword">break</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;test begin...&#39;</span><span class="token punctuation">)</span>
    
    tw<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>write<span class="token punctuation">)</span>
    tr<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>read<span class="token punctuation">,</span> daemon<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    tw<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    tr<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
	
    tr<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-内容" tabindex="-1"><a class="header-anchor" href="#_2-4-内容" aria-hidden="true">#</a> 2.4. 内容</h3><p>列表、对象、字典都是可以保存的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
列表
&#39;&#39;&#39;</span>
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">get_i_lists</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i_lists<span class="token punctuation">)</span><span class="token punctuation">:</span>
    i_lists<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">pass</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    i_lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>get_i_lists<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i_lists<span class="token punctuation">)</span><span class="token punctuation">)</span>
        threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>t<span class="token punctuation">)</span>

    <span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        t<span class="token punctuation">.</span>setDaemon<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> i_lists<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
hello
world
0
1
2
3
4
5
6
7
8
9
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-生产者消费者" tabindex="-1"><a class="header-anchor" href="#_2-5-生产者消费者" aria-hidden="true">#</a> 2.5. 生产者消费者</h3><p><img src="`+c+`" alt="Alt text"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> queue
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">from</span> numpy <span class="token keyword">import</span> mat


<span class="token keyword">def</span> <span class="token function">produce</span><span class="token punctuation">(</span>material_queue<span class="token punctuation">:</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">,</span> product_queue<span class="token punctuation">:</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> material_queue<span class="token punctuation">.</span>qsize<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        materail <span class="token operator">=</span> material_queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        product_queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>materail <span class="token operator">+</span> <span class="token string">&quot; producted&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>
            <span class="token string-interpolation"><span class="token string">f&quot;name = </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">, product_queue&#39;s size = </span><span class="token interpolation"><span class="token punctuation">{</span>product_queue<span class="token punctuation">.</span>qsize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
        <span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">consume</span><span class="token punctuation">(</span>product_queue<span class="token punctuation">:</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        product <span class="token operator">=</span> product_queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>
            <span class="token string-interpolation"><span class="token string">f&quot;name = </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">, product_queue&#39;s size = </span><span class="token interpolation"><span class="token punctuation">{</span>product_queue<span class="token punctuation">.</span>qsize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
        <span class="token punctuation">)</span>


material_queue <span class="token operator">=</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    material_queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token string">&quot;material&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
product_queue <span class="token operator">=</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 几个生产者</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    producer <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>produce<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>material_queue<span class="token punctuation">,</span> product_queue<span class="token punctuation">)</span><span class="token punctuation">)</span>
    producer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 几个消费者</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    consumer <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>consume<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>product_queue<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    consumer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
name = Thread-2 (produce), product_queue&#39;s size = 1
name = Thread-3 (produce), product_queue&#39;s size = 2
name = Thread-1 (produce), product_queue&#39;s size = 2
name = Thread-2 (produce), product_queue&#39;s size = 2
name = Thread-3 (produce), product_queue&#39;s size = 3
name = Thread-5 (consume), product_queue&#39;s size = 4
name = Thread-1 (produce), product_queue&#39;s size = 4
name = Thread-4 (consume), product_queue&#39;s size = 4
name = Thread-2 (produce), product_queue&#39;s size = 3
name = Thread-5 (consume), product_queue&#39;s size = 3
name = Thread-4 (consume), product_queue&#39;s size = 4
name = Thread-1 (produce), product_queue&#39;s size = 4
name = Thread-3 (produce), product_queue&#39;s size = 5
name = Thread-5 (consume), product_queue&#39;s size = 3
name = Thread-4 (consume), product_queue&#39;s size = 3
name = Thread-2 (produce), product_queue&#39;s size = 4
name = Thread-5 (consume), product_queue&#39;s size = 2
name = Thread-4 (consume), product_queue&#39;s size = 2
name = Thread-5 (consume), product_queue&#39;s size = 0
name = Thread-4 (consume), product_queue&#39;s size = 0
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-锁" tabindex="-1"><a class="header-anchor" href="#_2-6-锁" aria-hidden="true">#</a> 2.6. 锁</h3><p><img src="`+u+'" alt="Alt text"></p><p><img src="'+r+`" alt="Alt text"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
没有带锁
&#39;&#39;&#39;</span>
<span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time
<span class="token keyword">from</span> attr <span class="token keyword">import</span> dataclass 

<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">Accout</span><span class="token punctuation">:</span>
    balance<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1000</span>


<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>accout<span class="token punctuation">:</span> Accout<span class="token punctuation">,</span> amount<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token comment"># 只有这里的sleep，不出问题</span>
    <span class="token comment"># time.sleep(0.1) </span>
    <span class="token keyword">if</span> accout<span class="token punctuation">.</span>balance <span class="token operator">&gt;=</span> amount<span class="token punctuation">:</span>
        <span class="token comment"># 这里的sleep（耗时操作），就会出问题。因为多个线程都已经通过了if判断，然后都进入了这里，然后都sleep了，然后都减了钱</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
        accout<span class="token punctuation">.</span>balance <span class="token operator">-=</span> amount
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;balance = </span><span class="token interpolation"><span class="token punctuation">{</span>accout<span class="token punctuation">.</span>balance<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;not enough money&quot;</span><span class="token punctuation">)</span>

accout <span class="token operator">=</span> Accout<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>accout<span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
balance = 200
balance = -600
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading 
<span class="token keyword">import</span> time
<span class="token keyword">from</span> attr <span class="token keyword">import</span> dataclass 


<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">Accout</span><span class="token punctuation">:</span>
    balance<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1000</span>


<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>accout<span class="token punctuation">:</span> Accout<span class="token punctuation">,</span> amount<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">with</span> lock<span class="token punctuation">:</span>
        <span class="token keyword">if</span> accout<span class="token punctuation">.</span>balance <span class="token operator">&gt;=</span> amount<span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
            accout<span class="token punctuation">.</span>balance <span class="token operator">-=</span> amount
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;balance = </span><span class="token interpolation"><span class="token punctuation">{</span>accout<span class="token punctuation">.</span>balance<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;not enough money&quot;</span><span class="token punctuation">)</span>

lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
accout <span class="token operator">=</span> Accout<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>accout<span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
balance = 200
not enough money
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-线程池" tabindex="-1"><a class="header-anchor" href="#_3-线程池" aria-hidden="true">#</a> 3. 线程池</h2><p><img src="`+d+'" alt="Alt text"></p><p><img src="'+k+'" alt="Alt text"></p><p><img src="'+v+'" alt="Alt text"></p><p><img src="'+m+`" alt="Alt text"></p><ul><li>要么直接提交一个列表，要么依次提交单个元素。</li><li>要么按列表的提交顺序返回（需要都执行完）；要么按谁先完成的顺序返回（不需要都执行完了）。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
线程池
&#39;&#39;&#39;</span>
<span class="token keyword">import</span> time
<span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures
<span class="token keyword">import</span> threading

sleep_time <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
    r <span class="token operator">=</span> sleep_time<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>r<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;thread </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string"> start, sleep </span><span class="token interpolation"><span class="token punctuation">{</span>r<span class="token punctuation">}</span></span><span class="token string"> seconds&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> i

i_list <span class="token operator">=</span> <span class="token punctuation">[</span> i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>

<span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
    results <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>run<span class="token punctuation">,</span> i_list<span class="token punctuation">)</span>
    <span class="token keyword">for</span> result <span class="token keyword">in</span> results<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span>
    

<span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
    futures <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        future <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>run<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        futures<span class="token punctuation">.</span>append<span class="token punctuation">(</span>future<span class="token punctuation">)</span>

    <span class="token keyword">for</span> future <span class="token keyword">in</span> futures<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span>


<span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
    futures <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        future <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>run<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        futures<span class="token punctuation">.</span>append<span class="token punctuation">(</span>future<span class="token punctuation">)</span>
    <span class="token comment"># 按谁先完成的顺序重新组织</span>
    futures <span class="token operator">=</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>as_completed<span class="token punctuation">(</span>futures<span class="token punctuation">)</span>
    <span class="token keyword">for</span> future <span class="token keyword">in</span> futures<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
thread 1 start, sleep 1 seconds
thread 6 start, sleep 1 seconds
thread 7 start, sleep 2 seconds
thread 3 start, sleep 2 seconds
thread 2 start, sleep 3 seconds
thread 8 start, sleep 3 seconds
thread 9 start, sleep 4 seconds
thread 4 start, sleep 4 seconds
thread 5 start, sleep 5 seconds
thread 0 start, sleep 5 seconds
0
1
2
3
4
5
6
7
8
9
--------------------
thread 6 start, sleep 1 seconds
thread 1 start, sleep 1 seconds
thread 7 start, sleep 2 seconds
thread 3 start, sleep 2 seconds
thread 2 start, sleep 3 seconds
thread 8 start, sleep 3 seconds
thread 4 start, sleep 4 seconds
thread 9 start, sleep 4 seconds
thread 0 start, sleep 5 seconds
thread 5 start, sleep 5 seconds
0
1
2
3
4
5
6
7
8
9
--------------------
thread 6 start, sleep 1 seconds
thread 1 start, sleep 1 seconds
6
1
thread 3 start, sleep 2 seconds
thread 7 start, sleep 2 seconds
3
7
thread 2 start, sleep 3 seconds
thread 8 start, sleep 3 seconds
2
8
thread 9 start, sleep 4 seconds
thread 4 start, sleep 4 seconds
9
4
thread 0 start, sleep 5 seconds
thread 5 start, sleep 5 seconds
0
5
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-多进程" tabindex="-1"><a class="header-anchor" href="#_4-多进程" aria-hidden="true">#</a> 4. 多进程</h2><p><img src="`+b+'" alt="Alt text"></p><p><img src="'+h+'" alt="Alt text"></p><p><img src="'+g+'" alt="Alt text"></p><h2 id="_5-协程" tabindex="-1"><a class="header-anchor" href="#_5-协程" aria-hidden="true">#</a> 5. 协程</h2><p><img src="'+y+'" alt="Alt text"></p><p><img src="'+_+'" alt="Alt text"></p><p><img src="'+w+'" alt="Alt text"></p><h2 id="_6-信号量" tabindex="-1"><a class="header-anchor" href="#_6-信号量" aria-hidden="true">#</a> 6. 信号量</h2><p><img src="'+f+'" alt="Alt text"></p><p><img src="'+q+'" alt="Alt text"></p>',55),A=[x];function E(B,z){return s(),a("div",null,A)}const D=n(T,[["render",E],["__file","threading.html.vue"]]);export{D as default};
