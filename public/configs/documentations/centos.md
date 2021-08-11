# CentOS 源使用帮助

## 地址

<https://mirrors.nju.edu.cn/centos/>

## 说明

CentOS 软件源.

## 收录架构

x86_64, i386

## 收录版本

7, 8, 8-stream

7以前的版本见 <https://mirrors.nju.edu.cn/centos-vault/>

## 使用说明

首先备份 `/etc/yum.repos.d/`下的文件

对于 CentOS 8，使用以下命令替换默认的配置
```
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://mirror.centos.org/$contentdir|baseurl=https://mirror.nju.edu.cn/centos|g' \
         -i.bak \
         /etc/yum.repos.d/CentOS-Linux-*.repo \
```
对于 CentOS 7，使用以下命令替换默认配置
```
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://mirror.centos.org/centos|baseurl=https://mirror.nju.edu.cn/centos|g' \
         -i.bak \
         /etc/yum.repos.d/CentOS-Base.repo
```

最后运行 `sudo yum makecache`或 `sudo dnf makecache` 生成缓存。

## 相关链接

官方主页

:   <https://www.centos.org/>

邮件列表

:   <https://www.centos.org/modules/tinycontent/index.php?id=16>

论坛

:   <https://www.centos.org/modules/newbb/>

文档

:   <https://www.centos.org/docs/>

Wiki

:   <https://wiki.centos.org/>

镜像列表

:   <https://www.centos.org/modules/tinycontent/index.php?id=32>
