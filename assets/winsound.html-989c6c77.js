import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},p=e(`<h1 id="winsound" tabindex="-1"><a class="header-anchor" href="#winsound" aria-hidden="true">#</a> winsound</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> winsound <span class="token comment"># windows</span>
<span class="token keyword">import</span> time
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> random


<span class="token keyword">class</span> <span class="token class-name">Notification</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">local_beep</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">###</span>
        <span class="token comment"># 本地发出声响</span>
        <span class="token comment">###</span>
        duration <span class="token operator">=</span> <span class="token number">2000</span>  <span class="token comment"># millisecond  </span>
        freq <span class="token operator">=</span> <span class="token number">600</span>  <span class="token comment"># Hz</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            winsound<span class="token punctuation">.</span>Beep<span class="token punctuation">(</span>freq<span class="token punctuation">,</span> duration<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">local_alter</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">###</span>
        <span class="token comment"># &#39;SystemAsterisk&#39;, Asterisk</span>

        <span class="token comment"># &#39;SystemExclamation&#39;, Exclamation</span>

        <span class="token comment"># &#39;SystemExit&#39;, Exit Windows</span>

        <span class="token comment"># &#39;SystemHand&#39;, Critical Stop</span>

        <span class="token comment"># &#39;SystemQuestion&#39;, Question</span>
        <span class="token comment">###</span>
        winsound<span class="token punctuation">.</span>PlaySound<span class="token punctuation">(</span><span class="token string">&quot;SystemHand&quot;</span><span class="token punctuation">,</span> winsound<span class="token punctuation">.</span>SND_ALIAS<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">remote</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> content<span class="token operator">=</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">###</span>
        <span class="token comment"># 微信 pushplus 公众号通知</span>
        <span class="token comment">###</span>
        token <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">#在pushplus网站中可以找到</span>
        title<span class="token operator">=</span> title <span class="token comment">#改成你要的标题内容</span>
        <span class="token comment"># content 还得变个花样，不然{&quot;code&quot;:999,&quot;msg&quot;:&quot;请勿频繁推送相同内容&quot;,&quot;data&quot;:null}</span>
        content <span class="token operator">=</span> content <span class="token comment">#改成你要的正文内容</span>
        url <span class="token operator">=</span> <span class="token string">&#39;http://www.pushplus.plus/send?token={}&amp;title={}&amp;content={}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> title<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token comment"># print(response.text)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","winsound.html.vue"]]);export{d as default};
