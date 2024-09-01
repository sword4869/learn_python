import{_ as n,V as s,W as a,X as t}from"./framework-48406333.js";const e={},p=t(`<ul><li><p>UTC/GMT GMT（Greenwich Mean Time）， 格林威治时。 UTC（Coodinated Universal Time），协调世界时，又称世界统一时间、世界标准时间、国际协调时间。 GMT是前世界标准时，UTC是现世界标准时。UTC 比 GMT更精准，但在不需要精确到秒的情况下，二者可以视为等同。 在中国为UTC+8 <code>Sat, 28 Jan 2023 23:39:22 GMT</code></p></li><li><p>timestamp 时间戳（timestamp）的方式：通常来说，时间戳表示的是从1970年1月1日00:00:00开始按秒计算的偏移量。</p><ul><li><code>time.time()</code>是<code>1609387280.3342752</code>秒</li><li><code>time.time_ns()</code>是<code>1685863994995683900</code>纳秒</li></ul></li><li><p>struct_time 九位元组。 如，定义变量是<code>t = struct_time((2020, 12, 31, 11, 56, 7, 3, 366, -1))</code>， 输出显示是<code>time.struct_time(tm_year=2020, tm_mon=8, tm_mday=29, tm_hour=23, tm_min=39, tm_sec=44, tm_wday=5, tm_yday=242, tm_isdst=0)</code></p></li><li><p>str_time</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token directive important">%y 两位数的年份表示(00-99)</span>
<span class="token directive important">%Y 四位数的年份表示(000-9999)</span>

<span class="token directive important">%m 月份(01-12)</span>
<span class="token directive important">%b 本地简化的月份名称, [&#39;Jan&#39;, &#39;Feb&#39;, &#39;Mar&#39;, &#39;Apr&#39;, &#39;May&#39;, &#39;Jun&#39;, &#39;Jul&#39;, &#39;Aug&#39;, &#39;Sep&#39;, &#39;Oct&#39;, &#39;Nov&#39;, &#39;Dec&#39;]</span>
<span class="token directive important">%B 本地完整的月份名称, [&#39;January&#39;, &#39;February&#39;, &#39;March&#39;, &#39;April&#39;, &#39;May&#39;, &#39;June&#39;, &#39;July&#39;, &#39;August&#39;, &#39;September&#39;, &#39;October&#39;, &#39;November&#39;, &#39;December&#39;]</span>


<span class="token directive important">%d 月内中的一天(0-31)</span>

<span class="token directive important">%H 24小时制小时数(0-23)</span>
<span class="token directive important">%I 12小时制小时数(01-12)</span>

<span class="token directive important">%p AM,PM</span>

<span class="token directive important">%M 分钟数(00-59)</span>
<span class="token directive important">%S 秒(00-59)</span>

<span class="token directive important">%w 星期(0-6) ，星期天为星期的开始, [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;]</span>
<span class="token directive important">%a 本地简化星期名称, [&#39;Sun&#39;, &#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;]</span>
<span class="token directive important">%A 本地完整星期名称, [&#39;Sunday&#39;, &#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;]</span>

<span class="token punctuation">---</span>

<span class="token directive important">%j 年内的一天(001-366)</span>

<span class="token directive important">%U 一年中的星期数(00-53) 星期天为星期的开始</span>
<span class="token directive important">%W 一年中的星期数(00-53) 星期一为星期的开始</span>

<span class="token directive important">%Z 当前时区的名称</span>

<span class="token directive important">%% %号本身</span>

<span class="token punctuation">---</span>

<span class="token directive important">%d 本地相应的日期表示和时间表示</span>

<span class="token directive important">%x 本地相应的年月日表示</span>
<span class="token directive important">%X 本地相应的时分秒表示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>struct_time <span class="token operator">=</span> t<span class="token punctuation">.</span>str_time2struct_time<span class="token punctuation">(</span>format_st<span class="token operator">=</span><span class="token string">&#39;%x-%X&#39;</span><span class="token punctuation">,</span> str_time<span class="token operator">=</span><span class="token string">&#39;01/01/23-21:12:14&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span>format_st<span class="token operator">=</span><span class="token string">&#39;年%y-%Y | 月%m-%b-%B | 日%d | 时%H-%I | 上午下午%p | 分秒%M-%S | 星期几%w-%a-%A&#39;</span><span class="token punctuation">,</span> struct_time<span class="token operator">=</span>struct_time<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span>format_st<span class="token operator">=</span><span class="token string">&#39;年内第几天%j | 星期下标%U-%W | 时区%Z | %%&#39;</span><span class="token punctuation">,</span> struct_time<span class="token operator">=</span>struct_time<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span>format_st<span class="token operator">=</span><span class="token string">&#39;%c | %x | %X&#39;</span><span class="token punctuation">,</span> struct_time<span class="token operator">=</span>struct_time<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 年23-2023 | 月01-Jan-January | 日01 | 时21-09 | 上午下午PM | 分秒12-14 | 星期几0-Sun-Sunday</span>
<span class="token comment"># 年内第几天001 | 星期下标01-00 | 时区中国夏令时 | %</span>
<span class="token comment"># Sun Jan  1 21:12:14 2023 | 01/01/23 | 21:12:14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 第几周的不同：%U %W</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t1 <span class="token operator">=</span> strptime<span class="token punctuation">(</span><span class="token string">&#39;2020-01-05 11:56:07&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> strftime<span class="token punctuation">(</span><span class="token string">&#39;%U %W&#39;</span><span class="token punctuation">,</span> t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">01</span> <span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20201231123023705.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhbmRhbHBob240ODY5,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token triple-quoted-string string">&#39;&#39;&#39;
def timestamp2struct_time(self, timestamp=time.time()):

这是错的，只会一直是程序最初运行的时间。因为timestamp=time.time()，这个是写死的，编译器就会固定。
&#39;&#39;&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">TimeTransformer</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">timestamp2struct_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> timestamp<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> timestamp <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            timestamp <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">struct_time2timestamp</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> struct_time<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> struct_time <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            struct_time <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>struct_time<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">struct_time2str_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> format_st<span class="token operator">=</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">,</span> struct_time<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> struct_time <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            struct_time <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>format_st<span class="token punctuation">,</span> struct_time<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">str_time2struct_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> format_st<span class="token operator">=</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">,</span> str_time<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> str_time <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            str_time <span class="token operator">=</span> self<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>str_time<span class="token punctuation">,</span> format_st<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">timestamp2str_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> timestamp<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> format_st<span class="token operator">=</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> timestamp <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            timestamp <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span>format_st<span class="token punctuation">,</span> self<span class="token punctuation">.</span>timestamp2struct_time<span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">str_time2timestamp</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> format_st<span class="token operator">=</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">,</span> str_time<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> str_time <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            str_time <span class="token operator">=</span> self<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>struct_time2timestamp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>str_time2struct_time<span class="token punctuation">(</span>format_st<span class="token punctuation">,</span> str_time<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">GMTplus8</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> format_st<span class="token punctuation">,</span> str_time<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>timestamp2str_time<span class="token punctuation">(</span>self<span class="token punctuation">.</span>str_time2timestamp<span class="token punctuation">(</span>format_st<span class="token punctuation">,</span> str_time<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    t <span class="token operator">=</span> TimeTransformer<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>timestamp2struct_time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>struct_time2timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>str_time2struct_time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>timestamp2str_time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>str_time2timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    str_time <span class="token operator">=</span> <span class="token string">&#39;Sat, 28 Jan 2023 23:39:22 GMT&#39;</span>
    format_st <span class="token operator">=</span> <span class="token string">&#39;%a, %d %b %Y %X GMT&#39;</span>
    st <span class="token operator">=</span> t<span class="token punctuation">.</span>GMTplus8<span class="token punctuation">(</span>format_st<span class="token punctuation">,</span> str_time<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span>   <span class="token comment"># 2023-01-29 07:39:22</span>
    
    <span class="token comment"># 如果是写死的默认参数，这里打印出来的时间就不动</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> TimeTransformer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>struct_time2str_time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","GMT.html.vue"]]);export{r as default};
