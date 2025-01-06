import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},i=e(`<h1 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> exception</h1><h2 id="捕获" tabindex="-1"><a class="header-anchor" href="#捕获" aria-hidden="true">#</a> 捕获</h2><p><code>except xxx</code>的不是对象<code>except Excepton()</code>, 而是类名<code>except Exception</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### all exception</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">raise</span> e

<span class="token comment">### some standard exception</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span> AttributeError<span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">### custom exception</span>
<span class="token keyword">class</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> __init__<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="raise" tabindex="-1"><a class="header-anchor" href="#raise" aria-hidden="true">#</a> raise</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&#39;dddddddd&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="else-finally" tabindex="-1"><a class="header-anchor" href="#else-finally" aria-hidden="true">#</a> else_finally</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span>：
    <span class="token operator">&lt;</span>语句块<span class="token number">1</span><span class="token operator">&gt;</span>
<span class="token keyword">except</span>：
    <span class="token operator">&lt;</span>语句块<span class="token number">2</span><span class="token operator">&gt;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># Execute without exception</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># Execute with or without exception</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[i];function p(o,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","exception.html.vue"]]);export{r as default};
