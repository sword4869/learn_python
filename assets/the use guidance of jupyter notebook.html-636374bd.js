import{_ as e,V as n,W as a,X as i}from"./framework-48406333.js";const o={},t=i(`<ul><li><a href="#1-notebook">1. notebook</a><ul><li><a href="#11-jupyter">1.1. jupyter</a><ul><li><a href="#111-%E5%A6%82%E4%BD%95%E5%9C%A8-jupyter-notebook-%E4%B8%AD%E5%88%87%E6%8D%A2-conda-%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83">1.1.1. 如何在 Jupyter Notebook 中切换 conda 虚拟环境？</a></li><li><a href="#112-%E6%8F%92%E4%BB%B6">1.1.2. 插件</a></li></ul></li><li><a href="#12-vscode">1.2. VSCode</a><ul><li><a href="#121-%E6%A0%BC%E5%BC%8F%E5%8C%96">1.2.1. 格式化</a></li><li><a href="#122-%E5%BF%AB%E6%8D%B7%E9%94%AE">1.2.2. 快捷键</a></li></ul></li><li><a href="#13-%E9%97%AE%E9%A2%98">1.3. 问题</a><ul><li><a href="#131-%E6%8F%90%E7%A4%BA">1.3.1. 提示</a></li><li><a href="#132-%E8%BD%AC%E6%8D%A2markdown">1.3.2. 转换markdown</a></li></ul></li></ul></li></ul><h1 id="_1-notebook" tabindex="-1"><a class="header-anchor" href="#_1-notebook" aria-hidden="true">#</a> 1. notebook</h1><h2 id="_1-1-jupyter" tabindex="-1"><a class="header-anchor" href="#_1-1-jupyter" aria-hidden="true">#</a> 1.1. jupyter</h2><h3 id="_1-1-1-如何在-jupyter-notebook-中切换-conda-虚拟环境" tabindex="-1"><a class="header-anchor" href="#_1-1-1-如何在-jupyter-notebook-中切换-conda-虚拟环境" aria-hidden="true">#</a> 1.1.1. 如何在 Jupyter Notebook 中切换 conda 虚拟环境？</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token parameter variable">-n</span> myenv ipykernel
conda <span class="token function">install</span> <span class="token parameter variable">-n</span> myenv nb_conda_kernels
conda activate myenv    <span class="token comment"># this is the environment for your project and code</span>
jupyter notebook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好后，打开 jupyter notebook 就会显示所有的 conda 环境啦，点击随意切换。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/a87689a7f4efa74318f3882edba5b084.png" alt=""></p><h3 id="_1-1-2-插件" tabindex="-1"><a class="header-anchor" href="#_1-1-2-插件" aria-hidden="true">#</a> 1.1.2. 插件</h3><p>conda 安的不行，就出来三个插件，用pip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda activate myenv

pip <span class="token function">install</span> jupyter_contrib_nbextensions

jupyter contrib nbextension <span class="token function">install</span>

pip <span class="token function">install</span> jupyter_nbextensions_configurator

jupyter nbextensions_configurator <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Autopep8：轻轻一击就能获得简洁代码</p><p>Autoscroll：限制输出空间</p><p>Codefolding: 折叠函数、if、for……</p><p>Collapsible Headings：折叠markdown title</p><p>ExecuteTime：执行时间</p><p>Go to Current Running Cells</p><p>Hide Header， Hide input，Hide input all</p><p>Hinterland：提示补全</p><p>Live Markdown Preview</p><p>Table of Contents (2)： 目录导航</p><p>隐藏代码输入：隐藏过程，展示结果</p><p>ExecuteTime：显示单元格的耗时</p><p>variable inspector：跟踪你的工作空间</p><h2 id="_1-2-vscode" tabindex="-1"><a class="header-anchor" href="#_1-2-vscode" aria-hidden="true">#</a> 1.2. VSCode</h2><h3 id="_1-2-1-格式化" tabindex="-1"><a class="header-anchor" href="#_1-2-1-格式化" aria-hidden="true">#</a> 1.2.1. 格式化</h3><p>选了右上角的conda环境, 提示 <code>Formatter yapf is not installed. Install?</code> <code>There is no Pip installer available in the selected environment.</code></p><p>其实, jupyter noterbook 使用格式化程序时用的还是 系统python环境.</p><p>你得 ctrl+shift+p, <code>Python: Select Interpreter</code>, 选择你的conda环境, 这才能格式化.</p><h3 id="_1-2-2-快捷键" tabindex="-1"><a class="header-anchor" href="#_1-2-2-快捷键" aria-hidden="true">#</a> 1.2.2. 快捷键</h3><ul><li><p>Enter : 转入编辑模式</p></li><li><p>运行</p><p>Shift-Enter : 运行本单元，选中或插入（最后一个Cell的时候）下个单元</p><p>Ctrl-Enter : 运行本单元</p><p>Alt-Enter : 运行本单元，在其下插入新单元</p></li><li><p>Code/Markdown</p><p>Y : 单元转入代码状态</p><p>M :单元转入markdown状态 （目前尚不支持R 原生状态）</p></li><li><p>Move cursor</p><p>Up : 选中上方单元</p><p>K : 选中上方单元</p><p>Down : 选中下方单元</p><p>J : 选中下方单元</p><p>C: 复制单元</p><p>V: 粘贴单元</p><p>X: 剪贴单元</p><p>Z: 恢复删除的单元</p></li><li><p>Manage cell</p><p>A : 在上方插入新单元</p><p>B : 在下方插入新单元</p><p>D,D : 删除选中的单元</p><p>Alt + ↑ / ↓ :向上/向下移动行</p></li><li><p>Coding</p><p>Ctrl + D: 选择一个/多个（相同）词</p><p>Ctrl + / : 切换行注释</p></li></ul><h2 id="_1-3-问题" tabindex="-1"><a class="header-anchor" href="#_1-3-问题" aria-hidden="true">#</a> 1.3. 问题</h2><h3 id="_1-3-1-提示" tabindex="-1"><a class="header-anchor" href="#_1-3-1-提示" aria-hidden="true">#</a> 1.3.1. 提示</h3><p>jupyter中代码提示也太慢了、太不全了吧，安装了插件Hinterland也不行，简直就是脱离了编译器写代码的感觉，这让我自己写，写不出来啊。</p><p>还是得vscode的notebook。</p><p>但是vscode没有目录啊，凑活吧。</p><h3 id="_1-3-2-转换markdown" tabindex="-1"><a class="header-anchor" href="#_1-3-2-转换markdown" aria-hidden="true">#</a> 1.3.2. 转换markdown</h3><p>先用jupyter写，写好了变成markdown</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install jupyter_contrib_nbextensions
jupyter nbconvert <span class="token operator">-</span><span class="token operator">-</span>to markdown source<span class="token punctuation">.</span>ipynb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ModuleNotFoundError: No module named &#39;notebook.base&#39;</p></blockquote><p>I ran into this yesterday. It appears that in notebook v 7.0 (published two days ago) they removed the base module: https://github.com/jupyter/notebook/tree/dc2082c84c3f29ecf31f3a05e9b51cf401d5dddd/notebook</p><p>You can force notebook to version 6.5 and the configurator will continue to work.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> notebook<span class="token operator">&lt;</span><span class="token number">7.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),s=[t];function r(p,l){return n(),a("div",null,s)}const c=e(o,[["render",r],["__file","the use guidance of jupyter notebook.html.vue"]]);export{c as default};
