import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const p={},e=t(`<ul><li><a href="#1-%E4%B8%BB%E7%AA%97%E5%8F%A3">1. 主窗口</a><ul><li><a href="#11-%E7%A1%AE%E8%AE%A4%E5%85%B3%E9%97%AD">1.1. 确认关闭</a></li></ul></li><li><a href="#2-%E5%BC%B9%E5%87%BA%E7%AA%97%E5%8F%A3">2. 弹出窗口</a><ul><li><a href="#21-popup">2.1. popup</a></li><li><a href="#22-progressbar-debug">2.2. progressbar, debug</a></li></ul></li><li><a href="#3-%E5%85%83%E7%B4%A0%E7%B1%BB">3. 元素类</a><ul><li><a href="#input">INPUT</a></li><li><a href="#31-table">3.1. Table</a></li><li><a href="#%E5%A4%8D%E9%80%89%E6%A1%86">复选框</a></li></ul></li></ul><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> PySimpleGUI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; import PySimpleGUI as psg
&gt;&gt;&gt; psg.main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-主窗口" tabindex="-1"><a class="header-anchor" href="#_1-主窗口" aria-hidden="true">#</a> 1. 主窗口</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PySimpleGUI <span class="token keyword">as</span> psg

<span class="token comment"># 行 列</span>
layout <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>psg<span class="token punctuation">.</span>Text<span class="token punctuation">(</span><span class="token string">&quot;Name &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> psg<span class="token punctuation">.</span>Input<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment"># key: 约定是是一个大写字符串，前后跟一个&quot;-&quot;字符。但是，可以任何字符串</span>
    <span class="token punctuation">[</span>psg<span class="token punctuation">.</span>Text<span class="token punctuation">(</span><span class="token string">&quot;Address &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> psg<span class="token punctuation">.</span>Input<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token string">&quot;-AD-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>psg<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token string">&quot;-OUT-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> psg<span class="token punctuation">.</span>Button<span class="token punctuation">(</span><span class="token string">&quot;tap1&quot;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;-OK-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> psg<span class="token punctuation">.</span>Button<span class="token punctuation">(</span><span class="token string">&quot;tap2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> psg<span class="token punctuation">.</span>Exit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
window <span class="token operator">=</span> psg<span class="token punctuation">.</span>Window<span class="token punctuation">(</span>
    <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span>
    layout<span class="token punctuation">,</span>
    <span class="token comment"># no_titlebar=True,  # 无边框</span>
    disable_close<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>  <span class="token comment"># 禁用关闭</span>
    alpha_channel<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">,</span>  <span class="token comment"># 窗口的不透明度</span>
    grab_anywhere<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>  <span class="token comment"># 窗口可移动</span>
    keep_on_top<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>  <span class="token comment"># 窗口将保持在当前窗口之上</span>
    resizable<span class="token operator">=</span><span class="token boolean">True</span>    <span class="token comment"># resize</span>
<span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    event<span class="token punctuation">,</span> values <span class="token operator">=</span> window<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token comment"># -OK- {0: &#39;&#39;, &#39;-AD-&#39;: &#39;&#39;}</span>

    <span class="token comment"># None 即 psg.WIN_CLOSED</span>
    <span class="token keyword">if</span> event <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&quot;Exit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token comment"># button有两种方式：</span>
    <span class="token keyword">elif</span> event <span class="token operator">==</span> <span class="token string">&quot;-OK-&quot;</span><span class="token punctuation">:</span>   <span class="token comment"># button_text 被 key 取代</span>
        window<span class="token punctuation">[</span><span class="token string">&quot;-OUT-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">&quot;tap1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 禁用button, 一样两种</span>
        window<span class="token punctuation">[</span><span class="token string">&quot;-OK-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>disabled<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> event <span class="token operator">==</span> <span class="token string">&quot;tap2&quot;</span><span class="token punctuation">:</span>   <span class="token comment"># 直接使用 button_text</span>
        window<span class="token punctuation">[</span><span class="token string">&quot;-OUT-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token string">&quot;tap2&quot;</span><span class="token punctuation">)</span>
        window<span class="token punctuation">[</span><span class="token string">&quot;-OK-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>disabled<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-确认关闭" tabindex="-1"><a class="header-anchor" href="#_1-1-确认关闭" aria-hidden="true">#</a> 1.1. 确认关闭</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PySimpleGUI <span class="token keyword">as</span> psg

layout <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>psg<span class="token punctuation">.</span>Text<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
window <span class="token operator">=</span> psg<span class="token punctuation">.</span>Window<span class="token punctuation">(</span><span class="token string">&quot;Calculator&quot;</span><span class="token punctuation">,</span> layout<span class="token punctuation">,</span> enable_close_attempted_event<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    event<span class="token punctuation">,</span> values <span class="token operator">=</span> window<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> values<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        event <span class="token operator">==</span> psg<span class="token punctuation">.</span>WINDOW_CLOSE_ATTEMPTED_EVENT
        <span class="token keyword">and</span> psg<span class="token punctuation">.</span>popup_yes_no<span class="token punctuation">(</span><span class="token string">&quot;Do you really want to exit?&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Yes&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">if</span> event <span class="token operator">==</span> psg<span class="token punctuation">.</span>WIN_CLOSED<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-弹出窗口" tabindex="-1"><a class="header-anchor" href="#_2-弹出窗口" aria-hidden="true">#</a> 2. 弹出窗口</h2><h3 id="_2-1-popup" tabindex="-1"><a class="header-anchor" href="#_2-1-popup" aria-hidden="true">#</a> 2.1. popup</h3><table><thead><tr><th>类型</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>Any</td><td>*args</td><td>要在弹出窗口中显示的值</td></tr><tr><td>Str</td><td>title</td><td>窗口的可选标题。</td></tr><tr><td>(str, str) 或 None</td><td>button_color</td><td>显示按钮的颜色（文本颜色、按钮颜色）</td></tr><tr><td>Str</td><td>background_color</td><td>窗口背景色</td></tr><tr><td>Str</td><td>text_color</td><td>文字颜色</td></tr><tr><td>Bool</td><td>auto_close</td><td>如果为True，窗口将自动关闭</td></tr><tr><td>Int</td><td>auto_close_duration</td><td>在自动关闭窗口之前保持窗口打开的时间（以秒为单位）</td></tr><tr><td>Bool</td><td>non_blocking</td><td>如果为 True 则将立即从函数返回，而无需等待用户输入。</td></tr><tr><td><code>Tuple [font_name, size, modifiers]</code></td><td>font</td><td>指定字体系列、大小等。元组或单个字符串格式&quot;名称大小样式&quot;。</td></tr><tr><td>Bool</td><td>grab_anywhere</td><td>如果为 True 则可以抓取任意位置移动窗口。</td></tr><tr><td>(int, int)</td><td>Location</td><td>在屏幕上显示窗口左上角的位置。 默认为屏幕居中的窗口</td></tr><tr><td>Bool</td><td>keep_on_top</td><td>如果为 True，窗口将保持在所有当前窗口之上</td></tr><tr><td>Bool</td><td>modal</td><td>如果为 True，则弹出窗口的行为类似于模态窗口。 默认 = True</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PySimpleGUI <span class="token keyword">as</span> psg

<span class="token comment">### 通知</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_notify<span class="token punctuation">(</span><span class="token string">&quot;popup_notify&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># __TIMEOUT__</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_timed<span class="token punctuation">(</span><span class="token string">&quot;popup_notify&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># __TIMEOUT__</span>


<span class="token comment">### 返回值可以确定点击了</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># OK</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_ok<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># OK</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_cancel<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Cancelled</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_error<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Error</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>psg<span class="token punctuation">.</span>popup_scrolled<span class="token punctuation">(</span><span class="token string">&quot;1\\n2&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;Scrolled Popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># OK</span>


<span class="token comment">### 选项</span>
ch <span class="token operator">=</span> psg<span class="token punctuation">.</span>popup_ok_cancel<span class="token punctuation">(</span>
    <span class="token string">&quot;Press OK to proceed: &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Press Cancel to stop&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;OKCancel&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;You pressed </span><span class="token interpolation"><span class="token punctuation">{</span>ch<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># OK Cancel</span>

ch <span class="token operator">=</span> psg<span class="token punctuation">.</span>popup_yes_no<span class="token punctuation">(</span><span class="token string">&quot;Do you want to Continue?&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;YesNo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You clicked: &quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>  <span class="token comment"># Yes No</span>


<span class="token comment">### select</span>
text <span class="token operator">=</span> psg<span class="token punctuation">.</span>popup_get_text<span class="token punctuation">(</span><span class="token string">&quot;Enter your name&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;Textbox&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You entered: &quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>

<span class="token builtin">file</span> <span class="token operator">=</span> psg<span class="token punctuation">.</span>popup_get_file<span class="token punctuation">(</span><span class="token string">&quot;Select a file&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;File selector&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;File selected: &quot;</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>

folder <span class="token operator">=</span> psg<span class="token punctuation">.</span>popup_get_folder<span class="token punctuation">(</span><span class="token string">&quot;Get folder&quot;</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;Folder selector&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Folder selected: &quot;</span><span class="token punctuation">,</span> folder<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-progressbar-debug" tabindex="-1"><a class="header-anchor" href="#_2-2-progressbar-debug" aria-hidden="true">#</a> 2.2. progressbar, debug</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PySimpleGUI <span class="token keyword">as</span> psg
<span class="token keyword">import</span> time

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    cancel <span class="token operator">=</span> psg<span class="token punctuation">.</span>one_line_progress_meter<span class="token punctuation">(</span>
      <span class="token string">&#39;Progress Meter&#39;</span><span class="token punctuation">,</span> 
      i<span class="token punctuation">,</span> 
      <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Character Counter&#39;</span><span class="token punctuation">,</span>
      grab_anywhere<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> cancel <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
        
    psg<span class="token punctuation">.</span>Print<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment"># 当从主窗口弹出时，需要手动关闭</span>
<span class="token comment"># psg.one_line_progress_meter_cancel()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-元素类" tabindex="-1"><a class="header-anchor" href="#_3-元素类" aria-hidden="true">#</a> 3. 元素类</h2><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> INPUT</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>psg<span class="token punctuation">.</span>Input<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&#39;-SCAN_TIME-&#39;</span><span class="token punctuation">)</span>
window<span class="token punctuation">[</span><span class="token string">&#39;-SCAN_TIME-&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
window<span class="token punctuation">[</span><span class="token string">&#39;-SCAN_TIME-&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-table" tabindex="-1"><a class="header-anchor" href="#_3-1-table" aria-hidden="true">#</a> 3.1. Table</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PySimpleGUI <span class="token keyword">as</span> psg

rows <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;Rajeev&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;Rajani&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;Rahul&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;Robin&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
headings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Marks&quot;</span><span class="token punctuation">]</span>

tbl1 <span class="token operator">=</span> psg<span class="token punctuation">.</span>Table<span class="token punctuation">(</span>
    values<span class="token operator">=</span>rows<span class="token punctuation">,</span>
    headings<span class="token operator">=</span>headings<span class="token punctuation">,</span>
    auto_size_columns<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    display_row_numbers<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    justification<span class="token operator">=</span><span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
    key<span class="token operator">=</span><span class="token string">&quot;-TABLE-&quot;</span><span class="token punctuation">,</span>
    selected_row_colors<span class="token operator">=</span><span class="token string">&quot;red on yellow&quot;</span><span class="token punctuation">,</span>
    enable_events<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    expand_x<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    expand_y<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    enable_click_events<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>  <span class="token comment"># event: (&#39;-TABLE-&#39;, &#39;+CLICKED+&#39;, (0, 1))</span>
<span class="token punctuation">)</span>
layout <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>tbl1<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>psg<span class="token punctuation">.</span>Button<span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
window <span class="token operator">=</span> psg<span class="token punctuation">.</span>Window<span class="token punctuation">(</span><span class="token string">&quot;Table Demo&quot;</span><span class="token punctuation">,</span> layout<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">715</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resizable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    event<span class="token punctuation">,</span> values <span class="token operator">=</span> window<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;event:&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">,</span> <span class="token string">&quot;values:&quot;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token keyword">if</span> event <span class="token operator">==</span> psg<span class="token punctuation">.</span>WIN_CLOSED<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">if</span> <span class="token string">&quot;+CLICKED+&quot;</span> <span class="token keyword">in</span> event<span class="token punctuation">:</span>
        psg<span class="token punctuation">.</span>popup<span class="token punctuation">(</span><span class="token string">&quot;You clicked row:{} Column: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>event<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> event<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token string">&quot;add&quot;</span> <span class="token keyword">in</span> event<span class="token punctuation">:</span>
        rows<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        tbl1<span class="token punctuation">.</span>update<span class="token punctuation">(</span>values<span class="token operator">=</span>rows<span class="token punctuation">)</span>
window<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复选框" tabindex="-1"><a class="header-anchor" href="#复选框" aria-hidden="true">#</a> 复选框</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import PySimpleGUI as psg

rb = []
rb.append(psg.Radio(&quot;Arts&quot;, &quot;faculty&quot;, key=&quot;arts&quot;, enable_events=True, default=True))
rb.append(psg.Radio(&quot;Commerce&quot;, &quot;faculty&quot;, key=&quot;comm&quot;, enable_events=True))
rb.append(psg.Radio(&quot;Science&quot;, &quot;faculty&quot;, key=&quot;sci&quot;, enable_events=True))
cb = []
cb.append(psg.Checkbox(&quot;History&quot;, key=&quot;s1&quot;))
cb.append(psg.Checkbox(&quot;Sociology&quot;, key=&quot;s2&quot;))
cb.append(psg.Checkbox(&quot;Economics&quot;, key=&quot;s3&quot;))
layout = [
    [rb],
    [cb],
    [
        psg.Button(&quot;OK&quot;),
        psg.Multiline(&quot; &quot;, expand_x=True, key=&quot;-OUT-&quot;, expand_y=True),
    ],
]
window = psg.Window(&quot;Checkbox Example&quot;, layout, size=(715, 250))
while True:
    event, values = window.read()
    print(event, values)
    if event in (psg.WIN_CLOSED, &quot;Exit&quot;):
        break
    if values[&quot;arts&quot;] == True:
        window[&quot;s1&quot;].update(text=&quot;History&quot;)
        window[&quot;s2&quot;].update(text=&quot;Sociology&quot;)
        window[&quot;s3&quot;].update(text=&quot;Economics&quot;)
    if values[&quot;comm&quot;] == True:
        window[&quot;s1&quot;].update(text=&quot;Accounting&quot;)
        window[&quot;s2&quot;].update(text=&quot;Business Studies&quot;)
        window[&quot;s3&quot;].update(text=&quot;Statistics&quot;)
    if values[&quot;sci&quot;] == True:
        window[&quot;s1&quot;].update(text=&quot;Physics&quot;)
        window[&quot;s2&quot;].update(text=&quot;Mathematics&quot;)
        window[&quot;s3&quot;].update(text=&quot;Biology&quot;)
    if event == &quot;OK&quot;:
        subs = [x.Text for x in cb if x.get() == True]
        fac = [x.Text for x in rb if x.get() == True]
        out = f&quot;Faculty: {fac[0]}\\nSubjects: {&#39; &#39;.join(subs)}\\n&quot;
        window[&quot;-OUT-&quot;].update(out)
window.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function u(i,c){return s(),a("div",null,o)}const r=n(p,[["render",u],["__file","pysimplegui.html.vue"]]);export{r as default};
