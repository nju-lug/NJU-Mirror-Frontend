## RPMFusion 镜像使用帮助

### 安装基础包

首先安装提供基础配置文件和 GPG 密钥的 `rpmfusion-*.rpm`。Fedora 用户可使用如下命令：

```
sudo yum install --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

或者如下直接用 NJU 镜像中的 rpm 包：

```
sudo yum install --nogpgcheck https://mirror.nju.edu.cn/rpmfusion/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirror.nju.edu.cn/rpmfusion/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

注意：没有将当前用户设为管理员的用户，需要将 `sudo CMD` 替换为 `su -c 'CMD'`，并输入 root 密码。

### 修改链接指向 NJU 镜像

安装成功后，修改 `/etc/yum.repos.d/` 目录下以 `rpmfusion` 开头，以 `.repo` 结尾的文件。具体而言，需要将文件中的 `baseurl=` 开头的行等号后面链接中的 `http://download1.rpmfusion.org/` 替换为 `https://mirror.nju.edu.cn/rpmfusion/`，替换后的文件类似如下：

```
[rpmfusion-free]
name=RPM Fusion for Fedora $releasever - Free
baseurl=https://mirror.nju.edu.cn/rpmfusion/free/fedora/releases/$releasever/Everything/$basearch/os/
mirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-$releasever&arch=$basearch
enabled=1
metadata_expire=7d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch

[rpmfusion-free-debuginfo]
name=RPM Fusion for Fedora $releasever - Free - Debug
mirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-debug-$releasever&arch=$basearch
enabled=0
metadata_expire=7d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch

[rpmfusion-free-source]
name=RPM Fusion for Fedora $releasever - Free - Source
baseurl=https://mirror.nju.edu.cn/rpmfusion/free/fedora/releases/$releasever/Everything/source/SRPMS/
mirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-source-$releasever&arch=$basearch
enabled=0
metadata_expire=7d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch
```

### 更多

RHEL/CentOS 用户请参考 [RPMFusion 官方指南][rpmfusion]。

[rpmfusion]: http://rpmfusion.org/Configuration
