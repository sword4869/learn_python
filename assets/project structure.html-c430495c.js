import{_ as e,V as n,W as i,X as a}from"./framework-48406333.js";const s={},t=a(`<ul><li><a href="#1-structure-your-python-project">1. Structure your Python project</a><ul><li><a href="#11-the-reasoning-behind-a-src-directory">1.1. The reasoning behind a src directory</a></li><li><a href="#12-creating-modules-and-entry-points">1.2. Creating modules and entry points</a></li><li><a href="#13-defining-main-for-modules">1.3. Defining main for modules</a></li></ul></li></ul><hr><h1 id="_1-structure-your-python-project" tabindex="-1"><a class="header-anchor" href="#_1-structure-your-python-project" aria-hidden="true">#</a> 1. Structure your Python project</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project&gt;
├── src
│   ├── &lt;module&gt;/*
│   │    ├── __init__.py
│   │    ├── __main__.py
│   │    └── many_files.py
│   │
│   └── tests/*
│        └── many_tests.py
│
├── .gitignore
├── pyproject.toml
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>src directory</li><li><code>__main__.py</code></li></ul><h2 id="_1-1-the-reasoning-behind-a-src-directory" tabindex="-1"><a class="header-anchor" href="#_1-1-the-reasoning-behind-a-src-directory" aria-hidden="true">#</a> 1.1. The reasoning behind a src directory</h2><p>keep all your module files inside a <code>src</code> dir, and all tests living side by side with it.</p><p>Example of without src:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>non_recommended_project
├── &lt;module_a&gt;/*
│     ├── __init__.py
│     └── many_files.py
│
├── .gitignore
│
├── tests/*
│    └── many_tests.py
│
├── pyproject.toml
│
├── &lt;module_b&gt;/*
│     ├── __init__.py
│     └── many_files.py
│
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s boring to have things, <code>module_a</code> and <code>module_b</code> in this case, so apart due to the alphabetical sorting of the IDE.</p><p>The main reason behind the src dir is to keep active project code concentrated inside a single directory while settings, CI/CD setup, and project metadata can reside outside of it.</p><h2 id="_1-2-creating-modules-and-entry-points" tabindex="-1"><a class="header-anchor" href="#_1-2-creating-modules-and-entry-points" aria-hidden="true">#</a> 1.2. Creating modules and entry points</h2><p>Every application has an entry point.</p><p>It means that there&#39;s a single module that runs your application. It can be either a single script or a big module.</p><p>Whenever you&#39;re creating an entry point, make sure to add a condition to ensure it&#39;s being executed and not imported:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">execute_main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>  <span class="token comment"># 👈 Add this condition</span>
    execute_main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By doing that you ensure that any imports won&#39;t trigger your code by accident. Unless it&#39;s explicitly executed.</p><h2 id="_1-3-defining-main-for-modules" tabindex="-1"><a class="header-anchor" href="#_1-3-defining-main-for-modules" aria-hidden="true">#</a> 1.3. Defining main for modules</h2><p>You might have noticed some python packages that can be invoked by passing down <code>-m</code> like:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> pytest
python <span class="token parameter variable">-m</span> tryceratops
python <span class="token parameter variable">-m</span> faust
python <span class="token parameter variable">-m</span> flake8
python <span class="token parameter variable">-m</span> black
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Such packages are treated almost like regular commands since you can also run them as:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest
tryceratops
faust
flake8
black
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To make this happen you need to specify a single <code>__main__.py</code> file inside your main module.</p><p>Don&#39;t forget you still need to include the check <code>__name__ == &quot;__main__&quot;</code> inside your <code>__main__.py</code> file.</p><p>When you install your module, you can run your project as <code>python -m example_module</code>.</p>`,25),d=[t];function r(l,o){return n(),i("div",null,d)}const u=e(s,[["render",r],["__file","project structure.html.vue"]]);export{u as default};
