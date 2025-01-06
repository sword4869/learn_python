import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},p=e(`<h1 id="传入字典而不是数组" tabindex="-1"><a class="header-anchor" href="#传入字典而不是数组" aria-hidden="true">#</a> 传入字典而不是数组</h1><p>整体是一个字典</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token comment"># data = [{&#39;a&#39;: 1}, {&#39;b&#39;: 2}, {&#39;c&#39;: 3}, {&#39;d&#39;: 4}, {&#39;e&#39;: 5}] 列表是错的</span>
json_str <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="json字符串和字典的区别" tabindex="-1"><a class="header-anchor" href="#json字符串和字典的区别" aria-hidden="true">#</a> json字符串和字典的区别</h1><p>json字符串:</p><ol><li>这是字符串, 而不是字典类型</li><li>True变成true</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">:</span><span class="token boolean">True</span><span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token comment"># {&#39;f&#39;: True}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;{&quot;f&quot;: true}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>里面必须是双引号, 而不是单引号</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">&quot;c&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token property">&quot;e&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p>json的对象不能以逗号结尾</p><p>错误的</p></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Roman&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="json中不能有注释" tabindex="-1"><a class="header-anchor" href="#json中不能有注释" aria-hidden="true">#</a> json中不能有注释</h1><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// comment</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span> <span class="token comment">// comment</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法： 使用字段key加前缀做注释key</p><p>例如加入属性的key是<code>xyz</code>, 则<code>?xyz</code>作为注释字段。这样的好处是，没有重名的字段，完全符合JSON协议。常用的前缀还有<code>#,</code> <code>_</code>, <code>__</code>等</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Roman&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;?name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;defines a nickname&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,17),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","注意事项.html.vue"]]);export{r as default};
