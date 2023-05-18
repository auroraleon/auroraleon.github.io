import{_ as e,o as a,c as n,a as s}from"./app-221cde5e.js";const c={},i=s(`<h1 id="docker-engine在类linux系统中的安装、使用、卸载" tabindex="-1"><a class="header-anchor" href="#docker-engine在类linux系统中的安装、使用、卸载" aria-hidden="true">#</a> Docker Engine在类Linux系统中的安装、使用、卸载</h1><p><img src="https://static001.geekbang.org/resource/image/51/07/510709711a3424bdb0df927519025007.jpg?x-oss-process=image/resize,m_fill,h_400,w_818" alt="image.png"></p><h2 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明" aria-hidden="true">#</a> 环境说明</h2><table><thead><tr><th>描述</th><th>说明</th></tr></thead><tbody><tr><td>服务器</td><td>任意云服务器（2核4线程4G内存2M+宽带）</td></tr><tr><td>系统</td><td>Ubuntu Service 64bit 18.04 LTS</td></tr></tbody></table><p>以下包管理器统一使用<code>apt</code>而不用<code>apt-get</code></p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><h3 id="服务器系统" tabindex="-1"><a class="header-anchor" href="#服务器系统" aria-hidden="true">#</a> 服务器系统</h3><p>需要是以下64位系统的其中一种：</p><ul><li>Ubuntu Lunar 23.04</li><li>Ubuntu Kinetic 22.10</li><li>Ubuntu Jammy 22.04 (LTS)</li><li>Ubuntu Focal 20.04 (LTS)</li><li>Ubuntu Bionic 18.04 (LTS)</li></ul><h3 id="删除古早版本的docker" tabindex="-1"><a class="header-anchor" href="#删除古早版本的docker" aria-hidden="true">#</a> 删除古早版本的Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker软件包名在linux中的发展历史" tabindex="-1"><a class="header-anchor" href="#docker软件包名在linux中的发展历史" aria-hidden="true">#</a> Docker软件包名在Linux中的发展历史</h3><h4 id="docker-io与docker-io" tabindex="-1"><a class="header-anchor" href="#docker-io与docker-io" aria-hidden="true">#</a> docker.io与docker-io</h4><p>早在docker容器技术出现之前，linux就已经有了一个叫做docker的工具，是一个窗口停靠栏工具。但此docker非彼docker。由于在linux中软件名无法重名，而且那个时候的Docker容器技术的官网叫做docker.io，于是加上了.io的后缀。<br>在Ubuntu中是<code>docker.io</code>，在CentOS是<code>docker-io</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">apt-get</span> <span class="token function">install</span> docker.io
<span class="token comment"># CentOS</span>
yum <span class="token function">install</span> docker-io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然软件名不一样，但是使用命令还是<code>docker</code>。所以要安装Docker容器，首先要先卸载docker这个程序。随着发展，软件包名又改成了docker-engine，名字达成了统一。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">apt-get</span> <span class="token function">install</span> docker-engine
<span class="token comment"># CentOS</span>
yum <span class="token function">install</span> docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h4><p>随着Docker技术的火爆，在征得docker停靠栏程序作者的同意，给他的软件名称改名为<code>wmdocker</code>。Docker容器技术的软件包才有了正式名docker。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">docker</span>
<span class="token comment"># CentOS</span>
yum <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-ce与docker-ee" tabindex="-1"><a class="header-anchor" href="#docker-ce与docker-ee" aria-hidden="true">#</a> docker-ce与docker-ee</h4><p>到Docker1.13.1之后，Docker公司把软件包分为两种形式：</p><ul><li>docker-ce 社区版，免费。</li><li>docker-ee 商业版，收费。</li></ul><p>而且版本号的命名方式改了，以前是<code>1.13.1</code>这样的常见版本号，现在则是<code>YY.MM-xx</code>的形式命名，如<code>19.10.0</code><br>现在要安装最新的Docker软件包，就是使用docker-ce这个名称，如果是商业版则是docker-ee。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">docker</span>
<span class="token comment"># CentOS</span>
yum <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Ubuntu系统中，除了以上命令，还可以安装<code>docker.io</code>。可能有人疑惑了，<code>docker.io</code>不是老古董了已经弃用了吗，怎么还用这个软件包名。这是因为Ubuntu上的<code>docker.io</code>一直在维护，版本也不断更新。所以如果你是使用Ubuntu系统，也可以用这种方式更新。</p><h3 id="安装形式" tabindex="-1"><a class="header-anchor" href="#安装形式" aria-hidden="true">#</a> 安装形式</h3><ul><li>安装Linux桌面版Docker</li><li>使用apt安装Docker</li><li>使用脚本安装（仅建议在开发环境）</li></ul><h2 id="使用apt-repository安装" tabindex="-1"><a class="header-anchor" href="#使用apt-repository安装" aria-hidden="true">#</a> 使用apt repository安装</h2><h3 id="配置仓库" tabindex="-1"><a class="header-anchor" href="#配置仓库" aria-hidden="true">#</a> 配置仓库</h3><ol><li>更新apt包索引以及允许apt通过https方式使用仓库。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ca-certificates <span class="token function">curl</span> gnupg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>【注释】<code>ca-certificates</code>这是一个随着Ubuntu默认安装的软件包，如果没有可以安装。该软件包用于<code>CA</code>证书的配置。如果需要安装CA证书，我们只需要将其放在<code>/usr/share/ca-certifacates</code>目录或者子目录中，<code>ca-certificates</code>就能自动扫描到。在添加证书时，为了不跟其他根证书混淆，所以一般会创建子目录。 添加证书步骤如下：</p><ol><li>创建子目录<code>sudo mkdir /usr/share/ca-certificates/extra</code>。</li><li>添加证书<code>sudo cp certificates.crt /usr/share/ca-certificates/extra</code>。</li><li>安装证书<code>sudo dpkg-reconfigure ca-certificates</code></li><li>成功后，安装后的证书存放在<code>/etc/ssl/certs</code>目录下，其中<code>.pem</code>结尾的文件就是刚才的证书，内容一样，后缀更改。</li></ol></blockquote><blockquote><p>【注释】<code>gnupg</code>是一个加密软件，与ssh相似。使用命令是<code>gpg</code>。</p></blockquote><ol start="2"><li>添加Docker的官方GPG Key。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-d</span> /etc/apt/keyrings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> a+r /etc/apt/keyrings/docker.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>配置apt仓库</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=&quot;</span><span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span><span class="token string">&quot; signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  &quot;</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$VERSION_CODENAME</span>&quot;</span><span class="token variable">)</span></span><span class="token string">&quot; stable&quot;</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载docker-engine" tabindex="-1"><a class="header-anchor" href="#下载docker-engine" aria-hidden="true">#</a> 下载Docker Engine</h3><ol><li>在进行以上步骤后，更新apt包索引。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>下载Docker Engine, containerd, 和Docker Compose。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>下载完成后通过运行内置的<code>hello-world</code>镜像确认已经下载成功。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当这个容器成功运行后，会打印出确认的信息，然后退出。 :::success 现在我们成功下载成功Docker了！ :::</p><h2 id="配置与使用docker" tabindex="-1"><a class="header-anchor" href="#配置与使用docker" aria-hidden="true">#</a> 配置与使用Docker</h2><h3 id="什么是docker" tabindex="-1"><a class="header-anchor" href="#什么是docker" aria-hidden="true">#</a> 什么是Docker</h3><p>通常来说，一部电脑安装一个操作系统，最常见的就是windows。但是使用虚拟机技术可以在一部电脑上的操作系统再安装多个操作系统。操作系统还可以套操作系统，如此套娃会变得越来越小，越来越卡。<br>但是操作系统占用的资源太冗余了，我们通常使用虚拟化技术是为了使用应用，而不是系统。矛盾的点在于应用无法脱离系统存在，于是容器技术基于此问题而诞生。</p><h3 id="使用docker" tabindex="-1"><a class="header-anchor" href="#使用docker" aria-hidden="true">#</a> 使用Docker</h3><p><code>@TODO</code></p><h2 id="卸载docker" tabindex="-1"><a class="header-anchor" href="#卸载docker" aria-hidden="true">#</a> 卸载Docker</h2><ol><li>卸载Docker Engine, CLI, containerd,和Docker Compose 软件包：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>镜像、容器、数据、或者自定义配置文件不会自动随着卸载而卸载，所以要至少卸载以下文件夹：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他自定义的文件夹也要删除。</p>`,61),d=[i];function o(r,l){return a(),n("div",null,d)}const p=e(c,[["render",o],["__file","index.html.vue"]]);export{p as default};