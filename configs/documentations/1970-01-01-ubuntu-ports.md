## Ubuntu Ports 镜像使用帮助

Ubuntu 的软件源配置文件是
`/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用
NJU软件源镜像。


```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}} main restricted universe multiverse
# deb-src https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}} main restricted universe multiverse
deb https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-updates main restricted universe multiverse
# deb-src https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-updates main restricted universe multiverse
deb https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-backports main restricted universe multiverse
# deb-src https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-backports main restricted universe multiverse
deb https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-security main restricted universe multiverse
# deb-src https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-proposed main restricted universe multiverse
# deb-src https://mirror.nju.edu.cn/ubuntu-ports/ {{release_name}}-proposed main restricted universe multiverse
```

请根据 Ubuntu 版本自行替换{{release_name}}

|  版本 |  {{release_name}} | 
| :----: | :----: |
| Ubuntu 14.04 LTS | trusty |
| Ubuntu 16.04 LTS | xenial |
| Ubuntu 18.04 LTS | bionic |
| Ubuntu 20.04 LTS | focal  |
| Ubuntu 20.10     | groovy |
| Ubuntu 21.04     | hirsute |

本镜像仅包含 arm64 armhf ppc64el riscv64 s390x 架构的软件包。
