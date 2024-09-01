import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const p={},t=e(`<ul><li><a href="#1-%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F">1. 全局变量</a></li><li><a href="#2-%E5%90%8C%E5%90%8D%E7%9A%84%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F%E5%92%8C%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F">2. 同名的局部变量和全局变量</a></li></ul><hr><h2 id="_1-全局变量" tabindex="-1"><a class="header-anchor" href="#_1-全局变量" aria-hidden="true">#</a> 1. 全局变量</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">if</span> a<span class="token punctuation">:</span>
    aa <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    b <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> &#39;__main__&quot;<span class="token punctuation">:</span>
    c <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
            k <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token comment"># global 9 10</span>

    j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">:</span>
            l <span class="token operator">=</span> <span class="token number">10</span>
        j <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> l<span class="token punctuation">)</span>
    <span class="token comment"># global 9 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要是在函数外面，都是全局变量，<code>a</code>,<code>aa</code>, <code>c</code>, <code>i</code>, <code>k</code>(甚至循环内的也是)</p><p>函数里面，则是局部变量，<code>b</code>.</p><h2 id="_2-同名的局部变量和全局变量" tabindex="-1"><a class="header-anchor" href="#_2-同名的局部变量和全局变量" aria-hidden="true">#</a> 2. 同名的局部变量和全局变量</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">8</span>

<span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 只获取全局变量的值，可以</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f1&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    同名的局部变量的特殊之处：不论先后位置，只要有定义局部变量，函数任何位置都会屏蔽掉外面的全局变量。
    也就是说在f2()运行到print(&#39;f2&#39;, a)时, 看不见外面的a, 而print(&#39;f2&#39;, a)之后a = 10才定义。
    UnboundLocalError: cannot access local variable &#39;a&#39; where it is not associated with a value
    &#39;&#39;&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f2&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">def</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>           
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    同理, 看不见外面的a, 从而想在定义中引用全局变量的值, 但实则引用的是未定义的局部变量
    UnboundLocalError: cannot access local variable &#39;a&#39; where it is not associated with a value
    &#39;&#39;&#39;</span>
    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">10</span>
    a <span class="token operator">+=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f3&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># </span>
    a <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f4&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> a
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f5&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    a <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f5&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment"># 8</span>
f1<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># f1 8</span>
<span class="token comment"># f2()</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment"># 8</span>
<span class="token comment"># f3()</span>
f4<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># f4 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment"># 8</span>
f5<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># f5 8, f5 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment"># 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数内部，可以直接访问全局变量的值，也可以定义局部变量来覆盖全局变量，但不可以修改（都会被视为未定义的局部变量）</li><li>值得注意，<code>f4()</code>屏蔽了全局变量，局部变量怎么赋值、修改，都不会影响外面的全局变量。</li><li>可以使用<code>global</code>关键字来修改全局变量。</li></ul>`,9),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","局部变量和全局变量.html.vue"]]);export{d as default};
