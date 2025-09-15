# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于VitePress构建的开发文档网站，主要记录Git、Node.js、Docker等常用开发命令和配置。

## 项目结构

```
x-dev-doc/
├── .vitepress/              # VitePress配置目录
│   └── config.mts          # 主要配置文件（导航、侧边栏、搜索等）
├── pages/                  # 文档页面，按技术分类组织
│   ├── path.md            # 代理和PATH配置
│   ├── git/doc.md         # Git配置和命令
│   ├── docker/doc.md      # Docker命令和配置
│   ├── linux/doc.md       # Linux相关命令
│   ├── mac/doc.md         # macOS相关命令
│   ├── node/doc.md        # Node.js和npm配置
│   ├── bun/doc.md         # Bun包管理器配置
│   └── mise/doc.md        # mise版本管理工具
├── index.md               # 首页配置（VitePress frontmatter格式）
├── package.json           # 项目依赖和脚本
└── bun.lock              # Bun包管理器锁定文件
```

## 常用命令

### 开发调试
```bash
npm run docs:dev    # 启动开发服务器（默认端口5173）
# 或者使用bun
bun run docs:dev    # 使用bun启动开发服务器
```

### 构建部署
```bash
npm run docs:build   # 构建静态文件到 ./dist 目录
npm run docs:preview # 预览构建后的站点
```

## 添加新文档的工作流程

1. **创建新技术分类**：
   - 在 `pages/` 目录下创建新的技术目录，如 `pages/newtool/`
   - 创建 `pages/newtool/doc.md` 文件

2. **更新导航配置**：
   - 编辑 `.vitepress/config.mts`
   - 在 `sidebar` 数组中添加新的导航项：
     ```typescript
     { text: 'newtool', link: '/pages/newtool/doc' }
     ```

3. **文档格式规范**：
   - 使用 `js` 作为代码块语法高亮（统一风格）
   - 包含详细的命令示例和配置说明
   - 重点关注代理设置、镜像源配置等实用内容

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
- **Git配置**：代理设置、全局配置、仓库管理、分支操作
- **Node.js生态**：npm、pnpm配置、nrm镜像源管理
- **Bun包管理器**：现代JavaScript运行时和包管理器配置
- **Docker**：镜像加速、常用命令、容器管理
- **系统配置**：环境变量、代理设置、PATH配置
- **版本管理**：mise等现代版本管理工具配置
- **平台兼容**：macOS、Linux、Windows下的不同配置方法

## 架构设计原则

- **按技术分类组织**：每个技术栈独立目录，便于维护和查找
- **统一代码高亮**：所有代码块使用 `js` 语法，保持视觉一致性
- **实用性优先**：重点收录日常开发中的实际命令和配置
- **中文优化**：本地搜索支持中文，提升中文开发者体验

在修改或新增内容时，请严格遵循现有的目录结构和格式规范。