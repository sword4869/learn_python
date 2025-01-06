import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> operator <span class="token keyword">import</span> itemgetter

<span class="token comment">### list</span>

a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
operator1 <span class="token operator">=</span> itemgetter<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>           <span class="token comment"># 选择下标0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>operator1<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 1</span>

operator2 <span class="token operator">=</span> itemgetter<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>     <span class="token comment"># 选择下标0, 2, 4. 不能超过a的下标上限</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>operator2<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># (1, 3, 5)</span>


<span class="token comment">### dict</span>

b <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;second&#39;</span>
<span class="token punctuation">}</span>

operator3 <span class="token operator">=</span> itemgetter<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>           <span class="token comment"># 选择键&#39;b&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>operator3<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># second</span>


<span class="token comment">### order list</span>

x <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">:</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token string">&quot;物理&quot;</span><span class="token punctuation">:</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token string">&quot;化学&quot;</span><span class="token punctuation">:</span> <span class="token number">83</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">:</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">:</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">:</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token string">&quot;物理&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token string">&quot;化学&quot;</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">:</span> <span class="token number">86</span><span class="token punctuation">,</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">:</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token string">&quot;物理&quot;</span><span class="token punctuation">:</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token string">&quot;化学&quot;</span><span class="token punctuation">:</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">:</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">:</span> <span class="token number">86</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string">&quot;物理&quot;</span><span class="token punctuation">:</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token string">&quot;化学&quot;</span><span class="token punctuation">:</span> <span class="token number">79</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment"># 使用itemgetter,按照语文成绩排序</span>
x_yuwen <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> key<span class="token operator">=</span>itemgetter<span class="token punctuation">(</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 使用itemgetter,按照数学成绩排序</span>
x_shuxue <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> key<span class="token operator">=</span>itemgetter<span class="token punctuation">(</span><span class="token string">&quot;数学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 使用匿名函数按照物理成绩排序</span>
x_wuli <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token string">&quot;物理&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>x_yuwen<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x_shuxue<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x_wuli<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
[
{&#39;语文&#39;: 76, &#39;数学&#39;: 86, &#39;英语&#39;: 60, &#39;物理&#39;: 82, &#39;化学&#39;: 79}, 
{&#39;语文&#39;: 80, &#39;数学&#39;: 90, &#39;英语&#39;: 70, &#39;物理&#39;: 92, &#39;化学&#39;: 83}, 
{&#39;语文&#39;: 82, &#39;数学&#39;: 70, &#39;英语&#39;: 78, &#39;物理&#39;: 90, &#39;化学&#39;: 80}, 
{&#39;语文&#39;: 86, &#39;数学&#39;: 89, &#39;英语&#39;: 73, &#39;物理&#39;: 82, &#39;化学&#39;: 88}
]

[
{&#39;语文&#39;: 82, &#39;数学&#39;: 70, &#39;英语&#39;: 78, &#39;物理&#39;: 90, &#39;化学&#39;: 80}, 
{&#39;语文&#39;: 76, &#39;数学&#39;: 86, &#39;英语&#39;: 60, &#39;物理&#39;: 82, &#39;化学&#39;: 79}, 
{&#39;语文&#39;: 86, &#39;数学&#39;: 89, &#39;英语&#39;: 73, &#39;物理&#39;: 82, &#39;化学&#39;: 88}, 
{&#39;语文&#39;: 80, &#39;数学&#39;: 90, &#39;英语&#39;: 70, &#39;物理&#39;: 92, &#39;化学&#39;: 83}
]

[
{&#39;语文&#39;: 86, &#39;数学&#39;: 89, &#39;英语&#39;: 73, &#39;物理&#39;: 82, &#39;化学&#39;: 88}, 
{&#39;语文&#39;: 76, &#39;数学&#39;: 86, &#39;英语&#39;: 60, &#39;物理&#39;: 82, &#39;化学&#39;: 79}, 
{&#39;语文&#39;: 82, &#39;数学&#39;: 70, &#39;英语&#39;: 78, &#39;物理&#39;: 90, &#39;化学&#39;: 80}, 
{&#39;语文&#39;: 80, &#39;数学&#39;: 90, &#39;英语&#39;: 70, &#39;物理&#39;: 92, &#39;化学&#39;: 83}
]
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","itemgetter.html.vue"]]);export{r as default};
