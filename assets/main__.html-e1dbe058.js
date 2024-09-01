import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const t={},i=e(`<ul><li><a href="#1-%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85">1. 没有安装</a><ul><li><a href="#11-python-mytree">1.1. <code>python mytree</code></a></li><li><a href="#12-python--m-mytree">1.2. <code>python -m mytree</code></a></li></ul></li><li><a href="#2-%E5%B7%B2%E5%AE%89%E8%A3%85">2. 已安装</a></li></ul><hr><p>加入了<code>__main__.py</code> 后，我们就可以直接执行包名。<code>python -m mytree</code> 和 <code>python mytree</code>。</p><p>其实执行都是 <code>mytree/__main__.py</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>qqq
├── mytree
│   ├── __main__.py
│   ├── tree.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># __main__.py</span>

<span class="token keyword">import</span> os
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;[__name__]&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;[__package__]&#39;</span><span class="token punctuation">,</span> __package__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;[file position]&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;[I am being accessed from]&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>curdir<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># from .tree import main</span>
<span class="token comment"># main()</span>

<span class="token keyword">import</span> mytree<span class="token punctuation">.</span>tree <span class="token keyword">as</span> tree
tree<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># import tree</span>
<span class="token comment"># tree.main()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-没有安装" tabindex="-1"><a class="header-anchor" href="#_1-没有安装" aria-hidden="true">#</a> 1. 没有安装</h2><h3 id="_1-1-python-mytree" tabindex="-1"><a class="header-anchor" href="#_1-1-python-mytree" aria-hidden="true">#</a> 1.1. <code>python mytree</code></h3><ul><li>[ ] <code>__name__</code>是<code>__main__</code> 失效:</li><li>[ ] 不知道 <code>__package__</code></li><li>[x] 将包含<code>__main__.py</code>的目录<code>mytree</code>加入到 search path <code>sys.path</code> 中</li></ul><p>特性1和2都不满足，所以不能使用相对导入:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># from .tree import main</span>
<span class="token comment"># ImportError: attempted relative import with no known parent package</span>

<span class="token comment"># import mytree.tree as tree</span>
<span class="token comment"># ModuleNotFoundError: No module named &#39;mytree&#39;</span>

<span class="token keyword">import</span> tree   <span class="token comment"># 因为特性3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># from .tree import main</span>
qqq $ python mytree
<span class="token punctuation">[</span>__name__<span class="token punctuation">]</span> __main__
<span class="token punctuation">[</span>__package__<span class="token punctuation">]</span>
<span class="token punctuation">[</span>file position<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq<span class="token punctuation">\\</span>mytree<span class="token punctuation">\\</span>__main__.py
<span class="token punctuation">[</span>I am being accessed from<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;D:\\miniconda<span class="token entity" title="\\e">\\e</span>nvs\\ldm\\lib<span class="token entity" title="\\r">\\r</span>unpy.py&quot;</span>, line <span class="token number">196</span>, <span class="token keyword">in</span> _run_module_as_main
    <span class="token builtin class-name">return</span> _run_code<span class="token punctuation">(</span>code, main_globals, None,
  File <span class="token string">&quot;D:\\miniconda<span class="token entity" title="\\e">\\e</span>nvs\\ldm\\lib<span class="token entity" title="\\r">\\r</span>unpy.py&quot;</span>, line <span class="token number">86</span>, <span class="token keyword">in</span> _run_code
    exec<span class="token punctuation">(</span>code, run_globals<span class="token punctuation">)</span>
  File <span class="token string">&quot;D:\\git\\localToolkit\\linux_scripts\\qqq\\mytree\\__main__.py&quot;</span>, line <span class="token number">7</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    from .tree <span class="token function">import</span> main
ImportError: attempted relative <span class="token function">import</span> with no known parent package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特性3满足，所以执行路径哪都行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># import tree   # 在mytree之外的路径也可以。</span>
linux_scripts $ python qqq/mytree
<span class="token punctuation">[</span>__name__<span class="token punctuation">]</span> __main__
<span class="token punctuation">[</span>__package__<span class="token punctuation">]</span>
<span class="token punctuation">[</span>file position<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq<span class="token punctuation">\\</span>mytree<span class="token punctuation">\\</span>__main__.py
<span class="token punctuation">[</span>I am being accessed from<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-python-m-mytree" tabindex="-1"><a class="header-anchor" href="#_1-2-python-m-mytree" aria-hidden="true">#</a> 1.2. <code>python -m mytree</code></h3><ul><li>[ ] <code>__name__</code>是<code>__main__</code> 失效</li><li>[x] 知道 <code>__package__</code></li><li>[ ] 不会将包含<code>__main__.py</code>的目录<code>mytree</code>加入到 search path <code>sys.path</code> 中</li></ul><p>特性1和2中其一满足，所以能使用相对导入:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> <span class="token punctuation">.</span>tree <span class="token keyword">import</span> main

<span class="token keyword">import</span> mytree<span class="token punctuation">.</span>tree <span class="token keyword">as</span> tree

<span class="token comment"># import tree</span>
<span class="token comment"># ModuleNotFoundError: No module named &#39;mytree&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特性3不满足，所以只能在 <code>mytree</code> 的父目录下执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># import tree </span>
qqq $ python <span class="token parameter variable">-m</span> mytree
<span class="token punctuation">[</span>__name__<span class="token punctuation">]</span> __main__
<span class="token punctuation">[</span>__package__<span class="token punctuation">]</span> mytree
<span class="token punctuation">[</span>file position<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq<span class="token punctuation">\\</span>mytree<span class="token punctuation">\\</span>__main__.py
<span class="token punctuation">[</span>I am being accessed from<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;D:\\miniconda<span class="token entity" title="\\e">\\e</span>nvs\\ldm\\lib<span class="token entity" title="\\r">\\r</span>unpy.py&quot;</span>, line <span class="token number">196</span>, <span class="token keyword">in</span> _run_module_as_main
    <span class="token builtin class-name">return</span> _run_code<span class="token punctuation">(</span>code, main_globals, None,
  File <span class="token string">&quot;D:\\miniconda<span class="token entity" title="\\e">\\e</span>nvs\\ldm\\lib<span class="token entity" title="\\r">\\r</span>unpy.py&quot;</span>, line <span class="token number">86</span>, <span class="token keyword">in</span> _run_code
    exec<span class="token punctuation">(</span>code, run_globals<span class="token punctuation">)</span>
  File <span class="token string">&quot;D:\\git\\localToolkit\\linux_scripts\\qqq\\mytree\\__main__.py&quot;</span>, line <span class="token number">8</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    <span class="token function">import</span> tree as tree
ModuleNotFoundError: No module named <span class="token string">&#39;tree&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-已安装" tabindex="-1"><a class="header-anchor" href="#_2-已安装" aria-hidden="true">#</a> 2. 已安装</h2><p>还是 <code>python -m mytree</code> 的情况。但是由于已安装到<code>site-packages</code>中，所以 search path 是找得到的，就<strong>不局限于执行的工作路径</strong>。</p><p>另外，还有一种情况支持<code>import mytree</code>————切换到包的目录下。因为&quot;<code>PYTHONPATH</code>: 默认值是当前工作目录 working directory&quot;，所以能找到。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pip install . 不行,找不到</span>
<span class="token comment"># 因为development安装，下面进入到mytree文件夹下才行。</span>
$ pip <span class="token function">install</span> <span class="token parameter variable">-e</span> <span class="token builtin class-name">.</span>

<span class="token comment"># import mytree</span>
mytree <span class="token variable">$python</span> <span class="token parameter variable">-m</span> mytree  
<span class="token punctuation">[</span>__name__<span class="token punctuation">]</span> __main__
<span class="token punctuation">[</span>__package__<span class="token punctuation">]</span> mytree
<span class="token punctuation">[</span>file position<span class="token punctuation">]</span> d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localtoolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq<span class="token punctuation">\\</span>mytree<span class="token punctuation">\\</span>__main__.py
<span class="token punctuation">[</span>I am being accessed from<span class="token punctuation">]</span> D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localToolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>qqq<span class="token punctuation">\\</span>mytree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[i];function o(c,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","main__.html.vue"]]);export{r as default};
