import{_ as p,V as l,W as i,Y as n,Z as s,$ as e,X as t,D as o}from"./framework-48406333.js";const c={},u={href:"https://docs.python.org/3.6/library/functions.html?#eval",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>eval()是Python内置函数，点进去是这样的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token triple-quoted-string string">&quot;&quot;&quot;    
    Evaluate the given source in the context of globals and locals.    
    The source may be a string representing a Python expression or a code object as returned by compile().    
    The globals must be a dictionary and locals can be any mapping, defaulting to the current globals and locals.    
    If only globals is given, locals defaults to it.    
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pycharm提示是这样的</p><p><img src="https://img-blog.csdn.net/20180802181004165?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xub3RpbWU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="eval"> <img src="https://img-blog.csdn.net/20180802181033613?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xub3RpbWU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="evalts"></p>`,4),r={href:"https://so.csdn.net/so/search?q=global&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>可选参数其实是给一个寻找的范围，如果给的话，用位置传参格式，不能用关键字传参格式。如果不给定，则从locals()和globals()里寻找内容，返回表达式的结果。</p><p>例子：</p><p>没有globals和locals参数的：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
 
 
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
 
 
a <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[2]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(1,)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{1,}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&quot;k&quot;:&quot;v&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> my_list<span class="token punctuation">:</span>
    da <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>da<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>da<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
 
<span class="token comment"># 结果：</span>
<span class="token comment"># 1 &lt;class &#39;int&#39;&gt;</span>
<span class="token comment"># 1.0 &lt;class &#39;float&#39;&gt;</span>
<span class="token comment"># [2] &lt;class &#39;list&#39;&gt;</span>
<span class="token comment"># (1,) &lt;class &#39;tuple&#39;&gt;</span>
<span class="token comment"># {1} &lt;class &#39;set&#39;&gt;</span>
<span class="token comment"># {&#39;k&#39;: &#39;v&#39;} &lt;class &#39;dict&#39;&gt;</span>
<span class="token comment"># &lt;function f at 0x000001DB6D376048&gt; &lt;class &#39;function&#39;&gt;</span>
<span class="token comment"># &lt;class &#39;__main__.A&#39;&gt; &lt;class &#39;type&#39;&gt;</span>
<span class="token comment"># &lt;__main__.A object at 0x000001DB6D98C320&gt; &lt;class &#39;__main__.A&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有参数的：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;func a is run&#39;</span><span class="token punctuation">)</span>
 
 
<span class="token keyword">def</span> <span class="token function">fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;func b is run&#39;</span><span class="token punctuation">)</span>
 
 
g <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;fa&#39;</span><span class="token punctuation">:</span> fb<span class="token punctuation">,</span> <span class="token string">&#39;fb&#39;</span><span class="token punctuation">:</span> fa<span class="token punctuation">}</span>
 
<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;fa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;fa&#39;</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
 
<span class="token comment"># 结果:</span>
<span class="token comment"># func a is run</span>
<span class="token comment"># func b is run</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一直说是表达式，举个例子</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">3</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;print(1)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;fa()&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

 
ss1 <span class="token operator">=</span> <span class="token string">&quot;5*8&quot;</span>
num <span class="token operator">=</span> <span class="token number">90</span>
g <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span>ss1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&quot;pow(3,2)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;num+10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;a+1&#39;</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 结果：</span>
<span class="token comment"># 1</span>
<span class="token comment"># None</span>
<span class="token comment"># 3</span>
<span class="token comment"># 40 9 100</span>
<span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，第一个参数必须是可执行的表达式，如果只是一个普通的字符串，那就报错</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;tomorrow&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment">#   File &quot;E:x/x.py&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">#     eval(&#39;tomorrow&#39;)</span>
<span class="token comment">#   File &quot;&lt;string&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment"># NameError: name &#39;tomorrow&#39; is not defined</span>
 
 
<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;see you&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment">#   File &quot;E:x/x.py&quot;, line 10, in &lt;module&gt;</span>
<span class="token comment">#     eval(&#39;see you&#39;)</span>
<span class="token comment">#   File &quot;&lt;string&gt;&quot;, line 1</span>
<span class="token comment">#     see you</span>
<span class="token comment">#           ^</span>
<span class="token comment"># SyntaxError: unexpected EOF while parsing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选参数传入的话要注意，会改变你传入的字典本来的内容。文档：</p><blockquote><p>If the globals dictionary is present and lacks <code>__builtins__</code>, the current globals are copied into globals before expression is parsed.</p></blockquote><h2 id="四、eval-函数的应用" tabindex="-1"><a class="header-anchor" href="#四、eval-函数的应用" aria-hidden="true">#</a> 四、eval()函数的应用</h2><p><strong>1、使用eval()函数，将字符串还原为数字类型，和int()函数的作用类似</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 1.使用eval()函数，将字符串还原为数字类型，和int()函数的作用类似</span>
a <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#利用eval()将字符串类型转为整形</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/136afc9e491e4f9d975e7396aa0df976.png" alt=""></p>`,16);function v(m,b){const a=o("ExternalLinkIcon");return l(),i("div",null,[n("blockquote",null,[n("p",null,[s("代码版本：3.6.3    文档："),n("a",u,[s("3.6.6eval()"),e(a)])])]),d,n("p",null,[s("eval()接收一个字符串格式的表达式参数，和两个可选参数globals和locals，如果给的话，"),n("a",r,[s("global"),e(a)]),s("是必须是字典，locals可以是任何映射对象。返回表达式的结果。")]),k])}const y=p(c,[["render",v],["__file","eval.html.vue"]]);export{y as default};
