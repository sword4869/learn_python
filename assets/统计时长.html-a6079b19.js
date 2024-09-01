import{_ as a,V as e,W as t,Y as n,Z as o,$ as i,X as p,D as c}from"./framework-48406333.js";const l={},d=p(`<h2 id="手动统计" tabindex="-1"><a class="header-anchor" href="#手动统计" aria-hidden="true">#</a> 手动统计</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 获取运行时间，秒</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> <span class="token operator">*</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">(</span><span class="token punctuation">)</span>				<span class="token comment"># 开始时间</span>
<span class="token comment"># 睡眠5秒</span>
sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">(</span><span class="token punctuation">)</span>				<span class="token comment"># 结束时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>end_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span>	<span class="token comment"># 经过秒数</span>
<span class="token comment"># 5.000269889831543</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="库" tabindex="-1"><a class="header-anchor" href="#库" aria-hidden="true">#</a> 库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install codetiming
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> codetiming <span class="token keyword">import</span> Timer

<span class="token decorator annotation punctuation">@Timer</span><span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;Dataset_flame Elapsed time: {:.4f} seconds&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ok1&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ok2&#39;</span><span class="token punctuation">)</span>

hello_fn<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># ok1</span>
<span class="token comment"># ok2</span>
<span class="token comment"># Dataset_flame Elapsed time: 0.0003 seconds</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://pypi.org/project/codetiming/",target:"_blank",rel:"noopener noreferrer"};function u(m,k){const s=c("ExternalLinkIcon");return e(),t("div",null,[d,n("p",null,[n("a",r,[o("codetiming 更多用法"),i(s)])])])}const b=a(l,[["render",u],["__file","统计时长.html.vue"]]);export{b as default};
