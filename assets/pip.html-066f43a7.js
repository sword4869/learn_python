import{_ as e,V as i,W as l,X as n,Y as s,$ as p,a0 as t,Z as c,D as d}from"./framework-b4b62eb1.js";const o="/learn_python/assets/20200602155038752-4a09ba15.png",r={},u=c(`<ul><li><a href="#1-pip">1. pip</a><ul><li><a href="#11-%E6%8D%A2%E6%BA%90">1.1. 换源</a><ul><li><a href="#111-%E6%B0%B8%E4%B9%85%E4%BF%AE%E6%94%B9">1.1.1. 永久修改</a><ul><li><a href="#1111-pip%E8%87%AA%E5%8A%A8">1.1.1.1. pip自动</a></li><li><a href="#1112-%E6%89%8B%E5%8A%A8">1.1.1.2. 手动</a></li></ul></li><li><a href="#112-%E4%B8%B4%E6%97%B6%E6%8D%A2%E6%BA%90">1.1.2. 临时换源</a></li></ul></li><li><a href="#12-%E5%91%BD%E4%BB%A4">1.2. 命令</a><ul><li><a href="#121-%E5%B8%B8%E7%94%A8">1.2.1. 常用</a></li><li><a href="#122-git%E5%8C%85">1.2.2. git包</a></li></ul></li></ul></li></ul><hr><h1 id="_1-pip" tabindex="-1"><a class="header-anchor" href="#_1-pip" aria-hidden="true">#</a> 1. pip</h1><h2 id="_1-1-换源" tabindex="-1"><a class="header-anchor" href="#_1-1-换源" aria-hidden="true">#</a> 1.1. 换源</h2><h3 id="_1-1-1-永久修改" tabindex="-1"><a class="header-anchor" href="#_1-1-1-永久修改" aria-hidden="true">#</a> 1.1.1. 永久修改</h3><p>这是全局效果，系统python、conda的base环境python、conda自创环境下的python都读取同一个配置文件<code>~/.config/pip/pip.conf</code>。</p><h4 id="_1-1-1-1-pip自动" tabindex="-1"><a class="header-anchor" href="#_1-1-1-1-pip自动" aria-hidden="true">#</a> 1.1.1.1. pip自动</h4><p>linux和win都通用。</p><ul><li>设置</li></ul><p>新版ubuntu要求使用https源，要注意。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># linux 直接复制，windows在前面加$, \`$url1=&#39;https://mirrors.bfsu.edu.cn/pypi/web/simple&#39;\`</span>

<span class="token comment"># 北外（最快）</span>
<span class="token assign-left variable">url1</span><span class="token operator">=</span><span class="token string">&#39;https://mirrors.bfsu.edu.cn/pypi/web/simple&#39;</span>
<span class="token assign-left variable">url2</span><span class="token operator">=</span><span class="token string">&#39;https://mirrors.bfsu.edu.cn&#39;</span>

<span class="token comment"># 中国科技大学	</span>
<span class="token assign-left variable">url1</span><span class="token operator">=</span><span class="token string">&#39;https://pypi.mirrors.ustc.edu.cn/simple&#39;</span>
<span class="token assign-left variable">url2</span><span class="token operator">=</span><span class="token string">&#39;https://pypi.mirrors.ustc.edu.cn&#39;</span>

<span class="token comment"># 清华(有点限速)</span>
<span class="token assign-left variable">url1</span><span class="token operator">=</span><span class="token string">&#39;https://pypi.tuna.tsinghua.edu.cn/simple&#39;</span>
<span class="token assign-left variable">url2</span><span class="token operator">=</span><span class="token string">&#39;https://pypi.tuna.tsinghua.edu.cn&#39;</span>

<span class="token comment"># 阿里云(十分限速)	</span>
<span class="token assign-left variable">url1</span><span class="token operator">=</span><span class="token string">&#39;https://mirrors.aliyun.com/pypi/simple&#39;</span>
<span class="token assign-left variable">url2</span><span class="token operator">=</span><span class="token string">&#39;mirrors.aliyun.com&#39;</span>

pip config <span class="token builtin class-name">set</span> global.index-url <span class="token variable">$url1</span>
pip config <span class="token builtin class-name">set</span> install.trusted-host <span class="token variable">$url2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改别的源的话直接再打一遍就会覆盖掉。</p><ul><li>查看效果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip config list
global.index-url<span class="token operator">=</span><span class="token string">&#39;https://mirrors.bfsu.edu.cn/pypi/web/simple&#39;</span>
install.trusted-host<span class="token operator">=</span><span class="token string">&#39;https://mirrors.bfsu.edu.cn&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip config <span class="token builtin class-name">unset</span> global.index-url 
Writing to ~/.config/pip/pip.conf

<span class="token comment"># 就少了[global]的index-url</span>
$ <span class="token function">cat</span> ~/.config/pip/pip.conf
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
trusted-host <span class="token operator">=</span> https://mirrors.bfsu.edu.cn

<span class="token comment"># 再删install的trusted-host</span>
$ pip config <span class="token builtin class-name">unset</span> install.trusted-host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-1-2-手动" tabindex="-1"><a class="header-anchor" href="#_1-1-1-2-手动" aria-hidden="true">#</a> 1.1.1.2. 手动</h4><p>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ vim ~/.config/pip/pip.conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Linux下</p></blockquote><p>修改文件<code>~/.config/pip/pip.conf</code></p><blockquote><p>windows下</p></blockquote><p>修改文件<code>C:/Users/Admin/AppData/Roaming/pip/pip.ini</code></p><h3 id="_1-1-2-临时换源" tabindex="-1"><a class="header-anchor" href="#_1-1-2-临时换源" aria-hidden="true">#</a> 1.1.2. 临时换源</h3><p>可以在使用pip的时候加参数<code>-i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com</code>，其中<code>-i</code>(<code>--index-url</code>)表示换源，<code>--trusted-host</code>表示信任源。不然会有warning，</p><p><img src="`+o+`" alt="20200602155038752"></p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> pyspider <span class="token parameter variable">-i</span> <span class="token variable">$url1</span> --trusted-host <span class="token variable">$url2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2-命令" tabindex="-1"><a class="header-anchor" href="#_1-2-命令" aria-hidden="true">#</a> 1.2. 命令</h2><h3 id="_1-2-1-常用" tabindex="-1"><a class="header-anchor" href="#_1-2-1-常用" aria-hidden="true">#</a> 1.2.1. 常用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印到控制台</span>
$ pip list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> SomePackage            <span class="token comment"># latest version</span>
pip <span class="token function">install</span> <span class="token assign-left variable">SomePackage</span><span class="token operator">==</span><span class="token number">1.0</span>.4     <span class="token comment"># specific version</span>
pip <span class="token function">install</span> SomePackage<span class="token operator">&gt;=</span><span class="token number">1.0</span>.4     <span class="token comment"># minimum version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 离线包</span>
pip <span class="token function">install</span> xxx.whl

<span class="token comment"># 当下载老网络中断，就可以直接去下whl，https://download.pytorch.org/whl/cu121/torch-2.1.2%2Bcu121-cp38-cp38-win_amd64.whl</span>
<span class="token punctuation">(</span>py3d<span class="token punctuation">)</span> PS D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>pytorch3d<span class="token operator">&gt;</span> pip <span class="token function">install</span> torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
Looking <span class="token keyword">in</span> indexes: https://download.pytorch.org/whl/cu121
Collecting torch
  Downloading https://download.pytorch.org/whl/cu121/torch-2.1.2%2Bcu121-cp38-cp38-win_amd64.whl <span class="token punctuation">(</span><span class="token number">2474.0</span> MB<span class="token punctuation">)</span>
     ━━━━━━━╺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <span class="token number">0.5</span>/2.5 GB <span class="token number">4.5</span> MB/s eta <span class="token number">0</span>:07:29
ERROR: Exception:
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 超时</span>
--default-timeout<span class="token operator">=</span><span class="token number">10</span>

<span class="token comment"># 更新包</span>
-U, <span class="token parameter variable">--upgrade</span>
<span class="token comment"># 更新pip</span>
pip <span class="token function">install</span> <span class="token parameter variable">-U</span> pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出到文件中</span>
$ pip freeze <span class="token operator">&gt;</span> requirements.txt

<span class="token comment"># 安装文件中的包列表</span>
<span class="token comment"># -r, --requirement &lt;file&gt;</span>
$ pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirement.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-2-git包" tabindex="-1"><a class="header-anchor" href="#_1-2-2-git包" aria-hidden="true">#</a> 1.2.2. git包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-e</span> git+https://github.com/openai/CLIP.git@main<span class="token comment">#egg=clip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-e</code>:</p><ul><li>会在当前目录下创建<code>src/clip</code>。也就是说，会下载到<code>src</code>文件夹中（所以不要用<code>src</code>作为代码文件夹）。<code>clip</code>是根据<code>#egg=clip</code>得到的。<code>#egg=clip</code> 这个随便起，报错会告诉你真正叫做什么名字。</li><li><code>-e</code>会当前项目安装到python环境中，会使用<code>src/clip/setup.py</code>来安装<code>clip</code>包。</li></ul><p>没有<code>-e</code>也行，就是不会显示创建<code>src/clip</code></p><p>PS：</p><ol><li>不加<code>.git</code>下载不下来</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-e</span> git+https://github.com/openai/CLIP@main<span class="token comment">#egg=clip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>如果实在不行，可以分解开来</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/openai/CLIP.git
<span class="token builtin class-name">cd</span> src/clip
pip <span class="token function">install</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),m=n("code",null,"pip install .",-1),v=n("code",null,"python setup.py install",-1);function b(h,g){const a=d("RouterLink");return i(),l("div",null,[u,n("p",null,[s("最后一句 "),m,s(" 可以替换为"),p(a,{to:"/virtual%20environment/pip%E6%89%93%E5%8C%85.html"},{default:t(()=>[s("手动打包")]),_:1}),s("提到的 "),v,s("。")])])}const f=e(r,[["render",b],["__file","pip.html.vue"]]);export{f as default};
