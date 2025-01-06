import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const e={},p=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> NamedTuple

<span class="token keyword">class</span> <span class="token class-name">WifiInfo</span><span class="token punctuation">(</span>NamedTuple<span class="token punctuation">)</span><span class="token punctuation">:</span>
    signal<span class="token punctuation">:</span> <span class="token builtin">int</span>
    bssid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    chinese_ssid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    ssid<span class="token punctuation">:</span> <span class="token builtin">str</span>

winfiInfo <span class="token operator">=</span> WifiInfo<span class="token punctuation">(</span>wifi_info<span class="token punctuation">.</span>signal<span class="token punctuation">,</span> wifi_info<span class="token punctuation">.</span>bssid<span class="token punctuation">,</span> chinese_ssid<span class="token punctuation">,</span> wifi_info<span class="token punctuation">.</span>ssid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> dataclass

<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">Metric</span><span class="token punctuation">:</span>
    psnr<span class="token punctuation">:</span> <span class="token builtin">float</span>
    ssim<span class="token punctuation">:</span> <span class="token builtin">float</span>
    lpips<span class="token punctuation">:</span> <span class="token builtin">float</span>
    mse<span class="token punctuation">:</span> <span class="token builtin">float</span>

metric <span class="token operator">=</span> Metric<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>metric<span class="token punctuation">.</span>lpips<span class="token punctuation">,</span> metric<span class="token punctuation">.</span>mse<span class="token punctuation">,</span> metric<span class="token punctuation">.</span>psnr<span class="token punctuation">,</span> metric<span class="token punctuation">.</span>ssim<span class="token punctuation">)</span>
<span class="token comment"># 3.0 4.0 1.0 2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","NamedTuple.html.vue"]]);export{d as default};
