# Docker Engine在类Linux系统中的安装、使用、卸载
![image.png](https://static001.geekbang.org/resource/image/51/07/510709711a3424bdb0df927519025007.jpg?x-oss-process=image/resize,m_fill,h_400,w_818)

## 环境说明
| 描述 | 说明 |
| --- | --- |
| 服务器 | 任意云服务器（2核4线程4G内存2M+宽带） |
| 系统 | Ubuntu Service 64bit 18.04 LTS |

以下包管理器统一使用`apt`而不用`apt-get`
## 准备
### 服务器系统
需要是以下64位系统的其中一种：

- Ubuntu Lunar 23.04
- Ubuntu Kinetic 22.10
- Ubuntu Jammy 22.04 (LTS)
- Ubuntu Focal 20.04 (LTS)
- Ubuntu Bionic 18.04 (LTS)
### 删除古早版本的Docker
```bash
sudo apt remove docker docker-engine docker.io containerd runc
```
### Docker软件包名在Linux中的发展历史
#### docker.io与docker-io
早在docker容器技术出现之前，linux就已经有了一个叫做docker的工具，是一个窗口停靠栏工具。但此docker非彼docker。由于在linux中软件名无法重名，而且那个时候的Docker容器技术的官网叫做docker.io，于是加上了.io的后缀。<br />在Ubuntu中是`docker.io`，在CentOS是`docker-io`。
```bash
# Ubuntu
apt-get install docker.io
# CentOS
yum install docker-io
```
虽然软件名不一样，但是使用命令还是`docker`。所以要安装Docker容器，首先要先卸载docker这个程序。随着发展，软件包名又改成了docker-engine，名字达成了统一。
```bash
# Ubuntu
apt-get install docker-engine
# CentOS
yum install docker-engine
```
#### docker
随着Docker技术的火爆，在征得docker停靠栏程序作者的同意，给他的软件名称改名为`wmdocker`。Docker容器技术的软件包才有了正式名docker。
```bash
# Ubuntu
apt-get install docker
# CentOS
yum install docker
```
#### docker-ce与docker-ee
到Docker1.13.1之后，Docker公司把软件包分为两种形式：

- docker-ce 社区版，免费。
- docker-ee 商业版，收费。

而且版本号的命名方式改了，以前是`1.13.1`这样的常见版本号，现在则是`YY.MM-xx`的形式命名，如`19.10.0`<br />现在要安装最新的Docker软件包，就是使用docker-ce这个名称，如果是商业版则是docker-ee。
```bash
# Ubuntu
apt-get install docker
# CentOS
yum install docker
```
在Ubuntu系统中，除了以上命令，还可以安装`docker.io`。可能有人疑惑了，`docker.io`不是老古董了已经弃用了吗，怎么还用这个软件包名。这是因为Ubuntu上的`docker.io`一直在维护，版本也不断更新。所以如果你是使用Ubuntu系统，也可以用这种方式更新。
### 安装形式

- 安装Linux桌面版Docker
- 使用apt安装Docker
- 使用脚本安装（仅建议在开发环境）
## 使用apt repository安装
### 配置仓库

1. 更新apt包索引以及允许apt通过https方式使用仓库。
```bash
sudo apt update
```
```bash
sudo apt install ca-certificates curl gnupg
```
> 【注释】`ca-certificates`这是一个随着Ubuntu默认安装的软件包，如果没有可以安装。该软件包用于`CA`证书的配置。如果需要安装CA证书，我们只需要将其放在`/usr/share/ca-certifacates`目录或者子目录中，`ca-certificates`就能自动扫描到。在添加证书时，为了不跟其他根证书混淆，所以一般会创建子目录。
> 添加证书步骤如下：
> 1. 创建子目录`sudo mkdir /usr/share/ca-certificates/extra`。
> 2. 添加证书`sudo cp certificates.crt /usr/share/ca-certificates/extra`。
> 3. 安装证书`sudo dpkg-reconfigure ca-certificates`
> 4. 成功后，安装后的证书存放在`/etc/ssl/certs`目录下，其中`.pem`结尾的文件就是刚才的证书，内容一样，后缀更改。

> 【注释】`gnupg`是一个加密软件，与ssh相似。使用命令是`gpg`。

2. 添加Docker的官方GPG Key。
```bash
sudo install -m 0755 -d /etc/apt/keyrings
```
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
```bash
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

3. 配置apt仓库
```bash
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
### 下载Docker Engine

1. 在进行以上步骤后，更新apt包索引。
```bash
sudo apt update
```

2. 下载Docker Engine, containerd, 和Docker Compose。
```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. 下载完成后通过运行内置的`hello-world`镜像确认已经下载成功。
```bash
sudo docker run hello-world
```
当这个容器成功运行后，会打印出确认的信息，然后退出。
:::success
现在我们成功下载成功Docker了！
:::
## 配置与使用Docker
### 什么是Docker
通常来说，一部电脑安装一个操作系统，最常见的就是windows。但是使用虚拟机技术可以在一部电脑上的操作系统再安装多个操作系统。操作系统还可以套操作系统，如此套娃会变得越来越小，越来越卡。<br />但是操作系统占用的资源太冗余了，我们通常使用虚拟化技术是为了使用应用，而不是系统。矛盾的点在于应用无法脱离系统存在，于是容器技术基于此问题而诞生。
### 使用Docker
`@TODO`
## 卸载Docker

1. 卸载Docker Engine, CLI, containerd,和Docker Compose 软件包：
```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2. 镜像、容器、数据、或者自定义配置文件不会自动随着卸载而卸载，所以要至少卸载以下文件夹：
```bash
sudo rm -rf /var/lib/docker
```
```bash
sudo rm -rf /var/lib/container
```
其他自定义的文件夹也要删除。
