import{_ as o,V as l,W as c,X as n,Y as s,$ as e,a0 as d,Z as a,D as t}from"./framework-b4b62eb1.js";const u="/learn_python/assets/image-2-80c6b083.png",r="/learn_python/assets/image-1-17d2a4b3.png",v={},m=a(`<ul><li><a href="#1-setuptools">1. setuptools</a><ul><li><a href="#11-%E5%8C%85%E4%BF%A1%E6%81%AF">1.1. 包信息</a><ul><li><a href="#111-%E5%8C%85%E5%90%8D">1.1.1. 包名</a></li><li><a href="#112-%E4%B8%BB%E8%A6%81%E4%BF%A1%E6%81%AF">1.1.2. 主要信息</a></li></ul></li><li><a href="#12-%E5%8C%85%E4%BD%8D%E7%BD%AE">1.2. 包位置</a><ul><li><a href="#121-packages">1.2.1. packages</a><ul><li><a href="#1211-%E4%B8%80%E7%BA%A7%E5%8C%85">1.2.1.1. 一级包</a></li><li><a href="#1212-%E5%8E%9F%E7%90%86">1.2.1.2. 原理</a></li><li><a href="#1213-%E4%B8%A4%E7%A7%8D%E6%A0%BC%E5%BC%8F">1.2.1.3. 两种格式</a><ul><li><a href="#12131-src-layout">1.2.1.3.1. src-layout</a></li><li><a href="#12132-flat-layout">1.2.1.3.2. flat-layout</a></li></ul></li></ul></li><li><a href="#122-py_modules">1.2.2. py_modules</a></li><li><a href="#123-automatic-discovery">1.2.3. Automatic discovery</a></li></ul></li><li><a href="#13-python%E7%89%88%E6%9C%AC">1.3. python版本</a></li><li><a href="#14-%E4%BE%9D%E8%B5%96">1.4. 依赖</a></li><li><a href="#15-%E5%8F%AF%E6%89%A7%E8%A1%8C%E8%84%9A%E6%9C%AC">1.5. 可执行脚本</a></li><li><a href="#16-%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90">1.6. 文件资源</a><ul><li><a href="#161-%E6%89%8B%E5%8A%A8%E6%8C%87%E5%AE%9A-package_data">1.6.1. 手动指定 package_data</a></li><li><a href="#162-%E6%9C%80%E6%B2%A1%E7%94%A8-include_package_data">1.6.2. 最没用 include_package_data</a></li><li><a href="#163-%E5%B7%B2%E5%BA%9F%E5%BC%83-data_files">1.6.3. 已废弃 data_files</a></li></ul></li><li><a href="#17-pypi%E5%8F%91%E5%B8%83">1.7. pypi发布</a></li></ul></li><li><a href="#2-pip-commands">2. pip Commands</a><ul><li><a href="#21-install">2.1. install</a><ul><li><a href="#211-install-in-development-mode">2.1.1. install in “development mode”</a></li><li><a href="#212-init%E6%96%87%E4%BB%B6%E5%92%8C-development-mode">2.1.2. init文件和 development mode</a></li></ul></li><li><a href="#22-build">2.2. build</a><ul><li><a href="#221-build-a-wheel">2.2.1. build a wheel</a></li><li><a href="#222-build-source-distribution-sdist">2.2.2. build source distribution (sdist)</a></li></ul></li></ul></li></ul><hr><h2 id="_1-setuptools" tabindex="-1"><a class="header-anchor" href="#_1-setuptools" aria-hidden="true">#</a> 1. setuptools</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># setuptools 已经被包含在 bulid 中，不用\`pip install --upgrade setuptools\`</span>
pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> setuptools <span class="token keyword">import</span> setup<span class="token punctuation">,</span> find_packages

setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&#39;markmove&#39;</span><span class="token punctuation">,</span>
    version<span class="token operator">=</span><span class="token string">&#39;0.0.1&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),k={href:"https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/#entry-points",target:"_blank",rel:"noopener noreferrer"},b=a(`<h3 id="_1-1-包信息" tabindex="-1"><a class="header-anchor" href="#_1-1-包信息" aria-hidden="true">#</a> 1.1. 包信息</h3><p>必选 <code>name</code> 和 <code>version</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&#39;markmove&#39;</span><span class="token punctuation">,</span>
    version<span class="token operator">=</span><span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">=</span><span class="token string">&#39;a pip package which is used to move markdown files&#39;</span><span class="token punctuation">,</span>
    long_description<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;README.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    long_description_content_type<span class="token operator">=</span><span class="token string">&quot;text/markdown&quot;</span><span class="token punctuation">,</span>
    author<span class="token operator">=</span><span class="token string">&quot;sword4869&quot;</span><span class="token punctuation">,</span>
    author_email<span class="token operator">=</span><span class="token string">&quot;xxx@qq.com&quot;</span><span class="token punctuation">,</span>
    url<span class="token operator">=</span><span class="token string">&#39;https://github.com/sword4869/markmove&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-1-包名" tabindex="-1"><a class="header-anchor" href="#_1-1-1-包名" aria-hidden="true">#</a> 1.1.1. 包名</h4><ul><li><code>name</code>(可以包含<code>_</code>,<code>-</code>) 是在<code>pip list</code>中显示的包名</li></ul><p>PS: 在<code>python -m module_name</code>和<code>import module_name</code>的包名<code>module_name</code>不可以包含<code>-</code>.</p><h4 id="_1-1-2-主要信息" tabindex="-1"><a class="header-anchor" href="#_1-1-2-主要信息" aria-hidden="true">#</a> 1.1.2. 主要信息</h4><ul><li><p><code>version</code> 是包版本</p></li><li><p><code>description</code> 是一个简短的，一句话的包的总结。</p></li><li><p><code>author</code> 和 <code>author_email</code>用于识别包的作者。</p></li><li><p><code>maintainer</code> 维护者 <code>maintainer_email</code> 维护者的电子邮件地址</p></li><li><p><code>long_description</code>是包的详细说明。这显示在Python Package Index的包详细信息包中。 <code>long_description_content_type</code>告诉索引什么类型的标记用于长描述。</p></li><li><p><code>keywords</code> 指定包关键字，用于Pypi网站检索。</p></li><li><p><code>classifiers</code>告诉pypi的信息（发布包用的）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Full list: https://pypi.python.org/pypi?%3Aaction=list_classifiers</span>
classifiers<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token comment"># 发展时期,常见的如下</span>
    <span class="token comment">#   3 - Alpha</span>
    <span class="token comment">#   4 - Beta</span>
    <span class="token comment">#   5 - Production/Stable</span>
    <span class="token string">&#39;Development Status :: 3 - Alpha&#39;</span><span class="token punctuation">,</span>

    <span class="token comment"># 开发的目标用户</span>
    <span class="token string">&#39;Intended Audience :: Developers&#39;</span><span class="token punctuation">,</span>

    <span class="token comment"># 属于什么类型</span>
    <span class="token string">&#39;Topic :: Software Development :: Build Tools&#39;</span><span class="token punctuation">,</span>

    <span class="token comment"># 许可证信息</span>
    <span class="token string">&#39;License :: OSI Approved :: MIT License&#39;</span><span class="token punctuation">,</span>

    <span class="token comment"># 目标 Python 版本</span>
    <span class="token string">&#39;License :: OSI Approved :: MIT License&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Programming Language :: Python&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Programming Language :: Python :: 3&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Programming Language :: Python :: 3.6&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Programming Language :: Python :: Implementation :: CPython&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Programming Language :: Python :: Implementation :: PyPy&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>license</code> 许可证信息</p></li><li><p><code>classifiers</code> 指定包所属分类</p></li><li><p><code>url</code>是项目主页的URL。对于许多项目，这只是一个指向GitHub，GitLab，Bitbucket或类似代码托管服务的链接。</p></li><li><p><code>download_url</code> 指向下载链接</p></li><li><p><code>platforms</code> 指定包所适用操作系统</p></li></ul><p>其他</p><ul><li><code>cmdclass</code> 扩展命令</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> setuptools <span class="token keyword">import</span> Command

<span class="token keyword">class</span> <span class="token class-name">UploadCommand</span><span class="token punctuation">(</span>Command<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Support setup.py upload.&quot;&quot;&quot;</span>

    description <span class="token operator">=</span> <span class="token string">&#39;Build and publish the package.&#39;</span>
    user_options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">status</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Prints things in bold.&quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[1m{0}\\033[0m&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">initialize_options</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">finalize_options</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>status<span class="token punctuation">(</span><span class="token string">&#39;Removing previous builds…&#39;</span><span class="token punctuation">)</span>
            rmtree<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>here<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> OSError<span class="token punctuation">:</span>
            <span class="token keyword">pass</span>

        self<span class="token punctuation">.</span>status<span class="token punctuation">(</span><span class="token string">&#39;Building Source and Wheel (universal) distribution…&#39;</span><span class="token punctuation">)</span>
        os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;{0} setup.py sdist bdist_wheel --universal&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>executable<span class="token punctuation">)</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>status<span class="token punctuation">(</span><span class="token string">&#39;Uploading the package to PyPI via Twine…&#39;</span><span class="token punctuation">)</span>
        os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;twine upload dist/*&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>status<span class="token punctuation">(</span><span class="token string">&#39;Pushing git tags…&#39;</span><span class="token punctuation">)</span>
        os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;git tag v{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>about<span class="token punctuation">[</span><span class="token string">&#39;__version__&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;git push --tags&#39;</span><span class="token punctuation">)</span>

        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

setup<span class="token punctuation">(</span>
    cmdclass<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&#39;upload&#39;</span><span class="token punctuation">:</span> UploadCommand<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ext_modules</code> 扩展模块列表，用于构建 C 和 C++ 扩展扩展包</li><li><code>scripts</code> 脚本列表，会被安装到操作系统相关路径 PATH 路径下</li></ul><h3 id="_1-2-包位置" tabindex="-1"><a class="header-anchor" href="#_1-2-包位置" aria-hidden="true">#</a> 1.2. 包位置</h3><h4 id="_1-2-1-packages" tabindex="-1"><a class="header-anchor" href="#_1-2-1-packages" aria-hidden="true">#</a> 1.2.1. packages</h4><h5 id="_1-2-1-1-一级包" tabindex="-1"><a class="header-anchor" href="#_1-2-1-1-一级包" aria-hidden="true">#</a> 1.2.1.1. 一级包</h5><p>有几个一级packages安装几个一级包。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>└── src
    ├── markmove
    │   ├── __init__<span class="token punctuation">.</span>py
    │   └── main<span class="token punctuation">.</span>py
    └── mypkg
        ├── __init__<span class="token punctuation">.</span>py
        ├── q<span class="token punctuation">.</span>py
        ├── subpkg1
            ├── __init__<span class="token punctuation">.</span>py
        └── subpkg2
            ├── __init__<span class="token punctuation">.</span>py

<span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;markmove&#39;, &#39;mypkg&#39;, &#39;mypkg.subpkg1&#39;, &#39;mypkg.subpkg2&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> markmove
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> mypkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-1-2-原理" tabindex="-1"><a class="header-anchor" href="#_1-2-1-2-原理" aria-hidden="true">#</a> 1.2.1.2. 原理</h5><blockquote><p><code>packages=find_packages()</code> 或者 <code>find_namespace_packages()</code></p></blockquote><p><code>find_packages()</code> 忽略不带<code>__init__.py</code>的包，而 <code>find_namespace_packages()</code> 不忽略不带<code>__init__.py</code>的包。</p><blockquote><p><code>find_packages</code> 的default值</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># All keyword arguments below are optional:</span>
<span class="token comment"># </span>
packages<span class="token operator">=</span>find_packages<span class="token punctuation">(</span>
    where<span class="token operator">=</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span>          <span class="token comment"># 查找的根目录</span>
    include<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
    exclude<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>where</p></blockquote><p>e.g.1 因为 <code>src</code> 没有 <code>__init__.py</code> 而不识别，更别提子包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>project_root_directory
└── src/
    └── mypkg/
        ├── __init__.py
        ├── subpkg1/
        │   ├── __init__.py
            ├── subsubpkg1/
            │   ├── __init__.py
                ├── subpkg1/
        ├── subpkg2/
        │   ├── __init__.py

print(find_packages())
# [] 啥有没找到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e.g.2 识别 <code>mypkg</code>，及其子包</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>project_root_directory
└── src<span class="token operator">/</span>
    └── mypkg<span class="token operator">/</span>
        ├── __init__<span class="token punctuation">.</span>py
        ├── subpkg1<span class="token operator">/</span>
        │   ├── __init__<span class="token punctuation">.</span>py
            ├── subsubpkg1<span class="token operator">/</span>
            │   ├── __init__<span class="token punctuation">.</span>py

<span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;mypkg&#39;, &#39;mypkg.subpkg1&#39;, &#39;mypkg.subpkg1.subsubpkg1&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>include：只留，相当于 where 且 include</p></blockquote><p>所以，<code>find_packages(include=[&#39;xxx&#39;])</code>中，如果<code>xxx</code>包不带<code>__init__.py</code>，那这样写也找不到。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> include<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;mypkg.subpkg1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;mypkg.subpkg1&#39;]  </span>
<span class="token comment"># 注意，这样写是没有子包的 &#39;mypkg.subpkg1.subsubpkg1&#39;</span>

<span class="token comment"># mypkg.subpkg1*</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> include<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;mypkg.subpkg1*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;mypkg.subpkg1&#39;, &#39;mypkg.subpkg1.subsubpkg1&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>exclude: where 后删除 exclude</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> exclude<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;mypkg.subpkg1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [mypkg&#39;, &#39;mypkg.subpkg2&#39;, &#39;mypkg.subpkg1.subsubpkg1&#39;]</span>
<span class="token comment"># 注意，这样写仅仅删除父包，其子包并不删除</span>

<span class="token comment"># mypkg.subpkg1*</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_packages<span class="token punctuation">(</span>where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> exclude<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;mypkg.subpkg1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mypkg.subpkg1.*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;mypkg&#39;, &#39;mypkg.subpkg2&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-1-3-两种格式" tabindex="-1"><a class="header-anchor" href="#_1-2-1-3-两种格式" aria-hidden="true">#</a> 1.2.1.3. 两种格式</h5><h6 id="_1-2-1-3-1-src-layout" tabindex="-1"><a class="header-anchor" href="#_1-2-1-3-1-src-layout" aria-hidden="true">#</a> 1.2.1.3.1. src-layout</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>project_root_directory
├── setup.py        <span class="token comment"># and/or setup.cfg, pyproject.toml</span>
├── docs
└── src/            <span class="token comment"># 非包</span>
    └── mypkg/
        ├── __init__.py
        ├── data            <span class="token comment"># 文件资源在包里，不在外面</span>
        │   └── data1.txt
        ├── module.py
        ├── subpkg1/
        │   ├── __init__.py
        │   ├── <span class="token punctuation">..</span>.
        │   └── module1.py
        └── subpkg2/
            ├── __init__.py
            ├── <span class="token punctuation">..</span>.
            └── module2.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>setup<span class="token punctuation">(</span>
    packages<span class="token operator">=</span>find_packages<span class="token punctuation">(</span>
        where<span class="token operator">=</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    package_dir<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package_dir</code> 表示相关代码是包含在特定目录中（而不是直接放在项目的根目录下）</p><p>不用<code>package_dir</code>会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Processing d:\\git\\markmove
  Preparing metadata (setup.py) ... error
  error: subprocess-exited-with-error

  × python setup.py egg_info did not run successfully.
  │ exit code: 1
  ╰─&gt; [9 lines of output]
      running egg_info
      creating C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info
      writing C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\PKG-INFO
      writing dependency_links to C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\dependency_links.txt
      writing entry points to C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\entry_points.txt
      writing requirements to C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\requires.txt
      writing top-level names to C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\top_level.txt
      writing manifest file &#39;C:\\Users\\lab\\AppData\\Local\\Temp\\pip-pip-egg-info-7wpmdp4n\\markmove.egg-info\\SOURCES.txt&#39;
      error: package directory &#39;markmove&#39; does not exist
      [end of output]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_1-2-1-3-2-flat-layout" tabindex="-1"><a class="header-anchor" href="#_1-2-1-3-2-flat-layout" aria-hidden="true">#</a> 1.2.1.3.2. flat-layout</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>project_root_directory
├── setup.py        # and/or setup.cfg, pyproject.toml
├── docs            # 不是包
└── mypkg/          # 是包
    ├── __init__.py
    ├── data            # 文件资源在包里，不在外面
    │   └── data1.txt
    ├── module.py
    ├── subpkg1/
    │   ├── __init__.py
    │   ├── ...
    │   └── module1.py
    └── subpkg2/
        ├── __init__.py
        ├── ...
        └── module2.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>setup<span class="token punctuation">(</span>
    packages<span class="token operator">=</span>find_packages<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-py-modules" tabindex="-1"><a class="header-anchor" href="#_1-2-2-py-modules" aria-hidden="true">#</a> 1.2.2. py_modules</h4><p><code>py_modules=[&quot;six&quot;]</code>: 意思是 <code>six.py</code></p><p>If your project contains any single-file Python modules that aren’t part of a package, set <code>py_modules</code> to a list of the names of the modules (minus the <code>.py</code> extension) in order to make Setuptools aware of them.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>setup<span class="token punctuation">(</span>
    packages<span class="token operator">=</span>find_packages<span class="token punctuation">(</span>exclude<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;tests*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    py_modules<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;clip&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-automatic-discovery" tabindex="-1"><a class="header-anchor" href="#_1-2-3-automatic-discovery" aria-hidden="true">#</a> 1.2.3. Automatic discovery</h4><p>Automatic discovery will only be enabled if you don’t provide any configuration for <code>packages</code> and <code>py_modules</code>. If at least one of them is explicitly set, automatic discovery will not take place. Note: specifying <code>ext_modules</code> might also prevent auto-discover from taking place</p><p>适合 src-layout, 不适合 flat-layout</p><blockquote><p>src-layout: Automatic discovery 会自动进入 src 寻找包。无须担心 <code>package_dir</code>。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>project_root_directory
├── setup<span class="token punctuation">.</span>py        <span class="token comment"># and/or setup.cfg, pyproject.toml</span>
├── docs
├── images
└── src<span class="token operator">/</span>            <span class="token comment"># Automatic discovery 会自动进入</span>
    └── mypkg<span class="token operator">/</span>
        ├── __init__<span class="token punctuation">.</span>py
        ├── data            <span class="token comment"># 文件资源在包里，不在外面</span>
        │   └── data1<span class="token punctuation">.</span>txt
        ├── module<span class="token punctuation">.</span>py
        ├── subpkg1<span class="token operator">/</span>
        │   ├── __init__<span class="token punctuation">.</span>py
        │   ├── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        │   └── module1<span class="token punctuation">.</span>py
        └── subpkg2<span class="token operator">/</span>
            ├── __init__<span class="token punctuation">.</span>py
            ├── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            └── module2<span class="token punctuation">.</span>py

<span class="token keyword">from</span> setuptools <span class="token keyword">import</span> find_packages<span class="token punctuation">,</span> setup

setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&#39;markmove&#39;</span><span class="token punctuation">,</span>
    version<span class="token operator">=</span><span class="token string">&#39;0.0.3&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment"># 效果一样</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> markmove
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> mypkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在flat-layout下，Automatic discovery根据屏蔽词而屏蔽某些文件夹和py文件，但是有局限而报错。</p></blockquote><p>Reserved package names: <code>FlatLayoutPackageFinder.DEFAULT_EXCLUDE: Tuple[str, ...] = (&#39;ci&#39;, &#39;ci.*&#39;, &#39;bin&#39;, &#39;bin.*&#39;, &#39;debian&#39;, &#39;debian.*&#39;, &#39;doc&#39;, &#39;doc.*&#39;, &#39;docs&#39;, &#39;docs.*&#39;, &#39;documentation&#39;, &#39;documentation.*&#39;, &#39;manpages&#39;, &#39;manpages.*&#39;, &#39;news&#39;, &#39;news.*&#39;, &#39;newsfragments&#39;, &#39;newsfragments.*&#39;, &#39;changelog&#39;, &#39;changelog.*&#39;, &#39;test&#39;, &#39;test.*&#39;, &#39;tests&#39;, &#39;tests.*&#39;, &#39;unit_test&#39;, &#39;unit_test.*&#39;, &#39;unit_tests&#39;, &#39;unit_tests.*&#39;, &#39;example&#39;, &#39;example.*&#39;, &#39;examples&#39;, &#39;examples.*&#39;, &#39;scripts&#39;, &#39;scripts.*&#39;, &#39;tools&#39;, &#39;tools.*&#39;, &#39;util&#39;, &#39;util.*&#39;, &#39;utils&#39;, &#39;utils.*&#39;, &#39;python&#39;, &#39;python.*&#39;, &#39;build&#39;, &#39;build.*&#39;, &#39;dist&#39;, &#39;dist.*&#39;, &#39;venv&#39;, &#39;venv.*&#39;, &#39;env&#39;, &#39;env.*&#39;, &#39;requirements&#39;, &#39;requirements.*&#39;, &#39;tasks&#39;, &#39;tasks.*&#39;, &#39;fabfile&#39;, &#39;fabfile.*&#39;, &#39;site_scons&#39;, &#39;site_scons.*&#39;, &#39;benchmark&#39;, &#39;benchmark.*&#39;, &#39;benchmarks&#39;, &#39;benchmarks.*&#39;, &#39;exercise&#39;, &#39;exercise.*&#39;, &#39;exercises&#39;, &#39;exercises.*&#39;, &#39;htmlcov&#39;, &#39;htmlcov.*&#39;, &#39;[._]*&#39;, &#39;[._]*.*&#39;)</code></p><p>Reserved top-level module names: <code>FlatLayoutModuleFinder.DEFAULT_EXCLUDE: Tuple[str, ...] = (&#39;setup&#39;, &#39;conftest&#39;, &#39;test&#39;, &#39;tests&#39;, &#39;example&#39;, &#39;examples&#39;, &#39;build&#39;, &#39;toxfile&#39;, &#39;noxfile&#39;, &#39;pavement&#39;, &#39;dodo&#39;, &#39;tasks&#39;, &#39;fabfile&#39;, &#39;[Ss][Cc]onstruct&#39;, &#39;conanfile&#39;, &#39;manage&#39;, &#39;benchmark&#39;, &#39;benchmarks&#39;, &#39;exercise&#39;, &#39;exercises&#39;, &#39;[._]*&#39;)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>project_root_directory
├── setup<span class="token punctuation">.</span>py        <span class="token comment"># and/or setup.cfg, pyproject.toml</span>
├── docs            <span class="token comment"># Automatic discovery 根据屏蔽词屏蔽docs</span>
├── images          <span class="token comment"># Automatic discovery 的屏蔽词没有这个</span>
└── mypkg<span class="token operator">/</span>
    ├── __init__<span class="token punctuation">.</span>py
    ├── data            <span class="token comment"># 文件资源在包里，不在外面</span>
    │   └── data1<span class="token punctuation">.</span>txt
    ├── module<span class="token punctuation">.</span>py
    ├── subpkg1<span class="token operator">/</span>
    │   ├── __init__<span class="token punctuation">.</span>py
    │   ├── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    │   └── module1<span class="token punctuation">.</span>py
    └── subpkg2<span class="token operator">/</span>
        ├── __init__<span class="token punctuation">.</span>py
        ├── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        └── module2<span class="token punctuation">.</span>py

<span class="token keyword">from</span> setuptools <span class="token keyword">import</span> find_packages<span class="token punctuation">,</span> setup

setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&#39;markmove&#39;</span><span class="token punctuation">,</span>
    version<span class="token operator">=</span><span class="token string">&#39;0.0.3&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
Processing d:\\git\\mytree
  Preparing metadata (setup.py) ... error
  error: subprocess-exited-with-error

  × python setup.py egg_info did not run successfully.
  │ exit code: 1
  ╰─&gt; [14 lines of output]
      error: Multiple top-level packages discovered in a flat-layout: [&#39;images&#39;, &#39;mytree&#39;].
     
      To avoid accidental inclusion of unwanted files or directories,
      setuptools will not proceed with this build.
     
      If you are trying to create a single distribution with multiple packages
      on purpose, you should not rely on automatic discovery.
      Instead, consider the following options:
     
      1. set up custom discovery (\`find\` directive with \`include\` or \`exclude\`)
      2. use a \`src-layout\`
      3. explicitly set \`py_modules\` or \`packages\` with a list of names
     
      To find more information, look for &quot;package discovery&quot; on setuptools docs.
      [end of output]
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-python版本" tabindex="-1"><a class="header-anchor" href="#_1-3-python版本" aria-hidden="true">#</a> 1.3. python版本</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    python_requires<span class="token operator">=</span><span class="token string">&quot;&gt;=3.8&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-依赖" tabindex="-1"><a class="header-anchor" href="#_1-4-依赖" aria-hidden="true">#</a> 1.4. 依赖</h3>`,59),g=a(`<p><code>install_requires</code>：当前模块依赖哪些包，若环境中没有，则会自动下载安装</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    install_requires<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&#39;torch&#39;</span><span class="token punctuation">,</span>            
        <span class="token string">&#39;numpy==1.25.1&#39;</span><span class="token punctuation">,</span>    
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
        <span class="token string">&#39;requests[security, socks] &gt;= 2.18.4&#39;</span><span class="token punctuation">,</span>
        <span class="token comment"># 指定python版本</span>
        <span class="token string">&quot;enum34;python_version&lt;&#39;3.4&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment"># 指定平台</span>
        <span class="token string">&#39;pywin32 &gt;= 1.0;platform_system==&#39;</span>Windows<span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token comment"># git</span>
        <span class="token string">&quot;Package-A @ git+https://example.net/package-a.git&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("li",null,[n("p",null,[n("code",null,"'requests[security, socks] >= 2.18.4'"),s("，这是包含了额外的可选依赖"),n("code",null,"extras_require"),s("的形式。")]),n("ul",null,[n("li",null,[s("正常安装requests会自动安装它的"),n("code",null,"install_requires"),s("中指定的依赖，而不会安装security和socks这两组依赖。")]),n("li",null,[s("这两组依赖是定义在它的"),n("code",null,"extras_require"),s("中。 这种形式，用在深度使用某些库时。")])])],-1),_=a(`<li><p><code>setup_requires</code> setup.py 本身要依赖的包，这通常是为一些setuptools的插件准备的配置，这里列出的包，不会自动安装。</p></li><li><p><code>tests_require</code> 仅在测试时需要使用的依赖，在正常发布的代码中是没有用的。在执行<code>python setup.py test</code>时，自动安装</p></li><li><p><code>dependency_links</code> 用于安装<code>setup_requires</code>或<code>tests_require</code>里的软件包。这些信息会写入egg的 metadata 信息中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    dependency_links<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;http://example2.com/p/foobar-1.0.tar.gz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>extras_require</code> 不会在安装模块时会自动安装依赖包，这里仅表示该模块会依赖这些包。但是这些包通常不会使用到，只有当你深度使用模块时，才会用到，这里需要你手动安装</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    extras_require<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&#39;PDF&#39;</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&quot;ReportLab&gt;=1.2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;RXP&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;reST&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;docutils&gt;=0.3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4),y=a(`<p>自动提取 requirements.txt的内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> setuptools <span class="token keyword">import</span> setup
<span class="token keyword">import</span> os
<span class="token keyword">import</span> pkg_resources

setup<span class="token punctuation">(</span>
    install_requires<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token builtin">str</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token keyword">for</span> r <span class="token keyword">in</span> pkg_resources<span class="token punctuation">.</span>parse_requirements<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;requirements.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    extras_require<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;pytest&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-可执行脚本" tabindex="-1"><a class="header-anchor" href="#_1-5-可执行脚本" aria-hidden="true">#</a> 1.5. 可执行脚本</h3><p>比<code>python -m module_name</code>（写了<code>__main__.py</code>）还要简洁：直接输入<code>cli-name</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    entry_points<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&#39;console_scripts&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;cli-name = mypkg.mymodule:some_func&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>syntax：</p><ul><li><p><code>cli-name</code>:</p><ul><li>安装后会生成一个可执行文件：<code>D:\\miniconda\\envs\\test\\Scripts\\cli-name.exe</code></li><li>所以可以直接在命令行执行<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>任意位置 <span class="token variable">$cli</span>-name
hello, this is the print text of hello<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">function</span> <span class="token keyword">in</span> module_name/m.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>mypkg.mymodule:some_func</code> 相当于 <code>from mypkg.mymodule import some_func</code></p><p><code>mypkg:some_func</code> 相当于 <code>from mypkg import some_func</code>(定义在<code>__init__.py</code>中)</p></li></ul>`,7),f=n("code",null,"console_scripts",-1),x={href:"https://setuptools.pypa.io/en/latest/userguide/entry_point.html#gui-scripts",target:"_blank",rel:"noopener noreferrer"},w=a('<h3 id="_1-6-文件资源" tabindex="-1"><a class="header-anchor" href="#_1-6-文件资源" aria-hidden="true">#</a> 1.6. 文件资源</h3><h4 id="_1-6-1-手动指定-package-data" tabindex="-1"><a class="header-anchor" href="#_1-6-1-手动指定-package-data" aria-hidden="true">#</a> 1.6.1. 手动指定 package_data</h4><ul><li><p><code>package_data={&#39;sample&#39;: [&#39;package_data.dat&#39;],}</code> 包含<strong>在包里面的</strong>数据文件，会被复制到包文件夹中。</p><p><code>sample</code>是包名，<code>&#39;package_data.dat&#39;</code>是文件相对于包文件夹的相对位置。</p></li><li><p><code>exclude_package_data={&quot;mypkg&quot;: [&quot;.gitattributes&quot;]}</code></p><p>The <code>exclude_package_data</code> option is a dictionary mapping package names to lists of wildcard patterns, just like the <code>package_data</code> option.</p><p>And, just as with that option, you can use the empty string key <code>&quot;&quot;</code> in <code>setup.py</code> to match all top-level packages.</p><p>Any files that match these patterns will be <em>excluded</em> from installation, even if they were listed in <code>package_data</code> or were included as a result of using <code>include_package_data</code>.</p></li></ul><p><img src="'+u+'" alt="Alt text"></p><h4 id="_1-6-2-最没用-include-package-data" tabindex="-1"><a class="header-anchor" href="#_1-6-2-最没用-include-package-data" aria-hidden="true">#</a> 1.6.2. 最没用 include_package_data</h4><p>自动扫描和加入在 <code>packages</code> 中的包里的文件资源。</p><p>前提是： <img src="'+r+`" alt="Alt text"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> setuptools <span class="token keyword">import</span> setup<span class="token punctuation">,</span> find_namespace_packages
setup<span class="token punctuation">(</span>
    packages<span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
    include_package_data<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也能配合用 <code>exclude_package_data</code>。</p><h4 id="_1-6-3-已废弃-data-files" tabindex="-1"><a class="header-anchor" href="#_1-6-3-已废弃-data-files" aria-hidden="true">#</a> 1.6.3. 已废弃 data_files</h4><p><code>data_files=[(&#39;my_data&#39;, [&#39;data/data_file&#39;])],</code></p><p><code>data_files</code> is <strong>deprecated</strong>. It does not work with wheels, so it should be avoided.</p><p>手动指定要包含在安装套装里面数据文件</p><h3 id="_1-7-pypi发布" tabindex="-1"><a class="header-anchor" href="#_1-7-pypi发布" aria-hidden="true">#</a> 1.7. pypi发布</h3>`,14),q={href:"https://pypi.org/account/register",target:"_blank",rel:"noopener noreferrer"},E=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> build
python <span class="token parameter variable">-m</span> build <span class="token parameter variable">--wheel</span> <span class="token builtin class-name">.</span>
pip <span class="token function">install</span> twine
twine upload dist/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-pip-commands" tabindex="-1"><a class="header-anchor" href="#_2-pip-commands" aria-hidden="true">#</a> 2. pip Commands</h2><blockquote><p><code>python setup.py install</code> 将被 <code>pip install</code> 取代</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># python setup.py install</span>
pip <span class="token function">install</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Old command</th><th>New command</th></tr></thead><tbody><tr><td><code>python setup.py install</code></td><td><code>pip install</code></td></tr><tr><td><code>python setup.py develop</code></td><td><code>pip install -e</code></td></tr><tr><td><code>python setup.py sdist</code> 源码</td><td><code>python -m build --sdist</code></td></tr><tr><td><code>python setup.py bdist_wheel</code> 轮子</td><td><code>python -m build --wheel</code></td></tr><tr><td><code>python setup.py test</code></td><td><code>pytest</code> (usually via tox or nox)</td></tr><tr><td><code>python setup.py upload</code></td><td><code>twine upload</code> (with twine)</td></tr><tr><td><code>python setup.py check</code></td><td><code>twine check</code> (this doesn&#39;t do all the same checks but it&#39;s a start)</td></tr><tr><td>Custom commands</td><td>tox and nox environments</td></tr></tbody></table><h3 id="_2-1-install" tabindex="-1"><a class="header-anchor" href="#_2-1-install" aria-hidden="true">#</a> 2.1. install</h3><h4 id="_2-1-1-install-in-development-mode" tabindex="-1"><a class="header-anchor" href="#_2-1-1-install-in-development-mode" aria-hidden="true">#</a> 2.1.1. install in “development mode”</h4><p><code>pip install</code> 将包复制一份安装到<code>envs\\test\\Lib\\site-packages</code>中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip list
Package         Version
--------------- -------
mytree          <span class="token number">0.0</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pip install -e</code> (<code>-e</code> is short for <code>--editabla</code>， 代表 “editable/development” mode)：不复制包，直接定位到当前工程处。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip list
Package        Version Editable project location
-------------- ------- ----------------------------------------
ConfigArgParse <span class="token number">1.7</span>
mytree         <span class="token number">0.0</span>.1   d:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>localtoolkit<span class="token punctuation">\\</span>linux_scripts<span class="token punctuation">\\</span>mytree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区别就是，当安装为可编辑<code>pip install -e</code>时，可以在不重新安装的情况下就地编辑项目，对Python源文件的更改将在下次启动解释器过程时反映出来。而<code>pip install</code>编辑后需要重新安装。</p><h4 id="_2-1-2-init文件和-development-mode" tabindex="-1"><a class="header-anchor" href="#_2-1-2-init文件和-development-mode" aria-hidden="true">#</a> 2.1.2. init文件和 development mode</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>project_root_directory
├── setup.py        <span class="token comment"># and/or setup.cfg, pyproject.toml</span>
└── module_name
    ├── m.py        <span class="token comment"># 简单的hello()函数</span>
    └── __init__.py <span class="token comment"># \`__init__.py\` 决定是否必须 \`-e\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当没有<code>__init__.py</code> 文件是，会出现一个奇特的现象：</p><ul><li><code>pip install git+https://github.com/sword4869/mytree.git</code> 会出现 <em>ModuleNotFoundError</em>，</li><li>而 <code>pip install -e git+https://github.com/sword4869/mytree.git#egg=mytree</code> 则不会。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; import mytree
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
ModuleNotFoundError: No module named &#39;mytree&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实是因为前者安装到<code>\\envs\\nerf\\Lib\\site-packages</code>中少了东西。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\envs\\nerf\\Lib\\site-packages\`
├── mytree                      # 这个文件夹因为没有 __init__.py 而没有
│   ├── __init__.py
│   ├── tree.py
│   └── __pycache__
├── mytree-0.0.1.dist-info
│   ├── INSTALLER
│   ├── LICENSE
│   ├── METADATA
│   ├── RECORD
│   ├── REQUESTED
│   ├── WHEEL
│   ├── direct_url.json
│   ├── entry_points.txt
│   └── top_level.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了<code>__init__.py</code> 后，这下不用 <code>-e</code> 和 用 <code>-e</code> 都行。</p><h3 id="_2-2-build" tabindex="-1"><a class="header-anchor" href="#_2-2-build" aria-hidden="true">#</a> 2.2. build</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装build包</span>
pip <span class="token function">install</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run <code>build</code> without <code>--wheel</code> or <code>--sdist</code>, it will build both files for you.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-1-build-a-wheel" tabindex="-1"><a class="header-anchor" href="#_2-2-1-build-a-wheel" aria-hidden="true">#</a> 2.2.1. build a wheel</h4><p>二进制文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用build包打包</span>
python <span class="token parameter variable">-m</span> build <span class="token parameter variable">--wheel</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-build-source-distribution-sdist" tabindex="-1"><a class="header-anchor" href="#_2-2-2-build-source-distribution-sdist" aria-hidden="true">#</a> 2.2.2. build source distribution (sdist)</h4><ul><li>包含源码</li><li>是一个压缩包<code>*.tar.gz</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> build <span class="token parameter variable">--sdist</span> <span class="token builtin class-name">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认包含在 sdist 中的文件:</p><ul><li><p>all Python source files implied by the <code>py_modules</code> and <code>packages</code></p></li><li><p>all C source files mentioned in the <code>ext_modules</code> or <code>libraries</code></p></li><li><p>scripts specified by the <code>scripts</code></p></li><li><p>all files specified by the <code>package_data</code> and <code>data_files</code></p></li><li><p>the file specified by the <code>license_file</code> option in <code>setup.cfg</code> (setuptools 40.8.0+), all files specified by the <code>license_files</code> option in <code>setup.cfg</code> (setuptools 42.0.0+)</p></li><li><p>all files matching the pattern <code>test/test*.py</code></p></li><li><p><code>setup.py</code> (or whatever you called your setup script)</p></li><li><p><code>setup.cfg</code></p></li><li><p><code>pyproject.toml</code> (setuptools 43.0.0+)</p></li><li><p><code>README</code>, <code>README.txt</code>, <code>README.rst</code> (Python 3.7+ or setuptools 0.6.27+), <code>README.md</code> (setuptools 36.4.0+)</p></li><li><p><code>MANIFEST.in</code></p></li></ul><p>Default files can even be removed from the sdist with <code>MANIFEST.in</code>.</p><blockquote><p><code>MANIFEST.in</code></p></blockquote><p>您可能会发现自己想要在源发行版中包含额外的文件，例如<code>contributors</code>文件、<code>docs/</code>文件夹，或用于测试目的的数据文件目录<code>data/</code>。</p><p>方法是：添加和删除文件是通过在项目根目录下写入<code>MANIFEST.in</code>文件来完成的。</p><table><thead><tr><th>命令（文件必须以项目根目录为相对路径给出, 用<code>/</code>分隔）</th><th>描述</th></tr></thead><tbody><tr><td><code>include pat1 pat2 ...</code></td><td>添加文件</td></tr><tr><td><code>exclude pat1 pat2 ...</code></td><td>删除文件</td></tr><tr><td><code>recursive-include dir-pattern pat1 pat2 ...</code></td><td>添加<code>dir-pattern</code>目录下的文件</td></tr><tr><td><code>recursive-exclude dir-pattern pat1 pat2 ...</code></td><td>删除<code>dir-pattern</code>目录下的文件</td></tr><tr><td><code>global-include pat1 pat2 ...</code></td><td>添加所有在源代码树中任何位置并且与任何列出的模式匹配的文件</td></tr><tr><td><code>global-exclude pat1 pat2 ...</code></td><td>删除所有在源代码树中任何位置并且与任何列出的模式匹配的文件</td></tr><tr><td><code>graft dir-pattern</code></td><td>添加所有在<code>dir-pattern</code>目录下的文件</td></tr><tr><td><code>prune dir-pattern</code></td><td>删除所有在<code>dir-pattern</code>目录下的文件</td></tr></tbody></table><p><code>graft example*</code> will include a directory named <code>examples</code> in the project root but will not include <code>docs/examples/</code>.</p><hr><p>https://docs.python.org/3/distutils/setupscript.html#distutils-installing-scripts</p><p>https://setuptools.pypa.io/en/latest/userguide/datafiles.html</p>`,41);function A(C,P){const i=t("ExternalLinkIcon"),p=t("RouterLink");return l(),c("div",null,[m,n("p",null,[n("a",k,[s("Attributes"),e(i)])]),b,n("ul",null,[n("li",null,[g,n("ul",null,[n("li",null,[n("p",null,[s("同 "),e(p,{to:"/virtual%20environment/requirements.html#1-basic"},{default:d(()=>[s("requirements.txt的写法")]),_:1})])]),h])]),_]),y,n("p",null,[s("PS: 除了命令行脚本 "),f,s("，还有GUI脚本 "),n("a",x,[s("gui_scripts"),e(i)])]),w,n("p",null,[n("a",q,[s("https://pypi.org/account/register"),e(i)]),s(" 注册账号。")]),E])}const L=o(v,[["render",A],["__file","pip打包.html.vue"]]);export{L as default};
