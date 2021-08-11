# openSUSE 源使用帮助

## 地址

<https://mirrors.nju.edu.cn/opensuse/>

## 说明

openSUSE 软件源

## 收录架构

i586, x86_64

## 使用说明

### 手动配置软件源

**Warning**
> 以下配置方法适用于从未自行配置软件源的用户，其他用户请根据具体情况自行配置，以下仅供参考。

* Step 1

禁用原有软件源

    sudo zypper mr -da

* Step 2

添加南大镜像源，以 openSUSE Leap为例
```
    sudo zypper ar -cfg https://mirrors.nju.edu.cn/opensuse/distribution/leap/$releasever/repo/oss nju-oss
    sudo zypper ar -cfg https://mirrors.nju.edu.cn/opensuse/distribution/leap/$releasever/repo/non-oss nju-non-oss
    sudo zypper ar -cfg https://mirrors.nju.edu.cn/opensuse/update/leap/$releasever/oss nju-update-oss
    sudo zypper ar -cfg https://mirrors.nju.edu.cn/opensuse/update/leap/$releasever/non-oss nju-update-non-oss
```
命令中最后一个参数为每一个源指定了一个 alias（别称），可以根据个人喜好更改。

Leap 15.3 用户还需添加 sle 和 backports 源

```
sudo zypper ar -cfg 'https://mirrors.nju.edu.cn/opensuse/update/leap/$releasever/sle/' nju-sle-update
sudo zypper ar -cfg 'https://mirrors.nju.edu.cn/opensuse/update/leap/$releasever/backports/' nju-backports-update
```

对于Tumbleweed用户

```
sudo zypper ar -cfg 'https://mirrors.nju.edu.cn/opensuse/tumbleweed/repo/oss/' nju-oss
sudo zypper ar -cfg 'https://mirrors.nju.edu.cn/opensuse/tumbleweed/repo/non-oss/' nju-non-oss
```
* Step 3

手动刷新软件源

    sudo zypper ref


## 注意事项

-   由于使用了 MirrorBrain 技术， 中央服务器 (download.opensuse.org)
    会按照 IP 地理位置中转下载请求到附近的
    镜像服务器（但刷新软件源时仍从中央服务器获取元数据），所以更改软件源通常
    只会加快刷新软件源的速度，而对下载速度影响不大。参见 openSUSE
    中文论坛。
-   我们不提供 source 和 debug 源。

## 相关链接

官方主页

:   <https://www.opensuse.org/>

邮件列表

:   <https://en.opensuse.org/Communicate/Mailinglists>

论坛

:   <https://forums.opensuse.org/>

中文论坛

:   <https://forum.suse.org.cn/>

Wiki

:   <https://en.opensuse.org/>

中文 Wiki

:   <https://zh.opensuse.org/>

文档

:   <https://en.opensuse.org/Documentation>
