import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},p=e(`<h1 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h1><h2 id="md5" tabindex="-1"><a class="header-anchor" href="#md5" aria-hidden="true">#</a> md5</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### 直接加密</span>

<span class="token keyword">import</span> hashlib

encryptor_md5 <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span><span class="token punctuation">)</span>
encryptor_md5<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">b&#39;1675038924753&#39;</span><span class="token punctuation">)</span>
output_md5 <span class="token operator">=</span> encryptor_md5<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;16c94d09681fbfd1674c8616a88c0e7a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### 加salt</span>

<span class="token keyword">import</span> hashlib

encryptor_md5 <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># update(a), update(b) 等同于 update(a + b)，即encryptor_md5.update(b&#39;qdreader&#39; + b&#39;1675038924753&#39;)</span>
encryptor_md5<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">b&#39;qdreader&#39;</span><span class="token punctuation">)</span>       <span class="token comment"># salt</span>
encryptor_md5<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">b&#39;1675038924753&#39;</span><span class="token punctuation">)</span>
output_md5 <span class="token operator">=</span> encryptor_md5<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;f09046fb74f353864cf6c79568e183f4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sha256" tabindex="-1"><a class="header-anchor" href="#sha256" aria-hidden="true">#</a> sha256</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> hashlib

encryptor_sha256 <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>sha256<span class="token punctuation">(</span><span class="token punctuation">)</span>
encryptor_sha256<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">b&#39;1675038924753&#39;</span><span class="token punctuation">)</span>
output_sha256 <span class="token operator">=</span> encryptor_sha256<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;c74e7b8dc462b3281ce2501a5aada3ddff8aebe78fc11c427ee00d2425f4d3ba&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function i(o,d){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","hash.html.vue"]]);export{u as default};
