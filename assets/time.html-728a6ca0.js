import{_ as t,V as e,W as o,Y as n,Z as s,$ as p,X as c,D as i}from"./framework-48406333.js";const l={},r=c(`<h1 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h1><h2 id="某天的昨天" tabindex="-1"><a class="header-anchor" href="#某天的昨天" aria-hidden="true">#</a> 某天的昨天</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> time <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># 1 天=86400 秒</span>
one_day <span class="token operator">=</span> <span class="token number">86400</span>

<span class="token comment"># 某天</span>
t0_struct <span class="token operator">=</span> strptime<span class="token punctuation">(</span><span class="token string">&#39;2020-12-31&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">)</span>
t0_second <span class="token operator">=</span> mktime<span class="token punctuation">(</span>t0_struct<span class="token punctuation">)</span>

<span class="token comment"># 昨天</span>
t1_second <span class="token operator">=</span> t0_second <span class="token operator">-</span> one_day<span class="token operator">*</span><span class="token number">1</span>
t1_struct <span class="token operator">=</span> localtime<span class="token punctuation">(</span>t1_second<span class="token punctuation">)</span>
t1_str <span class="token operator">=</span> strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">,</span> t1_struct<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>t1_str<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;2020-12-30&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 如today = &#39;2020-02-12&#39;，day_count = 1，表示明天&#39;2020-02-13&#39;</span>
<span class="token keyword">def</span> <span class="token function">get_day</span><span class="token punctuation">(</span>today<span class="token punctuation">,</span> day_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1 天=86400 秒</span>
    one_day <span class="token operator">=</span> <span class="token number">86400</span>
    <span class="token comment"># 某天</span>
    t0_struct <span class="token operator">=</span> time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>today<span class="token punctuation">,</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">)</span>
    t0_second <span class="token operator">=</span> time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>t0_struct<span class="token punctuation">)</span>

    <span class="token comment"># toyday + day_count天</span>
    t1_second <span class="token operator">=</span> t0_second <span class="token operator">+</span> one_day<span class="token operator">*</span>day_count
    t1_struct <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>t1_second<span class="token punctuation">)</span>
    t1_str <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">,</span> t1_struct<span class="token punctuation">)</span>
    <span class="token keyword">return</span> t1_str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较时间大小" tabindex="-1"><a class="header-anchor" href="#比较时间大小" aria-hidden="true">#</a> 比较时间大小</h2>`,5),d=n("code",null,"'2020-01-30' < '2020-02-12",-1),u={href:"https://blog.csdn.net/sandalphon4869/article/details/104455348",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("p",null,"转化成秒数历元时间，比较浮点数大小")],-1);function k(v,_){const a=i("ExternalLinkIcon");return e(),o("div",null,[r,n("ol",null,[n("li",null,[n("p",null,[s("转化成相同格式的字符串后，直接比较字符串。如"),d,n("a",u,[s("https://blog.csdn.net/sandalphon4869/article/details/104455348"),p(a)])])]),m])])}const h=t(l,[["render",k],["__file","time.html.vue"]]);export{h as default};
