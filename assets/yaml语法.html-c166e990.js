import{_ as n,V as a,W as s,X as e}from"./framework-48406333.js";const l={},t=e(`<ul><li><a href="#1-introduction">1. introduction</a></li><li><a href="#2-%E7%BC%A9%E8%BF%9B">2. 缩进</a></li><li><a href="#3-key-value-pairs">3. Key-Value pairs</a></li><li><a href="#4-list">4. list</a></li><li><a href="#5-%E5%BC%95%E7%94%A8">5. 引用</a></li><li><a href="#6-corresponding-json">6. corresponding json</a></li></ul><h1 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction" aria-hidden="true">#</a> 1. introduction</h1><p>YAML 的配置文件后缀为<code>.yml</code>，如：<code>hello.yml</code></p><p>大小写敏感</p><p><code>#</code>表示注释</p><h1 id="_2-缩进" tabindex="-1"><a class="header-anchor" href="#_2-缩进" aria-hidden="true">#</a> 2. 缩进</h1><ul><li>使用缩进表示层级关系</li><li>缩进不允许使用tab，只允许空格</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li>there MUST be spaces between element parts.</li></ul><h1 id="_3-key-value-pairs" tabindex="-1"><a class="header-anchor" href="#_3-key-value-pairs" aria-hidden="true">#</a> 3. Key-Value pairs</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Name:Value</code>, it is wrong，中间必须要有空格.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">child-key</span><span class="token punctuation">:</span> value1<span class="token punctuation">,</span> <span class="token key atrule">child-key2</span><span class="token punctuation">:</span> value2<span class="token punctuation">}</span>

<span class="token key atrule">key</span><span class="token punctuation">:</span> 
    <span class="token key atrule">child-key</span><span class="token punctuation">:</span> value1
    <span class="token key atrule">child-key2</span><span class="token punctuation">:</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">?</span>  
    <span class="token punctuation">-</span> complexkey1
    <span class="token punctuation">-</span> <span class="token key atrule">complexkey2</span>
<span class="token punctuation">:</span>
    <span class="token punctuation">-</span> complexvalue1
    <span class="token punctuation">-</span> complexvalue2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>examples:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">intNumber</span><span class="token punctuation">:</span> <span class="token number">299</span>
<span class="token key atrule">binaryNumber</span><span class="token punctuation">:</span> 0b1010_0111_0100_1010_1110    <span class="token comment">#二进制表示</span>

<span class="token key atrule">floatNumber1</span><span class="token punctuation">:</span> <span class="token number">3.14</span>
<span class="token key atrule">floatNumber2</span><span class="token punctuation">:</span> <span class="token number">6.8523015e+5</span>  <span class="token comment">#可以使用科学计数法</span>

<span class="token key atrule">quotedText</span><span class="token punctuation">:</span> <span class="token string">&quot;some text description&quot;</span>     <span class="token comment"># &quot; or &#39;</span>
<span class="token key atrule">moreQuotedtext</span><span class="token punctuation">:</span> strings do not have to be quoted<span class="token punctuation">,</span> but I prefer to do it=
<span class="token key atrule">multipleText</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> newline
      newline2    <span class="token comment">#字符串可以拆成多行，每一行会被转化成一个空格</span>
<span class="token key atrule">we can also have spaces in keys</span><span class="token punctuation">:</span> and also in values

<span class="token comment"># TRUE, true, True, FALSE, false, False 都可以</span>
<span class="token key atrule">boolean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 日期只能用两种格式</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17</span>    <span class="token comment"># ISO 8601格式，即yyyy-MM-dd</span>
<span class="token key atrule">datetime</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17T15:02:31+08:00</span>    <span class="token comment"># ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区</span>

<span class="token key atrule">nullKeyValue1</span><span class="token punctuation">:</span> <span class="token null important">null</span>
<span class="token key atrule">nullKeyValue2</span><span class="token punctuation">:</span> <span class="token string">&#39;node&#39;</span>
<span class="token key atrule">nullKeyValue3</span><span class="token punctuation">:</span> <span class="token null important">~</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-list" tabindex="-1"><a class="header-anchor" href="#_4-list" aria-hidden="true">#</a> 4. list</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">]</span>

<span class="token key atrule">key</span><span class="token punctuation">:</span> 
 <span class="token punctuation">-</span> value1
 <span class="token punctuation">-</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># list + key-value</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> John Doe
  <span class="token key atrule">occupation</span><span class="token punctuation">:</span> gardener
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lucy Black
  <span class="token key atrule">occupation</span><span class="token punctuation">:</span> teacher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-引用" tabindex="-1"><a class="header-anchor" href="#_5-引用" aria-hidden="true">#</a> 5. 引用</h1><p><code>&amp;</code> 用来建立锚点，<code>&lt;&lt;</code> 表示合并到当前数据，<code>*</code> 用来引用锚点。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span> <span class="token important">&amp;defaults</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个例子:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token important">&amp;showell</span> Steve 
    <span class="token punctuation">-</span> Clark 
    <span class="token punctuation">-</span> Brian 
    <span class="token punctuation">-</span> Oren 
    <span class="token punctuation">-</span> <span class="token important">*showell</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">list</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Steve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Clark&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Brian&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Oren&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Steve&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_6-corresponding-json" tabindex="-1"><a class="header-anchor" href="#_6-corresponding-json" aria-hidden="true">#</a> 6. corresponding json</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Ruby
  <span class="token punctuation">-</span> Perl
  <span class="token punctuation">-</span> Python 
<span class="token key atrule">websites</span><span class="token punctuation">:</span>
  <span class="token key atrule">YAML</span><span class="token punctuation">:</span> yaml.org 
  <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> ruby<span class="token punctuation">-</span>lang.org 
  <span class="token key atrule">Python</span><span class="token punctuation">:</span> python.org 
  <span class="token key atrule">Perl</span><span class="token punctuation">:</span> use.perl.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为 json 为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
  languages<span class="token operator">:</span> <span class="token punctuation">[</span> &#39;Ruby&#39;<span class="token punctuation">,</span> &#39;Perl&#39;<span class="token punctuation">,</span> &#39;Python&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
  websites<span class="token operator">:</span> <span class="token punctuation">{</span>
    YAML<span class="token operator">:</span> &#39;yaml.org&#39;<span class="token punctuation">,</span>
    Ruby<span class="token operator">:</span> &#39;ruby-lang.org&#39;<span class="token punctuation">,</span>
    Python<span class="token operator">:</span> &#39;python.org&#39;<span class="token punctuation">,</span>
    Perl<span class="token operator">:</span> &#39;use.perl.org&#39; 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),i=[t];function p(c,u){return a(),s("div",null,i)}const d=n(l,[["render",p],["__file","yaml语法.html.vue"]]);export{d as default};
