## Docker 加速

```js
  // /etc/docker/daemon.json

  {
    "registry-mirrors": [
      "https://docker.1ms.run",
      "https://registry.dockermirror.com",
      "https://docker.m.daocloud.io",
      "https://registry.docker-cn.com",
      "https://docker.kubesre.xyz"
    ]
  }


  // sudo systemctl daemon-reload
  // sudo systemctl restart docker
```

## Docker 服务

```js
  sudo systemctl start docker  // 启动 Docker 服务

  sudo systemctl enable docker  // 设置 Docker 服务开机自启动

  sudo systemctl status docker  // 查看 Docker 服务状态

  docker --version // 查看 Docker 版本

  docker info // 查看 Docker 信息

  docker images // 查看本地镜像

  docker ps // 查看正在运行的容器

  docker ps -a // 查看所有容器

  docker pull [image] // 拉取镜像

  docker rmi 镜像ID或镜像名 // 删除镜像

  docker rm 容器ID或容器名 // 删除容器

  docker run -d -p 8080:80 --name webserver nginx // 启动容器

  docker restart 容器名或容器ID // 重启容器

  docker logs 容器名或容器ID // 查看容器日志

  docker exec -it 容器名或容器ID /bin/bash // 进入容器

  docker build -t myapp:latest .  // 构建镜像

  docker tag myapp:latest myapp:v1.0.0  // 给镜像打标签

  docker push myapp:v1.0.0  // 推送镜像

```
