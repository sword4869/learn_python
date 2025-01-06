import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const p={},i=e(`<ul><li><a href="#1-%E5%90%AF%E5%8A%A8">1. 启动</a></li><li><a href="#2-%E9%80%80%E5%87%BApdb">2. 退出pdb</a></li><li><a href="#3-%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81">3. 查看源代码</a></li><li><a href="#4-%E6%96%AD%E7%82%B9">4. 断点</a><ul><li><a href="#41-%E6%B7%BB%E5%8A%A0">4.1. 添加</a></li><li><a href="#42-4%E6%B8%85%E9%99%A4%E6%96%AD%E7%82%B9">4.2. 4、清除断点</a></li><li><a href="#43-%E7%A6%81%E7%94%A8%E5%90%AF%E7%94%A8">4.3. 禁用启用</a></li><li><a href="#44-%E5%BF%BD%E7%95%A5%E6%96%AD%E7%82%B9%E8%BF%90%E8%A1%8Cn%E6%AC%A1">4.4. 忽略断点（运行n次）</a></li><li><a href="#45-%E6%9D%A1%E4%BB%B6%E6%96%AD%E7%82%B9">4.5. 条件断点</a></li></ul></li><li><a href="#5-%E5%8F%98%E9%87%8F">5. 变量</a><ul><li><a href="#51-%E6%89%93%E5%8D%B0%E5%8F%98%E9%87%8F%E5%80%BC">5.1. 打印变量值</a></li><li><a href="#52-%E5%88%A4%E6%96%AD%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B">5.2. 判断变量类型</a></li></ul></li><li><a href="#6-%E9%80%90%E8%A1%8C%E8%B0%83%E8%AF%95%E5%91%BD%E4%BB%A4">6. 逐行调试命令</a></li><li><a href="#7-%E6%9F%A5%E7%9C%8B%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">7. 查看函数参数</a></li></ul><hr><h2 id="_1-启动" tabindex="-1"><a class="header-anchor" href="#_1-启动" aria-hidden="true">#</a> 1. 启动</h2><p>pdb有3种用法：</p><ul><li><p><code>python3 -m pdb filename.py</code></p><ul><li>不用额外修改源代码，在命令行下直接运行就能调试</li><li>从文件的第一行开始</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> <span class="token number">9</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> pdb t.py
<span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在被调试的代码中添加一行代码然后再正常运行代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> <span class="token number">9</span>
<span class="token keyword">import</span> pdb<span class="token punctuation">;</span> pdb<span class="token punctuation">.</span>set_trace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python .<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py
hello
<span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>上述命令在python3.7 新版功能: 内置函数 <code>breakpoint()</code> 来代替。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> <span class="token number">9</span>
breakpoint<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;world2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>当你在命令行看到下面这个提示符时，说明已经正确打开了pdb</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-退出pdb" tabindex="-1"><a class="header-anchor" href="#_2-退出pdb" aria-hidden="true">#</a> 2. 退出pdb</h2><p><code>q(uit)</code></p><p>退出调试器。 被执行的程序将被中止。</p><h2 id="_3-查看源代码" tabindex="-1"><a class="header-anchor" href="#_3-查看源代码" aria-hidden="true">#</a> 3. 查看源代码</h2><p>当前位置（将要执行，还没执行的行）在代码中会用 <code>-&gt;</code> 这个符号标出来</p><p><code>l(ist) [first[, last]]</code>:</p><ul><li><code>l(ist)</code>: 查看当前位置前后5行源代码(共11行)</li><li><code>l(ist) 10</code>: 查看第10行周围的行</li><li><code>l(ist) 1, 20</code>: 查看第1行到第20行</li></ul><p><code>ll</code>/<code>longlist</code>: 查看当前函数或框架的所有源代码</p><h2 id="_4-断点" tabindex="-1"><a class="header-anchor" href="#_4-断点" aria-hidden="true">#</a> 4. 断点</h2><p><code>c(ont(inue))</code>: 执行到断点才停止。</p><h3 id="_4-1-添加" tabindex="-1"><a class="header-anchor" href="#_4-1-添加" aria-hidden="true">#</a> 4.1. 添加</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>b(reak) [([filename:]lineno | function) [, condition]]
tbreak [([filename:]lineno | function) [, condition]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>tbreak</code> 临时断点，在第一次命中时会自动删除。</p><p><code>tbreak</code> 的参数与 <code>break</code> 相同，下面只以 <code>break</code> 举例：</p><ul><li><code>b</code>: 查看断点。显示所有断点（包括临时断点）</li><li><code>b lineno</code>: 在当前文件的第 lineno 行处设置一个断点</li><li><code>b filename:lineno</code>: 在 其他文件 filename 的第 lineno 行处设置一个断点</li><li><code>b function</code>: 在该函数执行的第一行设置断点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b <span class="token number">1</span>
Breakpoint <span class="token number">1</span> at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>check_git.py:1

<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> tbreak <span class="token number">3</span>
Breakpoint <span class="token number">2</span> at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>check_git.py:3

<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b
Num Type         Disp Enb   Where
<span class="token number">1</span>   breakpoint   keep <span class="token function">yes</span>   at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>check_git.py:1
<span class="token number">2</span>   breakpoint   del  <span class="token function">yes</span>   at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>check_git.py:3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4、清除断点" tabindex="-1"><a class="header-anchor" href="#_4-2-4、清除断点" aria-hidden="true">#</a> 4.2. 4、清除断点</h3><p>命令：</p><p><code>cl(ear) [filename:lineno | bpnumber ...]</code></p><ul><li><code>cl</code>: 清除所有断点（但会先提示确认）</li><li><code>cl filename:lineno</code>：清除此行上的所有断点。当前文件也得指明，不然和删除断点序号的重复了。</li><li><code>cl bpnumber</code>: 单个断点序号。<code>cl bpnumber bpnumber2</code>: 多个断点序号（以空格分隔）</li></ul><p>如果参数是 filename:lineno，则。如果参数是空格分隔的断点编号列表，则清除这些断点。如果不带参数，则）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(Pdb) cl   
Clear all breaks? y
Deleted breakpoint 1 at d:\\git\\check_git.py:1
Deleted breakpoint 2 at d:\\git\\check_git.py:3

(Pdb) cl ../check_git.py:3
Deleted breakpoint 2 at d:\\git\\check_git.py:3


(Pdb) cl 1 2
Deleted breakpoint 1 at d:\\git\\check_git.py:1
Deleted breakpoint 2 at d:\\git\\check_git.py:3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-禁用启用" tabindex="-1"><a class="header-anchor" href="#_4-3-禁用启用" aria-hidden="true">#</a> 4.3. 禁用启用</h3><p><code>disable [bpnumber ...]</code> 禁用断点，断点以空格分隔的断点编号列表给出。</p><p><code>enable [bpnumber ...]</code> 启用指定的断点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep yes   at d:\\git\\check_git.py:1
8   breakpoint   keep yes   at d:\\git\\check_git.py:3
9   breakpoint   keep yes   at d:\\git\\check_git.py:7

(Pdb) disable 7
Disabled breakpoint 7 at d:\\git\\check_git.py:1

(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep no    at d:\\git\\check_git.py:1
8   breakpoint   keep yes   at d:\\git\\check_git.py:3
9   breakpoint   keep yes   at d:\\git\\check_git.py:7

(Pdb) enable 7
Enabled breakpoint 7 at d:\\git\\check_git.py:1

(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep yes   at d:\\git\\check_git.py:1
8   breakpoint   keep yes   at d:\\git\\check_git.py:3
9   breakpoint   keep yes   at d:\\git\\check_git.py:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-忽略断点-运行n次" tabindex="-1"><a class="header-anchor" href="#_4-4-忽略断点-运行n次" aria-hidden="true">#</a> 4.4. 忽略断点（运行n次）</h3><p><code>ignore bpnumber [count]</code></p><p>给指定断点设置一个忽略计数。当忽略计数为0时，断点变为活动状态；当非0时，则计数在断点命中且未被禁用时递减；如果省略忽略计数，则忽略计数设置为0；</p><ul><li><code>ignore bpnumber [count]</code>： 忽略 count 次</li><li><code>ignore bpnumber</code>: 取消忽略</li></ul><p>配合<code>c</code>运行n次。PS：<code>breakpoint already hit 4 times</code>感觉是不是错了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>:
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> l
  <span class="token number">1</span>     breakpoint<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">2</span>  -<span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>:
  <span class="token number">3</span>         print<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token number">4</span>         print<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span>, i<span class="token punctuation">)</span>
<span class="token punctuation">[</span>EOF<span class="token punctuation">]</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b <span class="token number">3</span>
Breakpoint <span class="token number">1</span> at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py:3
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> ignore <span class="token number">1</span> <span class="token number">3</span>
Will ignore next <span class="token number">3</span> crossings of breakpoint <span class="token number">1</span>.
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> c
<span class="token number">0</span>
hello <span class="token number">0</span>
<span class="token number">1</span>
hello <span class="token number">1</span>
<span class="token number">2</span>
hello <span class="token number">2</span>
<span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> print<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b
Num Type         Disp Enb   Where
<span class="token number">1</span>   breakpoint   keep <span class="token function">yes</span>   at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py:3
        breakpoint already hit <span class="token number">4</span> <span class="token builtin class-name">times</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-条件断点" tabindex="-1"><a class="header-anchor" href="#_4-5-条件断点" aria-hidden="true">#</a> 4.5. 条件断点</h3><p><code>condition bpnumber [condition]</code> 为断点设置一个新 condition，它是一个表达式，且它的计算值为 true 时断点才起作用。如果没有给出 condition，则删除现有条件，也就是将断点设为无条件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b <span class="token number">3</span>
Breakpoint <span class="token number">1</span> at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py:3
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> condition <span class="token number">1</span> <span class="token assign-left variable">i</span><span class="token operator">==</span><span class="token number">9</span> 
New condition <span class="token builtin class-name">set</span> <span class="token keyword">for</span> breakpoint <span class="token number">1</span>.
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> c
<span class="token number">0</span>
hello <span class="token number">0</span>
<span class="token number">1</span>
hello <span class="token number">1</span>
<span class="token number">2</span>
hello <span class="token number">2</span>
<span class="token number">3</span>
hello <span class="token number">3</span>
<span class="token number">4</span>
hello <span class="token number">4</span>
<span class="token number">5</span>
hello <span class="token number">5</span>
<span class="token number">6</span>
hello <span class="token number">6</span>
<span class="token number">7</span>
hello <span class="token number">7</span>
<span class="token number">8</span>
hello <span class="token number">8</span>
<span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> print<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> i
<span class="token number">9</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> b
Num Type         Disp Enb   Where
<span class="token number">1</span>   breakpoint   keep <span class="token function">yes</span>   at d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py:3
        stop only <span class="token keyword">if</span> <span class="token assign-left variable">i</span><span class="token operator">==</span><span class="token number">9</span>
        breakpoint already hit <span class="token number">10</span> <span class="token builtin class-name">times</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-变量" tabindex="-1"><a class="header-anchor" href="#_5-变量" aria-hidden="true">#</a> 5. 变量</h2><h3 id="_5-1-打印变量值" tabindex="-1"><a class="header-anchor" href="#_5-1-打印变量值" aria-hidden="true">#</a> 5.1. 打印变量值</h3><ul><li><code>p expression</code>在当前上下文中计算表达式并打印其值。</li><li><code>pp expression</code>：更美观的打印</li><li><code>print()</code> 也可以使用，但它不是一个调试器命令，它只是执行 Python print() 函数。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> p l
<span class="token number">9</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> pp l
<span class="token number">9</span>
<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> print<span class="token punctuation">(</span>l<span class="token punctuation">)</span>
<span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-判断变量类型" tabindex="-1"><a class="header-anchor" href="#_5-2-判断变量类型" aria-hidden="true">#</a> 5.2. 判断变量类型</h3><p><code>whatis expression</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> whatis l
<span class="token operator">&lt;</span>class <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> type<span class="token punctuation">(</span>l<span class="token punctuation">)</span>
<span class="token operator">&lt;</span>class <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-逐行调试命令" tabindex="-1"><a class="header-anchor" href="#_6-逐行调试命令" aria-hidden="true">#</a> 6. 逐行调试命令</h2><ul><li><p><code>s(tep)</code> 下一行。step 进入被调用函数内部并停止</p></li><li><p><code>n(ext)</code> 下一行。next 不进入函数函数。</p></li><li><p><code>unt(il) [lineno]</code> 如果不带参数，则下一行，直到行号比当前行大时停止。</p></li><li><p><code>r(eturn)</code> 非函数，则下一行 在函数中，会直接执行到函数返回处。</p></li><li><p><code>j(ump) lineno</code> 设置即将运行的下一行。仅可用于堆栈最底部的帧。 它可以往回跳来再次运行代码，也可以往前跳来跳过不想运行的代码。 需要注意的是，不是所有的跳转都是允许的 -- 例如，不能跳转到 for 循环的中间或跳出 finally 子句。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> l
<span class="token number">1</span>     breakpoint<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">2</span>  -<span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token number">3</span>     l <span class="token operator">=</span> <span class="token number">9</span>
<span class="token number">4</span>     print<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token number">5</span>     print<span class="token punctuation">(</span><span class="token string">&#39;world2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>EOF<span class="token punctuation">]</span>

<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> j <span class="token number">4</span>
<span class="token operator">&gt;</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>learn_python<span class="token punctuation">\\</span>__pycache__<span class="token punctuation">\\</span>t.py<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
-<span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span>Pdb<span class="token punctuation">)</span> p l
*** NameError: name <span class="token string">&#39;l&#39;</span> is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_7-查看函数参数" tabindex="-1"><a class="header-anchor" href="#_7-查看函数参数" aria-hidden="true">#</a> 7. 查看函数参数</h2><p><code>a</code>: 在函数中时打印函数的参数和参数的值</p>`,53),t=[i];function l(c,o){return s(),a("div",null,t)}const u=n(p,[["render",l],["__file","调试pdb.html.vue"]]);export{u as default};
