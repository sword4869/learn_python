import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},p=e(`<ul><li><a href="#1-%E8%B7%AF%E5%BE%84">1. 路径</a><ul><li><a href="#11-%E4%BD%8D%E7%BD%AE">1.1. 位置</a></li><li><a href="#12-%E5%88%92%E5%88%86-%E6%B3%A8%E6%84%8F%E7%BB%93%E5%B0%BE%E4%B8%8D%E8%A6%81%E5%B8%A6">1.2. 划分<code>/</code>: 注意，结尾不要带<code>/</code></a></li><li><a href="#13-%E5%88%92%E5%88%86%E5%90%8E%E7%BC%80">1.3. 划分后缀<code>.</code></a></li><li><a href="#14-%E5%90%8E%E7%BC%80%E5%88%A4%E6%96%AD">1.4. 后缀判断</a></li><li><a href="#15-%E8%B7%AF%E5%BE%84%E6%8B%BC%E6%8E%A5">1.5. 路径拼接</a></li></ul></li><li><a href="#2-%E5%88%97%E5%87%BA%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84">2. 列出文件路径</a></li><li><a href="#3-exist">3. exist</a></li><li><a href="#4-%E5%BD%93%E5%89%8D%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95--%E8%BF%9B%E5%85%A5%E7%9B%AE%E5%BD%95">4. 当前工作目录 &amp; 进入目录</a></li><li><a href="#5-%E6%96%87%E4%BB%B6%E5%A4%B9%E5%92%8C%E6%96%87%E4%BB%B6%E9%83%BD%E8%83%BD%E5%88%A0">5. 文件夹和文件都能删</a></li><li><a href="#6-%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9">6. 创建文件夹</a></li></ul><hr><h2 id="_1-路径" tabindex="-1"><a class="header-anchor" href="#_1-路径" aria-hidden="true">#</a> 1. 路径</h2><h3 id="_1-1-位置" tabindex="-1"><a class="header-anchor" href="#_1-1-位置" aria-hidden="true">#</a> 1.1. 位置</h3><p>影响 <code>os.makedirs</code>:</p><ul><li><p><code>expanduser</code>: 替换<code>~</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>new_path_2 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>expanduser<span class="token punctuation">(</span><span class="token string">&quot;~/test_dir&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># /home/admin/test_dir</span>

os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&quot;~/test_dir&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 把\`~\`当作了一个普通字符，理解为是一个相对路径</span>
<span class="token comment"># 在当前路径下创建了一个 名为\`~/test_dir\`目录.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>abspath</code>: 绝对路径。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 绝对路径</span>
abspath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;images/166.png&#39;</span><span class="token punctuation">)</span>    
<span class="token comment"># E:\\\\learn_python\\\\images\\\\1663935316.png</span>

<span class="token comment"># 前者不可用于os.makedirs</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>args<span class="token punctuation">.</span>out_root<span class="token punctuation">,</span> args<span class="token punctuation">.</span>out_article<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>args<span class="token punctuation">.</span>out_root<span class="token punctuation">,</span> args<span class="token punctuation">.</span>out_article<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># \`D:\\git\\dd\\docs/a/aaa.md\\..\`, os.makedirs创建了名为 \`aaa.md\` 文件夹</span>
<span class="token comment"># \`D:\\git\\dd\\docs\\a\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绝对路径返回的值不会带 <code>~</code>，但是会错误理解输入的路径。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>expanduser<span class="token punctuation">(</span><span class="token string">&#39;~/aa&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;/home/lab/aa&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;~/aa&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;/home/lab/git/GAVA/~/aa&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>其他：</p><ul><li><p><code>dirname</code>: 文件或者文件夹的父目录</p><p>dirname对相对路径可能失效</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;images/166.png&#39;</span>

dir1 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>a<span class="token punctuation">)</span>     <span class="token comment"># &#39;images&#39;</span>
abs1 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>dir1<span class="token punctuation">)</span>  <span class="token comment"># &#39;E:\\\\learn_python\\\\images&#39;</span>

dir2 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>dir1<span class="token punctuation">)</span>  <span class="token comment"># &#39;&#39;</span>
abs2 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>dir2<span class="token punctuation">)</span>  <span class="token comment"># &#39;E:\\\\learn_python&#39;</span>

<span class="token comment"># 到&#39;&#39;在dirname就不变了</span>
dir3 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>dir2<span class="token punctuation">)</span>  <span class="token comment"># &#39;&#39;</span>
abs3 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>dir3<span class="token punctuation">)</span>  <span class="token comment"># &#39;E:\\\\learn_python&#39;</span>

<span class="token comment"># 所以 dirname 要绝对路径</span>
<span class="token builtin">abs</span> <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;E:\\\\&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-2-划分-注意-结尾不要带" tabindex="-1"><a class="header-anchor" href="#_1-2-划分-注意-结尾不要带" aria-hidden="true">#</a> 1.2. 划分<code>/</code>: 注意，结尾不要带<code>/</code></h3><p>!!! note 与字符串划分的区别 因为不同平台的分隔符不同，字符串划分只是写死的<code>/</code>，<code>os</code>库则是自适应的。 <code>python # 路径中的分隔符 # windows &gt;&gt;&gt; print(os.sep, os.path.sep) \\ \\ # linux &gt;&gt;&gt; print(os.sep, os.path.sep) / / </code></p><ul><li><p>手动split</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;images/166.png&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>   
<span class="token string">&#39;166.png&#39;</span>

<span class="token comment"># 智能</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;images/166.png&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span>os<span class="token punctuation">.</span>sep<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>   
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;images\\\\166.png&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span>os<span class="token punctuation">.</span>sep<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>   
<span class="token comment"># &gt;&gt;&gt; &#39;images\\166.png&#39;.split(os.sep)[-1]     </span>
<span class="token comment"># &#39;imagesv.png&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>basename</code>: 返回最后一个分隔符(<code>/</code> 或者 <code>\\</code>)后面的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span><span class="token string">&#39;images/166.png&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;166.png&#39;</span>

<span class="token comment"># os.path.basename(&#39;images/166.png/&#39;)</span>
<span class="token comment"># # 空。所以结尾不要\`/\`</span>

<span class="token comment"># os.path.basename(&#39;E:\\\\learn_python\\\\images\\\\1663935316.png&#39;) </span>
<span class="token comment"># # &#39;1663935316.png&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>split</code>: 同<code>basename</code>一样的机制，返回前面的和后面的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;log/1/2/some.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;some.pdf&#39;</span>

<span class="token comment"># os.path.split(&#39;some.pdf&#39;)</span>
<span class="token comment"># # (&#39;&#39;, &#39;some.pdf&#39;)</span>

<span class="token comment"># os.path.split(&#39;log/1/2/some.pdf&#39;)</span>
<span class="token comment"># # (&#39;log/1/2&#39;, &#39;some.pdf&#39;)</span>

<span class="token comment"># os.path.split(&#39;log/1/2&#39;)</span>
<span class="token comment"># # (&#39;log/1&#39;, &#39;2&#39;)</span>

<span class="token comment"># os.path.split(&#39;log/1/2/&#39;)</span>
<span class="token comment"># # (&#39;log/1/2&#39;, &#39;&#39;)</span>

<span class="token comment"># os.path.split(&#39;E:\\\\learn_python\\\\images\\\\1663935316.png&#39;)    </span>
<span class="token comment"># #(&#39;E:\\\\learn_python\\\\images&#39;, &#39;1663935316.png&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-3-划分后缀" tabindex="-1"><a class="header-anchor" href="#_1-3-划分后缀" aria-hidden="true">#</a> 1.3. 划分后缀<code>.</code></h3><ul><li><p>手动split</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;log/1/2/some.pdf&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;pdf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>splitext</code>: 前缀和后缀。根据<code>.</code>划分, <code>.</code>包含在后缀里。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span><span class="token string">&#39;log/1/2/some.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;.pdf&#39;</span>

<span class="token comment"># os.path.splitext(&#39;some.pdf&#39;)</span>
<span class="token comment"># # (&#39;some&#39;, &#39;.pdf&#39;)</span>

<span class="token comment"># os.path.splitext(&#39;log/1/2/some.pdf&#39;)</span>
<span class="token comment"># # (&#39;log/1/2/some&#39;, &#39;.pdf&#39;)‘</span>

<span class="token comment"># os.path.splitext(&#39;log/1/2&#39;)</span>
<span class="token comment"># # (&#39;log/1/2&#39;, &#39;&#39;)</span>

<span class="token comment"># os.path.splitext(&#39;log/1/2/&#39;)</span>
<span class="token comment"># # (&#39;log/1/2/&#39;, &#39;&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4-后缀判断" tabindex="-1"><a class="header-anchor" href="#_1-4-后缀判断" aria-hidden="true">#</a> 1.4. 后缀判断</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 后缀判断</span>
imgs <span class="token operator">=</span> <span class="token punctuation">[</span>f <span class="token keyword">for</span> f <span class="token keyword">in</span> imgs <span class="token keyword">if</span> <span class="token builtin">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span>f<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span>ex<span class="token punctuation">)</span> <span class="token keyword">for</span> ex <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;JPG&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jpeg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PNG&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment"># imgs = [f for f in imgs if any([ex in f for ex in [&#39;JPG&#39;, &#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;PNG&#39;]])]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-路径拼接" tabindex="-1"><a class="header-anchor" href="#_1-5-路径拼接" aria-hidden="true">#</a> 1.5. 路径拼接</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 每个子路径的结尾可以有或没有\`/\`</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;./root/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;runoob.txt&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;./root/test/runoob.txt&#39;</span>
<span class="token comment"># 最后的/则是自定义</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;./root/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;runoob.txt/&#39;</span><span class="token punctuation">)</span> 
&#39;<span class="token punctuation">.</span><span class="token operator">/</span>root<span class="token operator">/</span>test<span class="token operator">/</span>runoob<span class="token punctuation">.</span>txt<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-列出文件路径" tabindex="-1"><a class="header-anchor" href="#_2-列出文件路径" aria-hidden="true">#</a> 2. 列出文件路径</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 当前工作目录</span>
os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 指定目录下</span>
os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>newPath<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> file_name <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>file_directory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># basename</span>
imgs <span class="token operator">=</span> <span class="token punctuation">[</span>file_name <span class="token keyword">for</span> f <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>file_directory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># 既listdir又join</span>
imgs <span class="token operator">=</span> <span class="token punctuation">[</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>file_directory<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token keyword">for</span> f <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>file_directory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-exist" tabindex="-1"><a class="header-anchor" href="#_3-exist" aria-hidden="true">#</a> 3. exist</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file and directory are ok</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>newPath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>newPath</code> 不能是 <code>None</code>，所以会看到有先替换<code>None</code>为<code>&quot;&quot;</code>再判断的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span> 
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
  File <span class="token string">&quot;D:\\Applications\\miniconda\\envs\\nerf\\lib\\genericpath.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">19</span><span class="token punctuation">,</span> <span class="token keyword">in</span> exists
    os<span class="token punctuation">.</span>stat<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
TypeError<span class="token punctuation">:</span> stat<span class="token punctuation">:</span> path should be string<span class="token punctuation">,</span> <span class="token builtin">bytes</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>PathLike <span class="token keyword">or</span> integer<span class="token punctuation">,</span> <span class="token keyword">not</span> NoneType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> newPath <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    newPath <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>newPath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-当前工作目录-进入目录" tabindex="-1"><a class="header-anchor" href="#_4-当前工作目录-进入目录" aria-hidden="true">#</a> 4. 当前工作目录 &amp; 进入目录</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 当前工作目录</span>
wd <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 进入目录</span>
os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span>newPath<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文件夹和文件都能删" tabindex="-1"><a class="header-anchor" href="#_5-文件夹和文件都能删" aria-hidden="true">#</a> 5. 文件夹和文件都能删</h2><p><code>os.remove(filePath)</code> 只能删除文件，不能删除目录</p><p><code>os.rmdir(emptyDirectory)</code> 只能删除空目录，不能删除文件</p><p><code>os.removedirs(bottomEmptyDirectory)</code> 递归删除一系列空文件夹</p><p><code>shutil.rmtree(directory)</code> 只能删除目录（可以删除非空目录），不能删除文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> shutil
<span class="token keyword">def</span> <span class="token function">remove_file_directory</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> 
    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        shutil<span class="token punctuation">.</span>rmtree<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-创建文件夹" tabindex="-1"><a class="header-anchor" href="#_6-创建文件夹" aria-hidden="true">#</a> 6. 创建文件夹</h2><p>确保创造：</p><ul><li>既可以是多级目录，<code>mkdir -p</code>的效果</li><li>也是如果存在就不动原来的东西</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>directory<span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
# 单级目录
# 如果目录有多级，则创建最后一级，
# 如果最后一级目录的上级目录有不存在的，则会抛出一个 OSError
os.mkdir(directory)

# 多级目录
# exist_ok=False：是否在目录已存在时触发异常。
#     如果exist_ok为False（默认值），则在目标目录已存在的情况下触发FileExistsError异常；
#     如果exist_ok为True，则不会触发异常。
os.makedirs(directory)
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创造干净的:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> shutil

shutil<span class="token punctuation">.</span>rmtree<span class="token punctuation">(</span>directory<span class="token punctuation">,</span> ignore_errors<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>directory<span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
