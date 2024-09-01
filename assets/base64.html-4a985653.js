import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},o=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> base64

hello <span class="token operator">=</span> <span class="token string">&#39;hello!&#39;</span>                <span class="token comment"># 原字符串，unicode</span>

<span class="token comment">###</span>
<span class="token comment"># 编码</span>
<span class="token comment"># b64encode函数的参数为bytes类型</span>
<span class="token comment"># 返回的还是bytes</span>
<span class="token comment">### </span>
hello_encode <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>hello<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>hello_encode<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 将bytes转化unicode</span>
<span class="token comment"># aGVsbG8h</span>


<span class="token comment">###</span>
<span class="token comment"># 解码</span>
<span class="token comment"># b64decode函数的参数为bytes类型</span>
<span class="token comment">###</span>
hello_decode <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>hello_encode<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hello_decode<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 将bytes转化unicode</span>
<span class="token comment"># hello!</span>

world <span class="token operator">=</span> <span class="token string">&#39;d29ybGQh&#39;</span>
world_decode <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>world<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>world_decode<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 将bytes转化unicode</span>
<span class="token comment"># world!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[o];function p(l,i){return s(),a("div",null,c)}const u=n(t,[["render",p],["__file","base64.html.vue"]]);export{u as default};
