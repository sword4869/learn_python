import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},p=e(`<p>origanl thought is a little ugly.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> condition<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> v_a<span class="token punctuation">,</span> v_b

result <span class="token operator">=</span> xxx<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> result <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    v_a <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    v_b <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>now we integrate all to a class which use member varibles to store non-None return value and fuction return bool value.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">is_xxx</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># why firstly assign the value None? </span>
        <span class="token comment"># Because we ensure the excution of next time don&#39;t return the cached value of last time.</span>
        self<span class="token punctuation">.</span>v_a <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>v_b <span class="token operator">=</span> <span class="token boolean">None</span>

        <span class="token keyword">if</span> condition<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>v_a <span class="token operator">=</span> <span class="token number">1</span>
            self<span class="token punctuation">.</span>v_b <span class="token operator">=</span> <span class="token number">2</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>

c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> c<span class="token punctuation">.</span>is_xxx<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    v_a <span class="token operator">=</span> c<span class="token punctuation">.</span>v_a
    v_b <span class="token operator">=</span> c<span class="token punctuation">.</span>v_b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","return_many_and_none.html.vue"]]);export{r as default};
