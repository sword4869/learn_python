import{_ as n,V as s,W as a,X as p}from"./framework-48406333.js";const t={},e=p(`<ul><li><a href="#1-%E8%AF%AF%E5%86%99">1. 误写</a><ul><li><a href="#11-%E5%8D%95%E5%85%83%E7%B4%A0%E7%9A%84%E9%80%97%E5%8F%B7">1.1. 单元素的逗号</a></li><li><a href="#12-%E6%95%B0%E7%BB%84%E5%8F%98%E6%88%90%E5%85%83%E7%BB%84">1.2. 数组变成元组</a></li></ul></li><li><a href="#2-in">2. in</a></li></ul><hr><h2 id="_1-误写" tabindex="-1"><a class="header-anchor" href="#_1-误写" aria-hidden="true">#</a> 1. 误写</h2><h3 id="_1-1-单元素的逗号" tabindex="-1"><a class="header-anchor" href="#_1-1-单元素的逗号" aria-hidden="true">#</a> 1.1. 单元素的逗号</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-数组变成元组" tabindex="-1"><a class="header-anchor" href="#_1-2-数组变成元组" aria-hidden="true">#</a> 1.2. 数组变成元组</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这是个元组, 为什么, 因为在&#39;]&#39;后加了个逗号</span>
plugins <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;vuepress-plugin-helper-live2d&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vuepress-plugin-reading-progress&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vuepress-plugin-code-copy&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-in" tabindex="-1"><a class="header-anchor" href="#_2-in" aria-hidden="true">#</a> 2. in</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">1</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment"># (False, True, False, True, False)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","tuple.html.vue"]]);export{r as default};