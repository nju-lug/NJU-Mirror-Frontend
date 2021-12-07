## Clickhouse 镜像使用帮助

### Debian/Ubuntu 用户

新建 `/etc/apt/sources.list.d/clickhouse.list`，内容为

```
deb https://mirror.nju.edu.cn/clickhouse/deb/stable/ main/
```

### RHEL/CentOS 用户

新建 `/etc/yum.repos.d/clickhouse.repo`，内容为

```
[repo.yandex.ru_clickhouse_rpm_stable_x86_64]
name=clickhouse stable
baseurl=https://mirror.nju.edu.cn/clickhouse/rpm/stable/x86_64
enabled=1
```
