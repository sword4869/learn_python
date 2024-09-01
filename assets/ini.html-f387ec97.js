import{_ as t,V as i,W as p,Y as n,Z as a,$ as e,X as o,D as c}from"./framework-48406333.js";const l={},r=o(`<ul><li><a href="#1-%E6%8F%8F%E8%BF%B0">1. 描述</a></li><li><a href="#2-%E5%86%99">2. 写</a></li><li><a href="#3-%E8%AF%BB">3. 读</a><ul><li><a href="#31-%E4%B8%8D%E5%8C%85%E5%90%ABdefault">3.1. 不包含DEFAULT</a></li><li><a href="#32-%E5%8C%85%E5%90%ABdefault">3.2. 包含DEFAULT</a></li></ul></li><li><a href="#4-%E7%AC%A6%E5%8F%B7%E5%BC%95%E5%8F%B7%E7%AD%89%E5%8F%B7">4. 符号:引号、等号、%</a></li><li><a href="#5-reference">5. Reference</a></li></ul><hr><h1 id="_1-描述" tabindex="-1"><a class="header-anchor" href="#_1-描述" aria-hidden="true">#</a> 1. 描述</h1><ul><li>第三方库：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install configparser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置文件<code>example.ini</code>格式，比如</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[DEFAULT]
serveraliveinterval = 45
compression = yes
compressionlevel = 9

[bitbucket.org]
user = hg

[topsecret.server.com]
port = 50022
forwardx11 = no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-写" tabindex="-1"><a class="header-anchor" href="#_2-写" aria-hidden="true">#</a> 2. 写</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 直接初始化section</span>
config<span class="token punctuation">[</span><span class="token string">&#39;DEFAULT&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;ServerAliveInterval&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;45&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Compression&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;yes&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;CompressionLevel&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">}</span>

<span class="token comment"># 先创建section，才能再写入键值对</span>
config<span class="token punctuation">[</span><span class="token string">&#39;bitbucket.org&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
config<span class="token punctuation">[</span><span class="token string">&#39;bitbucket.org&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hg&#39;</span>

<span class="token comment"># 获取section对象后写键值对</span>
config<span class="token punctuation">[</span><span class="token string">&#39;topsecret.server.com&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
topsecret <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&#39;topsecret.server.com&#39;</span><span class="token punctuation">]</span>
topsecret<span class="token punctuation">[</span><span class="token string">&#39;Port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;50022&#39;</span>     <span class="token comment"># mutates the parser</span>
topsecret<span class="token punctuation">[</span><span class="token string">&#39;ForwardX11&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;no&#39;</span>  <span class="token comment"># same here</span>

<span class="token comment"># 写入到文件中</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;example.ini&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> configfile<span class="token punctuation">:</span>
    config<span class="token punctuation">.</span>write<span class="token punctuation">(</span>configfile<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-读" tabindex="-1"><a class="header-anchor" href="#_3-读" aria-hidden="true">#</a> 3. 读</h1><h2 id="_3-1-不包含default" tabindex="-1"><a class="header-anchor" href="#_3-1-不包含default" aria-hidden="true">#</a> 3.1. 不包含DEFAULT</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span>bitbucket<span class="token punctuation">.</span>org<span class="token punctuation">]</span>
user <span class="token operator">=</span> hg

<span class="token punctuation">[</span>topsecret<span class="token punctuation">.</span>server<span class="token punctuation">.</span>com<span class="token punctuation">]</span>
port <span class="token operator">=</span> <span class="token number">50022</span>
forwardx11 <span class="token operator">=</span> no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&quot;example.ini&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 列出section</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>sections<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;bitbucket.org&#39;, &#39;topsecret.server.com&#39;]</span>

<span class="token comment"># 检测section</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;bitbucket.org&#39;</span> <span class="token keyword">in</span> config<span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token comment"># 列出键</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>options<span class="token punctuation">(</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;user&#39;]</span>

<span class="token comment"># 列出键</span>
<span class="token comment"># print(config[&#39;bitbucket.org&#39;])	# &lt;Section: bitbucket.org&gt;</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> config<span class="token punctuation">[</span><span class="token string">&#39;bitbucket.org&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># user</span>

<span class="token comment"># 读取键值对</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># hg</span>

<span class="token comment"># 用读取到的section读取键值对</span>
bitbucket <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">]</span>
user <span class="token operator">=</span> bitbucket<span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
<span class="token comment"># hg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-包含default" tabindex="-1"><a class="header-anchor" href="#_3-2-包含default" aria-hidden="true">#</a> 3.2. 包含DEFAULT</h2><p>命名为<code>DEFAULT</code>的section是特殊的：</p><ul><li>会被<code>config.sections()</code>跳过，但检测section还是能检测到的</li><li>其他的section会包含<code>DEFAULT</code>section中的内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[DEFAULT]
serveraliveinterval = 45
compression = yes
compressionlevel = 9

[bitbucket.org]
user = hg

[topsecret.server.com]
port = 50022
forwardx11 = no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&quot;example.ini&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 列出section</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>sections<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;bitbucket.org&#39;, &#39;topsecret.server.com&#39;]</span>

<span class="token comment"># 检测section</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;DEFAULT&#39;</span> <span class="token keyword">in</span> config<span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token comment"># 列出键</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>options<span class="token punctuation">(</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;user&#39;, &#39;serveraliveinterval&#39;, &#39;compression&#39;, &#39;compressionlevel&#39;]</span>

<span class="token comment"># 列出键</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&#39;bitbucket.org&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># user serveraliveinterval compression compressionlevel</span>

<span class="token comment"># 读取键值对</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;serveraliveinterval&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 45</span>

<span class="token comment"># 用读取到的section读取键值对</span>
bitbucket <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&quot;bitbucket.org&quot;</span><span class="token punctuation">]</span>
serveraliveinterval <span class="token operator">=</span> bitbucket<span class="token punctuation">[</span><span class="token string">&quot;serveraliveinterval&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>serveraliveinterval<span class="token punctuation">)</span>
<span class="token comment"># 45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-符号-引号、等号、" tabindex="-1"><a class="header-anchor" href="#_4-符号-引号、等号、" aria-hidden="true">#</a> 4. 符号:引号、等号、%</h1><ul><li>引号：不用特意将字符串带上引号</li><li>等号：值中有<code>=</code>，就直接写就行。</li><li>%：如果你不想插值的话，<code>config = configparser.ConfigParser(interpolation=None)</code>，不要使用<code>RawConfigParser </code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[words]
w1 = 1+1=2
w2 = &#39;1+1=2&#39;
w3 = 1+1\\=2
w4 = %45%56
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span>interpolation<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&quot;example.ini&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 读取键值对</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> config<span class="token punctuation">[</span><span class="token string">&quot;words&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&quot;words&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
1+1=2
&#39;1+1=2&#39;
1+1\\=2
%45%56
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-reference" tabindex="-1"><a class="header-anchor" href="#_5-reference" aria-hidden="true">#</a> 5. Reference</h1>`,23),u={href:"https://pypi.org/project/configparser/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.python.org/3/library/configparser.html",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const s=c("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[n("a",u,[a("https://pypi.org/project/configparser/"),e(s)]),n("a",d,[a("https://docs.python.org/3/library/configparser.html"),e(s)])])])}const g=t(l,[["render",v],["__file","ini.html.vue"]]);export{g as default};
