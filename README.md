# Sengoku Codex

日本现代行政区划与战国时代旧地名对照地图。

[Live Demo](https://sakagami-yoshitoshi.github.io/sengoku-codex/) · [Release v0.1.0](https://github.com/sakagami-yoshitoshi/sengoku-codex/releases/tag/v0.1.0) · [Source Code](./src/)

![Sengoku Codex Preview](docs/assets/preview.png)

## What It Is

Sengoku Codex 是一个面向桌面端浏览的静态网页地图项目，用来把现代日本都道府县、战国时代旧国名、代表性守护 / 大名、代表武将，放在同一张交互地图中学习。

这个项目特别适合旅行前做路线预习，或者在日本各地移动时快速对照“我现在所在的现代行政区”和“这里在战国史里到底属于哪里”。

## Highlights

- 覆盖日本 47 个都道府县
- 现代地名与战国旧国名采用日文 / 英文双语显示
- 默认全域视图以现代日本八大区域配色显示
- 点击都道府县后自动切换到局部放大视图
- 局部视图显示主要城市位置
- 右侧信息面板显示旧国名、区域、代表大名、代表武将与战国概要
- 前端已拆分为 `HTML + CSS + JavaScript` 多文件结构，便于后续维护

## Live Access

- GitHub Pages:
  `https://sakagami-yoshitoshi.github.io/sengoku-codex/`

如果页面还没刷新出来，通常是因为 GitHub Pages 工作流还在部署中，几分钟后再访问即可。

## Repository Layout

- `src/`
  - 项目源码目录
  - `index.html` 为主页面源码
  - `assets/app.css` 为共享样式
  - `assets/app.js` 为共享交互逻辑
  - `japan-prefectures.svg` 为矢量底图源码
- `docs/`
  - GitHub Pages 发布目录
  - `assets/preview.png` 为仓库首页预览图
- `outputs/`
  - 当前导出的交付版本备份
- `.github/workflows/`
  - GitHub Pages 自动部署工作流

## Local Use

直接在浏览器打开以下任一文件即可：

- `src/index.html`
- `outputs/japan-sengoku-map.html`

## Current Release

当前首个公开整理版本：

- `v0.1.0`

发布内容见：

- [CHANGELOG.md](./CHANGELOG.md)
- [GitHub Release v0.1.0](https://github.com/sakagami-yoshitoshi/sengoku-codex/releases/tag/v0.1.0)

## License

- [MIT](./LICENSE)
