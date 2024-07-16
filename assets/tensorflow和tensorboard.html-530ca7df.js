import{_ as e,V as s,W as n,Z as a}from"./framework-b4b62eb1.js";const o={},r=a(`<p>旧版 TensorFlow 1.x，CPU 和 GPU 软件包是分开的，而TensorFlow 2 合并了 CPU 和 GPU</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> tensorflow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tensorboard会依赖tensorflow，不如直接装tensorflow, tensorboard也有。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tensorboard==2.12.0
tensorboard-data-server==0.7.0
tensorboard-plugin-wit==1.8.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[r];function d(l,i){return s(),n("div",null,t)}const u=e(o,[["render",d],["__file","tensorflow和tensorboard.html.vue"]]);export{u as default};
