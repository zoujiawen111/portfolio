# GitHub Pages 部署

## 主页仓库

如果要部署到 GitHub 主页根路径，仓库名需要是：

```text
你的GitHub用户名.github.io
```

访问地址：

```text
https://你的GitHub用户名.github.io/
```

这种情况下不需要设置 `VITE_BASE_PATH`，默认就是 `/`。

## 普通项目仓库

如果仓库名是 `portfolio`，访问地址通常是：

```text
https://你的GitHub用户名.github.io/portfolio/
```

这时需要在 GitHub 仓库设置里添加 Actions variable：

```text
VITE_BASE_PATH=/portfolio/
```

路径：

```text
Settings -> Secrets and variables -> Actions -> Variables -> New repository variable
```

## GitHub Pages 设置

在 GitHub 仓库：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

之后每次 push 到 `main`，`.github/workflows/deploy-pages.yml` 会自动构建并部署。
