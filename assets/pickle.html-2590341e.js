import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const p={},e=t(`<p>normal use of pickle</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pickle
<span class="token keyword">import</span> os

<span class="token keyword">class</span> <span class="token class-name">Ren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

one_man <span class="token operator">=</span> Ren<span class="token punctuation">(</span><span class="token string">&#39;Roman&#39;</span><span class="token punctuation">)</span>
instance_in <span class="token operator">=</span> pickle<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>one_man<span class="token punctuation">)</span>
instance_out <span class="token operator">=</span> pickle<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>instance_in<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;name : </span><span class="token interpolation"><span class="token punctuation">{</span>instance_out<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>malicious use of pickle:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pickle
<span class="token keyword">import</span> os

<span class="token keyword">class</span> <span class="token class-name">Ren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">def</span> <span class="token function">__reduce__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>__class__<span class="token punctuation">,</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&quot;winver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

one_man <span class="token operator">=</span> Ren<span class="token punctuation">(</span><span class="token string">&#39;Roman&#39;</span><span class="token punctuation">)</span>
instance_in <span class="token operator">=</span> pickle<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>one_man<span class="token punctuation">)</span>
instance_out <span class="token operator">=</span> pickle<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>instance_in<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;name : </span><span class="token interpolation"><span class="token punctuation">{</span>instance_out<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>so it is the reason to forbin the pickle package when u want to build a customer-safe software.</p>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","pickle.html.vue"]]);export{k as default};