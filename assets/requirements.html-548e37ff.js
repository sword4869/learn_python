import{_ as e,V as n,W as s,Z as i}from"./framework-b4b62eb1.js";const a={},l=i(`<ul><li><a href="#1-basic">1. basic</a></li><li><a href="#2-global-options">2. Global options</a><ul><li><a href="#21-pytorch%E7%9A%84%E4%BE%8B%E5%AD%90">2.1. pytorch的例子</a></li><li><a href="#22-%E4%B8%B4%E6%97%B6%E6%BA%90%E7%9A%84%E4%BE%8B%E5%AD%90">2.2. 临时源的例子</a></li></ul></li><li><a href="#3-other-source">3. other source</a></li></ul><h1 id="_1-basic" tabindex="-1"><a class="header-anchor" href="#_1-basic" aria-hidden="true">#</a> 1. basic</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>numpy           <span class="token comment"># 只包含包名.方便，但不利于控制风险。</span>
<span class="token assign-left variable">docopt</span><span class="token operator">==</span><span class="token number">0.6</span>.1   <span class="token comment"># 指定版本</span>
requests<span class="token operator">&gt;=</span> <span class="token number">2.8</span>.1  <span class="token comment"># 自动保持版本为最新</span>
<span class="token assign-left variable">requests</span><span class="token operator">==</span><span class="token number">2.8</span>.* <span class="token comment"># 大版本内最新</span>
SomeProject<span class="token operator">&gt;=</span> <span class="token number">1.2</span>, <span class="token operator">!=</span><span class="token number">1.3</span>, <span class="token operator">&lt;</span><span class="token number">2.0</span>    <span class="token comment"># 保证了大版本在1.2和2之间；并且，排除了已知有问题的版本1.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-global-options" tabindex="-1"><a class="header-anchor" href="#_2-global-options" aria-hidden="true">#</a> 2. Global options</h1><ul><li>The following options have an effect on the entire pip install run</li><li>must be specified <strong>on their individual lines</strong>.</li><li>会在安装包前都扫描完全有的options后，才安装包。所以，不论写在哪里都行，比如，一开始写在文件开头，写在文件末尾，写在安装的中间。</li><li>正因为全扫描完，所以如果出现冲突，就得分文件。比如，index-url不兼容（不是包安随便哪个index-url都能运行的情况），一个包指定index-url，另一个指定安装别的index-url，那么就得拆分成不同<code>requirements_01.txt</code>，一个一个文件安装。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># index-url 是主要的源（即pip配置的源）, extra-index-url 是 额外源</span>

<span class="token comment"># index-url : 只有一个，再写一个就会代替。</span>
-i, --index-url

--extra-index-url

--no-index

-c, <span class="token parameter variable">--constraint</span>

-r, <span class="token parameter variable">--requirement</span>

-e, <span class="token parameter variable">--editable</span>

-f, --find-links

--no-binary

--only-binary

--prefer-binary

--require-hashes

<span class="token parameter variable">--pre</span>

--trusted-host

--use-feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-pytorch的例子" tabindex="-1"><a class="header-anchor" href="#_2-1-pytorch的例子" aria-hidden="true">#</a> 2.1. pytorch的例子</h2><p><code>pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--extra-index-url https://download.pytorch.org/whl/cu117
torch 
torchvision 
torchaudio 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用国内源下的<code>torch</code>,<code>torch+gpu</code>都失败<code>torch.version.cuda = None</code></p><h2 id="_2-2-临时源的例子" tabindex="-1"><a class="header-anchor" href="#_2-2-临时源的例子" aria-hidden="true">#</a> 2.2. 临时源的例子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--index-url https://mirrors.bfsu.edu.cn/pypi/web/simple	
--trusted-host https://mirrors.bfsu.edu.cn
numpy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-other-source" tabindex="-1"><a class="header-anchor" href="#_3-other-source" aria-hidden="true">#</a> 3. other source</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git+https://github.com/mattloper/chumpy.git
pip @ https://github.com/pypa/pip/archive/22.0.2.zip
./downloads/numpy-1.9.2-cp34-none-win32.whl
http://wxpython.org/Phoenix/snapshot-builds/wxPython_Phoenix-3.0.3.dev1820+49a8884-cp34-none-win_amd64.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[l];function d(t,c){return n(),s("div",null,r)}const u=e(a,[["render",d],["__file","requirements.html.vue"]]);export{u as default};
