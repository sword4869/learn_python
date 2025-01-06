import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const i={},t=e(`<h1 id="python-version" tabindex="-1"><a class="header-anchor" href="#python-version" aria-hidden="true">#</a> python version</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 内置库</span>
<span class="token keyword">import</span> sys
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Python: </span><span class="token interpolation"><span class="token punctuation">{</span>sys<span class="token punctuation">.</span>version<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
Python: 3.9.12 (main, Apr  5 2022, 06:56:58) 
[GCC 7.5.0]
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="os-platform" tabindex="-1"><a class="header-anchor" href="#os-platform" aria-hidden="true">#</a> os platform</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 内置库</span>
<span class="token keyword">import</span> platform
<span class="token keyword">print</span><span class="token punctuation">(</span>platform<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Windows&#39;</span>
<span class="token comment"># &#39;Linux&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment"># - \`posix\`: Portable Operating System Interface of UNIX（可移植操作系统接口）的缩写。Linux 和 Mac OS 均会返回该值；</span>
<span class="token comment"># - \`nt\`: 全称应为“Microsoft Windows NT”，大体可以等同于 Windows 操作系统，因此 Windows 环境下会返回该值；</span>
<span class="token comment"># - \`java\`: 则是 Java 虚拟机环境下的返回值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function p(l,c){return s(),a("div",null,o)}const r=n(i,[["render",p],["__file","information.html.vue"]]);export{r as default};
