# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于VitePress构建的开发文档网站，主要记录Git、Node.js、Docker等常用开发命令和配置。

## 项目结构

```
x-dev-doc/
├── .vitepress/              # VitePress配置目录
│   └── config.mts          # 主要配置文件（导航、侧边栏、搜索等）
├── pages/                  # 文档页面
│   ├── doc.md             # 主要文档页面（Git、Bun、Node.js配置）
│   ├── api-examples.md    # VitePress API示例
│   ├── docker.md          # Docker命令和配置
│   ├── linux.md           # Linux相关命令
│   └── mac.md             # macOS相关命令
├── index.md               # 首页配置（VitePress frontmatter格式）
└── package.json           # 项目依赖和脚本
```

## 常用命令

### 开发调试
```bash
npm run docs:dev    # 启动开发服务器
```

### 构建部署
```bash
npm run docs:build   # 构建静态文件到 ./dist 目录
npm run docs:preview # 预览构建后的站点
```

## 内容组织

- 所有文档页面使用Markdown格式
- 代码示例统一使用 `js` 语法高亮（即使不是JavaScript代码）
- 配置文件示例包含详细的代理设置、镜像源配置等
- 支持中文本地化搜索

## 配置要点

- VitePress配置位于 `.vitepress/config.mts`
- 输出目录设置为 `./dist`
- 启用了本地搜索功能，支持中文
- GitHub仓库链接：https://github.com/mu-mx/x-dev-doc

## 文档内容特点

主要包含开发环境相关的配置和命令：
- Git配置（代理、仓库管理、分支操作）
- Node.js生态工具配置（npm、pnpm、nrm镜像源）
- Docker加速和常用命令
- 系统环境变量和代理设置

在修改或新增内容时，请保持与现有文档的格式一致性。