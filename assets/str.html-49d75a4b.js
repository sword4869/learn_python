import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const p={},e=t(`<ul><li><a href="#1-long-str">1. long str</a></li><li><a href="#2-split">2. split</a><ul><li><a href="#21-split-%E4%BB%8E%E5%B7%A6%E8%BE%B9%E5%BC%80%E5%A7%8B%E5%88%86%E5%89%B2">2.1. split 从左边开始分割</a></li><li><a href="#22-rsplit-%E4%BB%8E%E5%8F%B3%E8%BE%B9%E5%BC%80%E5%A7%8B%E5%88%86%E5%89%B2">2.2. rsplit 从右边开始分割</a></li></ul></li><li><a href="#encode-decode">encode, decode</a></li></ul><hr><h2 id="_1-long-str" tabindex="-1"><a class="header-anchor" href="#_1-long-str" aria-hidden="true">#</a> 1. long str</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot; 
三个连续的引号
&quot;&quot;&quot;</span>

a <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
单引号也可以
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>c <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;sdf&quot;</span>
    <span class="token string">&quot;不是tuple，没有逗号，只是括号&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-split" tabindex="-1"><a class="header-anchor" href="#_2-split" aria-hidden="true">#</a> 2. split</h2><h3 id="_2-1-split-从左边开始分割" tabindex="-1"><a class="header-anchor" href="#_2-1-split-从左边开始分割" aria-hidden="true">#</a> 2.1. split 从左边开始分割</h3><p><code>my_str.split(str, maxsplit)</code>: 将 my_str 这个字符串按照 str 进行切割, maxsplit 割几次</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_str <span class="token operator">=</span> <span class="token string">&quot;hello world itcast and itcastcpp&quot;</span>
my_str1 <span class="token operator">=</span> my_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str1<span class="token punctuation">)</span>

<span class="token comment"># maxsplit 割掉指定字符几次，0次不割，n次留下n+1个字符串长度的list，超出或者负数都是最大次数即全割。</span>
my_str2 <span class="token operator">=</span> my_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str2<span class="token punctuation">)</span>

<span class="token comment"># 默认是空白字符(&quot; &quot; &quot;\\t&quot; &quot;\\n&quot;)</span>
my_str3 <span class="token operator">=</span> my_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 用的最多</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str3<span class="token punctuation">)</span>

my_str4 <span class="token operator">=</span> my_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str4<span class="token punctuation">)</span>

<span class="token comment"># 输出结果是</span>
<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcast&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcastcpp&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world itcast and itcastcpp&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcast&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcastcpp&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;hello world &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; and &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cpp&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-rsplit-从右边开始分割" tabindex="-1"><a class="header-anchor" href="#_2-2-rsplit-从右边开始分割" aria-hidden="true">#</a> 2.2. rsplit 从右边开始分割</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_str <span class="token operator">=</span> <span class="token string">&quot;hello world itcast and itcastcpp&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_str<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> 
<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcast&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcastcpp&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_str<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token punctuation">[</span><span class="token string">&#39;hello world itcast and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itcastcpp&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="encode-decode" tabindex="-1"><a class="header-anchor" href="#encode-decode" aria-hidden="true">#</a> encode, decode</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">##### 中文 utf-8 -&gt; raw_unicode_escape</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token string">&quot;你好&quot;</span> 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token string">b&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b
<span class="token string">&#39;ä½\\xa0å¥½&#39;</span>

<span class="token comment">##### raw_unicode_escape -&gt; utf-8 中文</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span>          
<span class="token string">b&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;</span>
<span class="token comment"># a = b.encode(&#39;raw_unicode_escape&#39;,&#39;strict&#39;).decode(&#39;utf-8&#39;)  </span>
<span class="token operator">&gt;&gt;</span> a <span class="token operator">=</span> b<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a
<span class="token string">&#39;你好&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 中文 raw_unicode_escape -&gt; gb18030 </span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> c <span class="token operator">=</span> <span class="token string">&quot;你好&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> c<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span>
<span class="token string">b&#39;\\\\u4f60\\\\u597d&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> c<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;gb18030&#39;</span><span class="token punctuation">)</span> 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
\\u4f60\\u597d
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> e <span class="token operator">=</span> c<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;raw_unicode_escape&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
\\u4f60\\u597d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","str.html.vue"]]);export{r as default};
