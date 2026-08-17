# 部署说明

## 方式一：独立域名或根路径

如果外层 Nginx 按域名代理到作品集容器，例如 `portfolio.example.com`，镜像按默认配置构建即可。

部署脚本：

```bash
docker stop zjw-portfolio || true
docker rm zjw-portfolio || true
docker pull ${IMAGE}
docker run -d --name zjw-portfolio --restart always -p 127.0.0.1:8081:80 ${IMAGE}
```

外层 Nginx：

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

## 方式二：挂到已有域名的子路径

如果访问地址是 `https://example.com/portfolio/`，构建镜像时需要设置：

```bash
VITE_BASE_PATH=/portfolio/
```

Docker 构建示例：

```bash
docker build --build-arg VITE_BASE_PATH=/portfolio/ -t zjw-portfolio .
```

外层 Nginx 需要用带尾部斜杠的 `proxy_pass`，把 `/portfolio/` 前缀转发给容器根路径：

```nginx
location /portfolio/ {
    proxy_pass http://127.0.0.1:8081/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
