## 1. 管理员登录

```js
    sudo -i root  # 进入管理员模式

    sudo -i
```

## 2. 查看系统日志

```js

    tail -f /var/log/syslog  # 实时查看系统日志

    journalctl -xe  # 查看系统日志

    cat /var/log/nginx/access.log  # 查看 Nginx 访问日志

    cat /var/log/nginx/error.log  # 查看 Nginx 错误日志
```

## 3. 查看文件内容

```js
  cat filename.txt  # 查看文件内容

  less filename.txt  # 分页查看文件 逐页查看（可以上下滚动）
      下一页：按 Space
      上一页：按 b 或者 Ctrl + b

  more filename.txt # 逐页查看（基本功能，无法向上滚动）

  head -n 20 filename.txt   # 查看前 20 行（默认是 10 行）

  tail -n 20 filename.txt   # 查看后 20 行（默认是 10 行）

  tail -f filename.txt # 实时查看文件内容

  grep "关键词" filename.txt # 查找文件中包含关键词的行

  awk '{print $1}' filename.txt   # 打印第一列

  sed -n '1,10p' filename.txt   # 查看第 1 到 10 行

```

## 4. Vim 操作

```js
    vim filename.txt  # 打开文件

     在 Vim 中：

      i - 进入插入模式

      Esc - 退出插入模式

      :w - 保存文件

      :q - 退出 Vim

      :wq - 保存并退出
```

## 5. 监控网络

```js
    ifconfig  # 查看网络接口配置

    ip addr  # 查看 IP 地址

    ping example.com  # 检查网络连通性

    netstat -tuln  # 查看正在监听的端口

```

## 6. 查看内存占用

```js
	free -h  # 查看内存使用情况

	free -m # 查看内存使用情况（以 MB 为单位）

	top  # 实时查看进程和内存使用情况

	htop  # 交互式查看进程（需安装）

	df -h # 查看磁盘使用情况


```

## 7. 杀掉进程

```js
    ps aux | grep process_name  # 查找进程

    kill -9 PID  # 杀掉指定 PID 的进程

    who # 查看当前登录用户

    ps aux | grep username  # 查看指定用户的进程

    systemctl restart nginx # 重启 Nginx 服务


```
