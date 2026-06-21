# Sengoku Codex

日本现代行政区划与战国时代旧地名对照地图项目。

这个项目面向桌面端浏览，帮助旅行时把现代都道府县、战国旧国名、代表性大名与武将放在同一张交互地图里学习。

## 在线预览

GitHub Pages 启用后，可通过以下地址访问：

- `https://sakagami-yoshitoshi.github.io/sengoku-codex/`

## 仓库结构

- `src/`
  - 源代码目录
  - `index.html` 为主页面源码
  - `japan-prefectures.svg` 为矢量底图源码
- `docs/`
  - GitHub Pages 发布目录
- `outputs/`
  - 当前导出的交付版本备份
- `.github/workflows/`
  - GitHub Pages 自动部署工作流

## 主要功能

- 现代都道府县与战国旧国名双线对照
- 现代地名与战国地名日文 / 英文双语标注
- 默认全域视图显示日本八大区域
- 点击都道府县后切换到局部放大视图
- 局部视图中显示主要城市位置
- 右侧信息面板显示旧国名、地域、守护 / 大名、代表武将与战国概要

## 本地使用

直接打开以下文件即可：

- `src/index.html`

如果想使用当前导出版本，也可以打开：

- `outputs/japan-sengoku-map.html`

## 发布说明

GitHub Pages 工作流已经写入仓库。首次启用时，你只需要在 GitHub 仓库设置中确认 Pages 使用 GitHub Actions 即可。

## 版本

当前首发整理版本：

- `v0.1.0`
