import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},i=e(`<ul><li><a href="#1-%E6%98%BE%E7%A4%BA%E7%BA%A7%E5%88%AB">1. 显示级别</a></li><li><a href="#2-%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F">2. 显示格式</a></li><li><a href="#3-%E5%86%99%E5%85%A5%E6%96%87%E4%BB%B6">3. 写入文件</a></li><li><a href="#4-ps--%E6%B2%A1%E4%BA%BA%E8%BF%99%E4%B9%88%E5%86%99">4. PS : 没人这么写</a></li></ul><hr><h2 id="_1-显示级别" tabindex="-1"><a class="header-anchor" href="#_1-显示级别" aria-hidden="true">#</a> 1. 显示级别</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging

<span class="token comment"># 默认显示级别是\`logging.WARNING\`</span>

<span class="token comment"># 不显示</span>
logging<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;a debug message&#39;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;an info message&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 显示</span>
logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&#39;a warning message&#39;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string">&#39;an error message&#39;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>critical<span class="token punctuation">(</span><span class="token string">&#39;a critical message&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># WARNING:root: a warning message</span>
<span class="token comment"># ERROR:root: an error message</span>
<span class="token comment"># CRITICAL:root: a critical message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改级别 <code>logging.basicConfig(level=logging.INFO)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>logging<span class="token punctuation">.</span>INFO<span class="token punctuation">)</span>

logging<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&quot;Harmless debug Message&quot;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;Just an information&quot;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&quot;Its a Warning&quot;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string">&quot;Did you try to divide by zero&quot;</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>critical<span class="token punctuation">(</span><span class="token string">&quot;Internet is down&quot;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
INFO:root:Just an information
WARNING:root:Its a Warning
ERROR:root:Did you try to divide by zero
CRITICAL:root:Internet is down
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-显示格式" tabindex="-1"><a class="header-anchor" href="#_2-显示格式" aria-hidden="true">#</a> 2. 显示格式</h2><p>format : <code>&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
    <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;</span><span class="token punctuation">,</span>
    datefmt<span class="token operator">=</span><span class="token string">&quot;%m/%d/%Y %H:%M:%S&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&#39;a message&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 09/06/2023 22:05:55 - root - WARNING - a message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-写入文件" tabindex="-1"><a class="header-anchor" href="#_3-写入文件" aria-hidden="true">#</a> 3. 写入文件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
    filename<span class="token operator">=</span><span class="token string">&#39;app.log&#39;</span><span class="token punctuation">,</span> 
    filemode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&#39;This gets logged to a file&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># WARNING:root:This gets logged to a file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同 <code>print()</code> 一样会自动换行。</p><p>重启程序（重新导入库了）会重写文件，清空历史。</p><p>同一个程序中，就会接着写入。</p><h2 id="_4-ps-没人这么写" tabindex="-1"><a class="header-anchor" href="#_4-ps-没人这么写" aria-hidden="true">#</a> 4. PS : 没人这么写</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
format_log <span class="token operator">=</span> <span class="token string">&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;</span>
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>filename<span class="token operator">=</span><span class="token string">&#39;app.log&#39;</span><span class="token punctuation">,</span> filemode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span>format_log<span class="token punctuation">)</span>

<span class="token comment"># Creating an object</span>
logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Setting the threshold of logger to DEBUG</span>
logger<span class="token punctuation">.</span>setLevel<span class="token punctuation">(</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">)</span>

<span class="token comment"># Test messages</span>
logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&quot;Harmless debug Message&quot;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;Just an information&quot;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&quot;Its a Warning&quot;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string">&quot;Did you try to divide by zero&quot;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span>critical<span class="token punctuation">(</span><span class="token string">&quot;Internet is down&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[i];function p(l,c){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","logging.html.vue"]]);export{r as default};
