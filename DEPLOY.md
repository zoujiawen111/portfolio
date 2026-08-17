# 部署说明

## 流水线部署到 ECS

部署任务脚本保持和其他项目一致，不在流水线里写镜像地址：

```bash
cd /data/zjw
WEB_ONLY=1 bash ./deploy-ecs.sh ${DATETIME}
```

镜像地址放在 ECS 的 `/data/zjw/.env` 中，由 `deploy-ecs.sh` 读取。

## ECS 首次准备

创建项目部署目录：

```bash
mkdir -p /data/zjw
```

把仓库里的 `deploy/` 目录内容放到 ECS 的 `/data/zjw/`：

```bash
cp -r deploy/* /data/zjw/
cd /data/zjw
cp .env.example .env
chmod +x deploy-ecs.sh
```

编辑 `/data/zjw/.env`：

```bash
APP_NAME=zjw-portfolio
WEB_IMAGE=registry.cn-shanghai.aliyuncs.com/your-namespace/zjw-portfolio
WEB_TAG=latest
HOST_PORT=0.0.0.0:3500
```

只需要把 `WEB_IMAGE` 改成云效“镜像构建并推送至 ACR”任务推送到的镜像仓库地址。`WEB_TAG` 会由流水线传入的 `${DATETIME}` 自动更新。

安全组开放 TCP `3500` 后，可以直接访问：

```text
http://101.133.154.163:3500/
```

## 子路径部署

如果访问地址是 `https://example.com/portfolio/`，镜像构建任务需要加 Docker build 参数：

```bash
--build-arg VITE_BASE_PATH=/portfolio/
```

或在云效构建参数里设置：

```text
VITE_BASE_PATH=/portfolio/
```

外层 Nginx 配置：

```nginx
location /portfolio/ {
    proxy_pass http://127.0.0.1:8081/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## 独立域名部署

如果使用独立域名，例如 `portfolio.example.com`，不需要设置 `VITE_BASE_PATH`。外层 Nginx 配置：

```nginx
server {
    listen 80;
    server_name portfolio.example.com;

    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
