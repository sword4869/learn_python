import{_ as n,V as s,W as a,X as e}from"./framework-48406333.js";const i={},l=e(`<ul><li><a href="#1-install">1. install</a></li><li><a href="#2-%E9%93%BE%E6%8E%A5%E9%97%AE%E9%A2%98">2. 链接问题</a><ul><li><a href="#21-kill-server%E4%B8%8Estart-server">2.1. kill-server与start-server</a></li><li><a href="#22-%E6%98%BE%E7%A4%BA">2.2. 显示</a></li><li><a href="#23-%E6%9C%89%E7%BA%BF%E9%93%BE%E6%8E%A5">2.3. 有线链接</a></li><li><a href="#24-%E6%97%A0%E7%BA%BF%E9%93%BE%E6%8E%A5">2.4. 无线链接</a></li></ul></li><li><a href="#3-%E5%B8%B8%E7%94%A8">3. 常用</a><ul><li><a href="#31-%E6%9D%83%E9%99%90root">3.1. 权限root</a></li><li><a href="#32-%E6%96%87%E4%BB%B6%E4%BC%A0%E9%80%81-adb-push%E4%B8%8Eadb-pull">3.2. 文件传送 adb push与adb pull</a></li><li><a href="#33-%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6-install">3.3. 安装软件 install</a></li><li><a href="#34-%E5%8D%B8%E8%BD%BD%E8%BD%AF%E4%BB%B6-uninstall">3.4. 卸载软件 uninstall</a></li></ul></li><li><a href="#4-adb-shell%E7%BB%88%E7%AB%AF">4. adb shell终端</a><ul><li><a href="#41-%E8%BF%9B%E5%85%A5%E5%92%8C%E9%80%80%E5%87%BA">4.1. 进入和退出</a></li><li><a href="#42-%E5%90%8Clinux%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">4.2. 同linux文件系统</a></li><li><a href="#43-input-keyevent">4.3. input keyevent</a></li><li><a href="#44-input-tap">4.4. input tap</a></li><li><a href="#45-input-swipe">4.5. input swipe</a></li><li><a href="#46-screencap%E5%91%BD%E4%BB%A4">4.6. screencap命令</a></li><li><a href="#47-%E6%88%AA%E5%9B%BE%E5%B9%B6%E4%BC%A0%E8%BE%93%E5%88%B0%E7%94%B5%E8%84%91%E4%B8%8A">4.7. 截图并传输到电脑上</a></li><li><a href="#48-%E8%8E%B7%E5%8F%96%E6%89%8B%E6%9C%BA%E5%B1%8F%E5%B9%95%E5%88%86%E8%BE%A8%E7%8E%87">4.8. 获取手机屏幕分辨率</a></li><li><a href="#49-%E4%BF%AE%E6%94%B9%E6%89%8B%E6%9C%BA%E6%97%B6%E9%97%B4">4.9. 修改手机时间</a></li></ul></li><li><a href="#troubleshoot">TroubleShoot</a><ul><li><a href="#%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB%E8%AE%BE%E5%A4%87">无法识别设备</a></li><li><a href="#no-permissions">no permissions</a></li></ul></li></ul><hr><h1 id="_1-install" tabindex="-1"><a class="header-anchor" href="#_1-install" aria-hidden="true">#</a> 1. install</h1><p>直接scrcpy项目：https://github.com/Genymobile/scrcpy/releases</p><p>adb 可以通过python安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://github.com/google/python-adb</span>
pip <span class="token function">install</span> adb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 然后就可以用 pyadb, 相当于 adb</span>
pyadb devices

<span class="token comment"># 然后就可以用 pyfastboot, 相当于 fastboot </span>
pyfastboot devices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-链接问题" tabindex="-1"><a class="header-anchor" href="#_2-链接问题" aria-hidden="true">#</a> 2. 链接问题</h1><h2 id="_2-1-kill-server与start-server" tabindex="-1"><a class="header-anchor" href="#_2-1-kill-server与start-server" aria-hidden="true">#</a> 2.1. kill-server与start-server</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb kill-server			<span class="token comment"># 杀死连接的设备</span>
adb start-server		<span class="token comment"># 启动连接搜寻设备</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-显示" tabindex="-1"><a class="header-anchor" href="#_2-2-显示" aria-hidden="true">#</a> 2.2. 显示</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb devices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-3-有线链接" tabindex="-1"><a class="header-anchor" href="#_2-3-有线链接" aria-hidden="true">#</a> 2.3. 有线链接</h2><p>插上手机线后，开发者也打开后，usb调试也打开，然后在终端输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb devices
List of devices attached      
61BANF99HYNRAAMN        device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-无线链接" tabindex="-1"><a class="header-anchor" href="#_2-4-无线链接" aria-hidden="true">#</a> 2.4. 无线链接</h2><ol><li>将手机和电脑连在同一个局域网WIFI下</li><li>查看手机的IP address (in Settings → About phone → Status).</li><li><strong>链接手机和电脑的数据线</strong><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb devices
* daemon not running<span class="token punctuation">;</span> starting now at tcp:5037
* daemon started successfully
List of devices attached
List of devices attached      
61BANF99HYNRAAMN        device

<span class="token comment"># 可以直接用5037</span>
$ adb tcpip <span class="token number">5555</span>
restarting <span class="token keyword">in</span> TCP mode port: <span class="token number">5555</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>现在<strong>可以拔掉插头了</strong></li><li>比如你的手机IP是<code>192.168.1.101</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb connect <span class="token number">192.168</span>.1.101:5555
connected to <span class="token number">192.168</span>.1.101:5555
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>PS：感觉有点神奇的是，我把手机的开发者模式关闭后，按理来说已经不能操作手机了，但居然还可以。</p><h1 id="_3-常用" tabindex="-1"><a class="header-anchor" href="#_3-常用" aria-hidden="true">#</a> 3. 常用</h1><h2 id="_3-1-权限root" tabindex="-1"><a class="header-anchor" href="#_3-1-权限root" aria-hidden="true">#</a> 3.1. 权限root</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-2-文件传送-adb-push与adb-pull" tabindex="-1"><a class="header-anchor" href="#_3-2-文件传送-adb-push与adb-pull" aria-hidden="true">#</a> 3.2. 文件传送 adb push与adb pull</h2><p>【命令格式 A-&gt;B】</p><ul><li><p><code>adb push &lt;电脑local&gt; &lt;手机remote&gt;</code>: 电脑-&gt;手机，push推送到手机上</p></li><li><p><code>adb pull &lt;手机remote&gt; &lt;电脑local&gt;</code>: 手机-&gt;电脑，pull从手机上提取出来</p></li><li><p><code>adb pull &lt;手机remote&gt;</code> 文件保存的路径为你使用adb命令时的当前目录</p></li></ul><p>电脑的路径可为绝对路径：如<code>adb pull /sdcard/myworldstring/02.png D:/Mystring</code> 也可为只省略当前路径前缀的相对路径，如当前是<code>D:\\</code>， <code>adb pull sdcard/myworldstring/02.png ./Mystring</code></p><h2 id="_3-3-安装软件-install" tabindex="-1"><a class="header-anchor" href="#_3-3-安装软件-install" aria-hidden="true">#</a> 3.3. 安装软件 install</h2><ul><li><p>新的应用（该应用未安装）：<code>adb install apk路径</code></p></li><li><p>应用已安装，重安装覆盖： <code>adb install -r apk路径</code></p></li></ul><h2 id="_3-4-卸载软件-uninstall" tabindex="-1"><a class="header-anchor" href="#_3-4-卸载软件-uninstall" aria-hidden="true">#</a> 3.4. 卸载软件 uninstall</h2><ul><li><p>完全卸载：<code>adb uninstall 应用包(xxxx.xxx.com)</code></p></li><li><p>卸载后保存软件配置和缓存文件(keep)：<code>abd uninstall -k 应用包(xxxx.xcom)</code></p></li></ul><h1 id="_4-adb-shell终端" tabindex="-1"><a class="header-anchor" href="#_4-adb-shell终端" aria-hidden="true">#</a> 4. adb shell终端</h1><h2 id="_4-1-进入和退出" tabindex="-1"><a class="header-anchor" href="#_4-1-进入和退出" aria-hidden="true">#</a> 4.1. 进入和退出</h2><blockquote><p>进入</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190929201039881.png" alt="在这里插入图片描述"> 这样输入在这个命令之下的命令就不用打<code>adb shell</code>。 比如：<code>adb shell input tap 400 800</code>，触摸屏幕（400,800）点，就可以进入adb shell模式简写为<code>input tap 455 838</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>volume@lenovo:~$ adb shell
PD1616:/ $ input tap 455 838 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>退出</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190929202311208.png" alt="在这里插入图片描述"></p><h2 id="_4-2-同linux文件系统" tabindex="-1"><a class="header-anchor" href="#_4-2-同linux文件系统" aria-hidden="true">#</a> 4.2. 同linux文件系统</h2><blockquote><p>ls</p></blockquote><p><code>ls sdcard/MyWorldString</code> 显示xxx路径下的所有文件 使用-a参数：<code>adb shell ls -a sdcard/Download</code>，显示xxx路径下的所有文件（包括隐藏的）</p><ul><li><code>-i</code>：输出文件索引编号和文件</li><li><code>-n</code>：输出UIDS、GIDS、文件列表。</li><li><code>-R</code>：输出当前路径下所有目录中的文件。</li><li><code>-s</code>：输出文件的大小（以块数为单位)和文件</li></ul><p>备注：内存卡是sdcard</p><blockquote><p>pwd</p></blockquote><p><code>adb shell pwd</code>，查看当前路径</p><blockquote><p>cd</p></blockquote><p><code>cd sdcard/MyWorldString</code> 进入到xxx目录</p><blockquote><p>rm</p></blockquote><p><code>rm sdcard/MyWorldString</code> 删除文件或目录</p><ul><li><code>-d</code>：删除testDemo目录以及目录中的所有文件和子目录，即使文件不为空</li><li><code>-f</code>：强制删除</li><li><code>-r</code>：删除testDemo目录以及目录中的所有文件和子目录</li></ul><blockquote><p>mkdir</p></blockquote><p><code>adb shell mkdir/sdcard/Download</code>，创建xxx文件夹</p><ul><li><code>-m</code>：创建文件夹并给文件夹赋予读写执行的权限</li><li><code>-p</code>：adb shell mkdir -p/sdcard/Download/Demo/test1，如果Demo目录不存在，执行该条命令会创建Demo目录和其子目录test1</li></ul><blockquote><p>touch</p></blockquote><p><code>adb shell touch [options] &lt;file &gt;</code> 创建空白文件或改变文件时间戳</p><blockquote><p>cp</p></blockquote><p><code>cp [options] &lt;source&gt; &lt;dest&gt;</code> 如：<code>adb shell cp /sdcard/Download/Demo/test1.log /sdcard/Download/</code> ，把test1.log复制到/sdcard/Download/路径下 复制文件，不能用于文件夹之间的复制，该版本尝试无法进行目录复制。</p><blockquote><p>mv</p></blockquote><p><code>mv [options] &lt;source&gt; &lt;dest&gt;</code> 移动或者重命名文件。 移动文件： <code>adb shell mv /sdcard/Download/test1.log /sdcard/Download/Demo/</code> 重命名： <code>adb shell mv /sdcard/Download/Demo/test1.log /sdcard/Download/Demo/test.lg</code></p><h2 id="_4-3-input-keyevent" tabindex="-1"><a class="header-anchor" href="#_4-3-input-keyevent" aria-hidden="true">#</a> 4.3. input keyevent</h2><p>input keyevent值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>input keyevent <span class="token number">3</span>		// Home主界面
input keyevent <span class="token number">4</span>		// Back
input keyevent <span class="token number">24</span>		// Volume+
input keyevent <span class="token number">25</span>		// Volume-
input keyevent <span class="token number">82</span>		// Menu ，调出应用列表
input keyevent <span class="token number">26</span>		// Power,电源键。并不能唤醒屏幕，只能锁屏

input keyevent <span class="token number">61</span>		// <span class="token string">&quot;KEYCODE_TAB&quot;</span>,制表符
input keyevent <span class="token number">62</span>		// <span class="token string">&quot;KEYCODE_SPACE&quot;</span>,空格
input keyevent <span class="token number">66</span>		// <span class="token string">&quot;KEYCODE_ENTER&quot;</span>,回车
input keyevent <span class="token number">67</span>		// <span class="token string">&quot;KEYCODE_DEL&quot;</span>,删除光标前面的字符
input keyevent <span class="token number">112</span>		// <span class="token string">&quot;KEYCODE_DEL&quot;</span>,删除光标后面的字符

input keyevent <span class="token number">19</span>		// Up
input keyevent <span class="token number">20</span>		// Down
input keyevent <span class="token number">21</span>		// Left
input keyevent <span class="token number">22</span>		// Right
input keyevent <span class="token number">23</span>		// Select<span class="token punctuation">(</span>Ok<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-input-tap" tabindex="-1"><a class="header-anchor" href="#_4-4-input-tap" aria-hidden="true">#</a> 4.4. input tap</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input tap x y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模拟触屏一次，以左上角为原点，横轴是x轴，纵轴是y轴 如：<code>input tap 400 500</code>，触摸(400,500)</p><p>多重点击</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;adb shell input tap 400 500&quot;</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-input-swipe" tabindex="-1"><a class="header-anchor" href="#_4-5-input-swipe" aria-hidden="true">#</a> 4.5. input swipe</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>input swipe <span class="token operator">&lt;</span>x<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>y<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>x<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token operator">&lt;</span>y<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>duration<span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模拟滑屏，从(x1,y1)到(x2,y2)，持续duration(ms)按压时间</p><h2 id="_4-6-screencap命令" tabindex="-1"><a class="header-anchor" href="#_4-6-screencap命令" aria-hidden="true">#</a> 4.6. screencap命令</h2><p>【格式】 <code>screencap -p [FILENAME]</code> 在当下屏幕上截图，后面的路径是图片在设备中的文件路径（这个FILENAME在这里是绝对路径/sdcard/1.png）</p><ul><li><code>-p</code>: save the file as a png.</li></ul><h2 id="_4-7-截图并传输到电脑上" tabindex="-1"><a class="header-anchor" href="#_4-7-截图并传输到电脑上" aria-hidden="true">#</a> 4.7. 截图并传输到电脑上</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 截屏保存在手机中，是/sdcard/1.png</span>
<span class="token comment"># 上传到电脑上</span>
<span class="token comment"># 删除手机中保存的图片</span>

adb shell screencap <span class="token parameter variable">-p</span> /sdcard/1.png
adb pull /sdcard/1.png
adb shell <span class="token function">rm</span> /sdcard/1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
<span class="token keyword">import</span> PIL

<span class="token keyword">def</span> <span class="token function">get_screen</span><span class="token punctuation">(</span>save_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;screen shot and upload&#39;&#39;&#39;</span>
    file_path <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>save_path<span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">.</span>png<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
    cmds <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;adb shell screencap -p /sdcard/1.png&#39;</span><span class="token punctuation">,</span>
        <span class="token string-interpolation"><span class="token string">f&#39;adb pull /sdcard/1.png </span><span class="token interpolation"><span class="token punctuation">{</span>file_path<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
        <span class="token string">&#39;adb shell rm /sdcard/1.png&#39;</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">for</span> cmd <span class="token keyword">in</span> cmds<span class="token punctuation">:</span>
        subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">.</span>convert<span class="token punctuation">(</span><span class="token string">&quot;RGB&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-8-获取手机屏幕分辨率" tabindex="-1"><a class="header-anchor" href="#_4-8-获取手机屏幕分辨率" aria-hidden="true">#</a> 4.8. 获取手机屏幕分辨率</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 宽x高 WH</span>
$ adb shell wm size
Physical size: 1080x2400
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">import</span> subprocess

<span class="token keyword">def</span> <span class="token function">get_size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;width x height&#39;&#39;&#39;</span>
    cmd <span class="token operator">=</span> <span class="token string">&#39;adb shell wm size&#39;</span>
    size <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    size <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span>size<span class="token punctuation">)</span>
    size <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;[0-9]+&#39;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>size<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>size<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-9-修改手机时间" tabindex="-1"><a class="header-anchor" href="#_4-9-修改手机时间" aria-hidden="true">#</a> 4.9. 修改手机时间</h2><p><code>adb shell date xxx</code>，但如果root了但不彻底，就得用su的方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb shell
$ <span class="token function">su</span>
$ <span class="token function">date</span> <span class="token string">&#39;20:45:00&#39;</span>
Mon Jan <span class="token number">30</span> <span class="token number">20</span>:45:00 CST <span class="token number">2023</span>
$ <span class="token function">date</span>
Mon Jan <span class="token number">30</span> <span class="token number">20</span>:45:00 CST <span class="token number">2023</span>

$ <span class="token function">date</span> <span class="token string">&#39;10:10&#39;</span>
$ <span class="token function">date</span> <span class="token string">&#39;10:10:10&#39;</span>
$ <span class="token function">date</span> <span class="token number">100112361981.55</span>

$ <span class="token builtin class-name">exit</span>
<span class="token comment"># exit后时间才生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">big_clip</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> str_time<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">small_clip</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pg<span class="token punctuation">.</span>typewrite<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
        pg<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&#39;enter&#39;</span><span class="token punctuation">)</span>

    small_clip<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;date &#39;</span><span class="token interpolation"><span class="token punctuation">{</span>str_time<span class="token punctuation">}</span></span><span class="token string">&#39;&quot;</span></span><span class="token punctuation">)</span>
    small_clip<span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">)</span>
    small_clip<span class="token punctuation">(</span><span class="token string">&#39;su&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="troubleshoot" tabindex="-1"><a class="header-anchor" href="#troubleshoot" aria-hidden="true">#</a> TroubleShoot</h1><h2 id="无法识别设备" tabindex="-1"><a class="header-anchor" href="#无法识别设备" aria-hidden="true">#</a> 无法识别设备</h2><p>（1）90%的情况，数据线有问题。</p><p>（2）一般win10、11都已经自带驱动了。如果出错，试试 MiFlash 安装驱动。</p><h2 id="no-permissions" tabindex="-1"><a class="header-anchor" href="#no-permissions" aria-hidden="true">#</a> no permissions</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ adb devices
List of devices attached
faf80ac1	no permissions (user in plugdev group; are your udev rules wrong?); see [http://developer.android.com/tools/device.html]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>修改外设规则</li></ol><p>不一定是<code>51-android.rules</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> /etc/udev/rules.d/
<span class="token number">60</span>-vboxdrv.rules

<span class="token comment"># 在文件末尾添加</span>
<span class="token comment"># ffb0 是你查找手机设备的usb 的地址。Bus 001 Device 014: ID 19d2:ffb0 ZTE WCDMA Technologies MSM</span>
$ <span class="token function">vim</span> /etc/udev/rules.d/60-vboxdrv.rules
ATTR<span class="token punctuation">{</span>idProduct<span class="token punctuation">}</span><span class="token operator">==</span><span class="token string">&quot;ffb0&quot;</span>, <span class="token assign-left variable">SYMLINK</span><span class="token operator">+=</span><span class="token string">&quot;android_adb&quot;</span>, <span class="token assign-left variable">MODE</span><span class="token operator">=</span><span class="token string">&quot;0660&quot;</span>, <span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token string">&quot;plugdev&quot;</span>, <span class="token assign-left variable">TAG</span><span class="token operator">+=</span><span class="token string">&quot;uaccess&quot;</span>, <span class="token assign-left variable">SYMLINK</span><span class="token operator">+=</span><span class="token string">&quot;android&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>重编</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-G</span> plugdev <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-n</span><span class="token variable">)</span></span>
$ <span class="token function">sudo</span> udevadm control --reload-rules
$ <span class="token function">sudo</span> <span class="token function">service</span> udev restart
$ <span class="token function">sudo</span> udevadm trigger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重启adb</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb kill-server 
$ adb start-server
$ adb devices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ lsusb
找到ID号

<span class="token builtin class-name">read</span> ID
<span class="token assign-left variable">fileName</span><span class="token operator">=</span>/etc/udev/rules.d/<span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> /etc/udev/rules.d/<span class="token variable">\`</span></span>
<span class="token assign-left variable">content</span><span class="token operator">=</span><span class="token string">&#39;ATTR{idProduct}==&quot;&#39;</span><span class="token variable">$ID</span><span class="token string">&#39;&quot;, SYMLINK+=&quot;android_adb&quot;, MODE=&quot;0660&quot;, GROUP=&quot;plugdev&quot;, TAG+=&quot;uaccess&quot;, SYMLINK+=&quot;android&quot;&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$content</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$fileName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,98),t=[l];function p(d,o){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","adb.html.vue"]]);export{r as default};