import{_ as e,V as p,W as o,Y as n,Z as s,$ as c,X as a,D as i}from"./framework-48406333.js";const l={},u=a(`<h1 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> email</h1><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send</h2><p>只有文字的版本</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart    
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText    
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>image <span class="token keyword">import</span> MIMEImage
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header

server_host <span class="token operator">=</span> <span class="token string">&#39;smtp.163.com&#39;</span>
username <span class="token operator">=</span> <span class="token string">&#39;sandal33s@163.com&#39;</span>
password <span class="token operator">=</span> <span class="token string">&#39;LJJFBAQEMNUCEAIZ&#39;</span>

<span class="token comment">### </span>
<span class="token comment"># 邮件内容</span>
<span class="token comment"># - 发件人昵称</span>
<span class="token comment"># - 收件人昵称</span>
<span class="token comment"># - 主题</span>
<span class="token comment">### </span>
<span class="token comment"># 正文内容：plain, html</span>
msg <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token string">&quot;Python 邮件发送测试...&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># msg = MIMEText(&quot;&lt;H1&gt;Python&lt;/H1&gt;&lt;a href=&#39;https://www.baidu.com&#39;&gt;百度一下&lt;/a&gt;&quot;, &#39;html&#39;, &#39;utf-8&#39;)</span>

<span class="token comment"># 对应发件人邮箱昵称（随便起）</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&quot;发件人邮箱昵称&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 对应收件人邮箱昵称（随便起）</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&quot;收件人邮箱昵称&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 主题</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&#39;主题&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    smtp <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server_host<span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>login<span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    send_add <span class="token operator">=</span> <span class="token string">&#39;sandal33s@163.com&#39;</span>  <span class="token comment"># 邮件发送者地址</span>
    to_add <span class="token operator">=</span> <span class="token string">&#39;1084662708@qq.com&#39;</span>    <span class="token comment"># 邮件接收者地址</span>
    smtp<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>send_add<span class="token punctuation">,</span> to_add<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    smtp<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;邮件发送成功&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> smtplib<span class="token punctuation">.</span>SMTPException<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Error: 无法发送邮件&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r={href:"https://zhuanlan.zhihu.com/p/318387004",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="检查邮箱" tabindex="-1"><a class="header-anchor" href="#检查邮箱" aria-hidden="true">#</a> 检查邮箱</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> imapclient <span class="token keyword">import</span> IMAPClient       <span class="token comment"># pip install imapclient</span>
<span class="token keyword">import</span> email

<span class="token keyword">class</span> <span class="token class-name">MyEmail</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>server_host <span class="token operator">=</span> <span class="token string">&#39;imap.163.com&#39;</span>
        self<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;xxxxxxxxxx@163.com&#39;</span>    
        self<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&#39;LQJFBAQEMNUCEAIQ&#39;</span>  <span class="token comment"># 授权码 </span>

    <span class="token keyword">def</span> <span class="token function">build_connect</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>server <span class="token operator">=</span> IMAPClient<span class="token punctuation">(</span>self<span class="token punctuation">.</span>server_host<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>login<span class="token punctuation">(</span>self<span class="token punctuation">.</span>username<span class="token punctuation">,</span> self<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
        <span class="token comment"># 163邮箱，采用新版email标准，需要提供id，随便写</span>
        self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>id_<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;IMAPClient&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1.0&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">activate</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;确保激活&quot;&quot;&quot;</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>select_folder<span class="token punctuation">(</span><span class="token string">&#39;INBOX&#39;</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;UNSEEN&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> ConnectionAbortedError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token comment"># 如果出现掉线的情况，那么重连</span>
            self<span class="token punctuation">.</span>build_connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token keyword">def</span> <span class="token function">check_email</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;True表示有新邮件，False表示无&#39;&#39;&#39;</span>
        <span class="token comment"># 收信箱</span>
        self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>select_folder<span class="token punctuation">(</span><span class="token string">&#39;INBOX&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 查看未读邮件，下面fetch()后自动标记为已读，就不会重复。</span>
        messages <span class="token operator">=</span> self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;UNSEEN&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 遍历每封邮件</span>
        <span class="token keyword">for</span> uid<span class="token punctuation">,</span> message_data <span class="token keyword">in</span> self<span class="token punctuation">.</span>server<span class="token punctuation">.</span>fetch<span class="token punctuation">(</span>messages<span class="token punctuation">,</span> <span class="token string">&quot;RFC822&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 转为email对象</span>
            message <span class="token operator">=</span> email<span class="token punctuation">.</span>message_from_bytes<span class="token punctuation">(</span>message_data<span class="token punctuation">[</span><span class="token string">b&quot;RFC822&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token comment"># 各种payload，正文、附件、图片</span>
            multipart_payload <span class="token operator">=</span> message<span class="token punctuation">.</span>get_payload<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> sub_message <span class="token keyword">in</span> multipart_payload<span class="token punctuation">:</span>
                <span class="token comment"># 如果是 text/plain 的话</span>
                <span class="token keyword">if</span> sub_message<span class="token punctuation">.</span>get_content_type<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">:</span>
                    <span class="token comment"># The actual text/HTML email contents, or attachment data</span>
                    content <span class="token operator">=</span> sub_message<span class="token punctuation">.</span>get_payload<span class="token punctuation">(</span>decode<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
                    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./1.yml&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                        <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
                        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">pass</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    myEmail <span class="token operator">=</span> MyEmail<span class="token punctuation">(</span><span class="token punctuation">)</span>
    myEmail<span class="token punctuation">.</span>build_connect<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 遍历等邮件</span>
    <span class="token keyword">import</span> time
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        myEmail<span class="token punctuation">.</span>activate<span class="token punctuation">(</span><span class="token punctuation">)</span>
        flag <span class="token operator">=</span> myEmail<span class="token punctuation">.</span>check_email<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;* waiting for email...&#39;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span>
        <span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(m,v){const t=i("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("想要图片、附件，去学"),n("a",r,[s("https://zhuanlan.zhihu.com/p/318387004"),c(t)])]),k])}const g=e(l,[["render",d],["__file","email.html.vue"]]);export{g as default};
