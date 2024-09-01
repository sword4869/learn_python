import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const e={},p=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> Dict<span class="token punctuation">,</span> Union<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Optional<span class="token punctuation">,</span> Literal

Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> NVSEvaluationMetricsBundle<span class="token punctuation">]</span>
List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>
Literal<span class="token punctuation">[</span><span class="token string">&#39;viewer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wandb&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;wandb&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">###</span>
<span class="token comment"># Optional和默认值的效果一样，顶多有个编译器能识别默认值会提示给你的好处</span>
<span class="token comment">###</span>

<span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional


<span class="token keyword">def</span> <span class="token function">foo_v1</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;parameter a is a NoneType!&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">foo_v2</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;parameter b is a NoneType!&quot;</span><span class="token punctuation">)</span>

foo_v1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># foo_v1(1)</span>
<span class="token comment"># foo_v1(1,1)</span>

<span class="token comment"># foo_v2()</span>
<span class="token comment"># foo_v2(None)</span>
<span class="token comment"># foo_v2(1)</span>
<span class="token comment"># foo_v2(1, None)</span>
<span class="token comment"># foo_v2(1, 2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","Optional.html.vue"]]);export{d as default};
