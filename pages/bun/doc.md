## bun

```js
// .bunfig.toml

[install]
# 将默认注册表设置为字符串
registry = "https://registry.npmmirror.com"

```




# Bun 安装配置完全手册

## 目录
- [Bun 简介](#bun-简介)
- [Windows 自定义安装位置配置](#windows-自定义安装位置配置)
- [环境变量配置](#环境变量配置)
- [bunfig.toml 配置文件详解](#bunfigtoml-配置文件详解)
- [常见用法与最佳实践](#常见用法与最佳实践)
- [性能优化配置](#性能优化配置)
- [故障排除](#故障排除)

## Bun 简介

Bun 是一个极快的 JavaScript 运行时、包管理器、测试运行器和打包工具。它旨在替代 Node.js，提供更快的性能和更好的开发体验。

### 核心特性
- **极快的运行时**: 基于 JavaScriptCore 引擎
- **内置包管理器**: 比 npm/yarn 快 20-30 倍
- **原生 TypeScript 支持**: 无需额外配置
- **内置测试框架**: Jest 兼容的 API
- **零配置打包**: 支持前端和后端打包
- **Web 标准 API**: 支持 Fetch、WebSocket、File API 等

## Windows 自定义安装位置配置

### 方法一：环境变量配置安装目录

#### 1. 设置 BUN_INSTALL 环境变量

**PowerShell 方法：**
```powershell
# 临时设置（当前会话有效）
$env:BUN_INSTALL = "D:\bun"

# 永久设置（用户级别）
[System.Environment]::SetEnvironmentVariable(
    "BUN_INSTALL",
    "D:\bun",
    [System.EnvironmentVariableTarget]::User
)
```

**CMD 方法：**
```cmd
# 临时设置
set BUN_INSTALL=D:\bun

# 永久设置（需要管理员权限）
setx BUN_INSTALL "D:\bun" /M
```

#### 2. 安装 Bun 到自定义目录

```powershell
# 使用 PowerShell 安装
powershell -c "irm bun.sh/install.ps1|iex"
```

#### 3. 添加 Bun 到 PATH

```powershell
# 获取当前 PATH
$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")

# 添加 Bun 二进制目录到 PATH
$newPath = $currentPath + ";$env:BUN_INSTALL\bin"

# 设置新的 PATH
[System.Environment]::SetEnvironmentVariable(
    "Path",
    $newPath,
    [System.EnvironmentVariableTarget]::User
)
```

### 方法二：手动安装

#### 1. 下载 Bun 二进制文件

```powershell
# 创建目标目录
New-Item -ItemType Directory -Path "D:\bun" -Force

# 下载最新版本
Invoke-WebRequest -Uri "https://github.com/oven-sh/bun/releases/latest/download/bun-windows-x64.zip" -OutFile "D:\bun\bun.zip"

# 解压到目标目录
Expand-Archive -Path "D:\bun\bun.zip" -DestinationPath "D:\bun" -Force

# 删除压缩包
Remove-Item "D:\bun\bun.zip"
```

#### 2. 配置环境变量

```powershell
# 设置 BUN_INSTALL
[System.Environment]::SetEnvironmentVariable("BUN_INSTALL", "D:\bun", [System.EnvironmentVariableTarget]::User)

# 添加到 PATH
$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
$newPath = $currentPath + ";D:\bun"
[System.Environment]::SetEnvironmentVariable("Path", $newPath, [System.EnvironmentVariableTarget]::User)
```

## 环境变量配置

### 核心环境变量

```bash
# Bun 安装目录
# BUN_INSTALL=D:\bun

# 全局包安装目录
BUN_INSTALL_GLOBAL_DIR
D:\editor\bun\install\global
# 缓存目录
BUN_INSTALL_CACHE_DIR
D:\editor\bun\install\cache


# 全局二进制文件目录
BUN_INSTALL_BIN=D:\bun\bin


# 注册表配置
BUN_CONFIG_REGISTRY=https://registry.npmjs.org
BUN_CONFIG_TOKEN=your_token_here

# 锁定文件配置
BUN_CONFIG_YARN_LOCKFILE=true
BUN_CONFIG_SKIP_SAVE_LOCKFILE=false
BUN_CONFIG_SKIP_LOAD_LOCKFILE=false
BUN_CONFIG_SKIP_INSTALL_PACKAGES=false

# GitHub 配置（用于 bun create）
GITHUB_API_DOMAIN=api.github.com
GITHUB_TOKEN=your_github_token
```

### 设置环境变量的方法

#### 1. 系统环境变量（推荐）

**通过系统设置：**
1. 右键"此电脑" → "属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"用户变量"中添加上述变量

#### 2. .env 文件

在项目根目录创建 `.env` 文件：

```env
BUN_INSTALL=D:\bun
BUN_INSTALL_GLOBAL_DIR=D:\bun\install\global
BUN_INSTALL_BIN=D:\bun\bin
BUN_INSTALL_CACHE_DIR=D:\bun\install\cache
```

#### 3. PowerShell Profile

编辑 PowerShell Profile：

```powershell
# 打开配置文件
notepad $PROFILE

# 添加以下内容
$env:BUN_INSTALL = "D:\bun"
$env:BUN_INSTALL_GLOBAL_DIR = "D:\bun\install\global"
$env:BUN_INSTALL_BIN = "D:\bun\bin"
$env:BUN_INSTALL_CACHE_DIR = "D:\bun\install\cache"
```

## bunfig.toml 配置文件详解

在项目根目录或用户主目录创建 `bunfig.toml` 文件：

```toml
# 包管理器配置
[install]

# 全局包安装目录
globalDir = "D:\\bun\\install\\global"

# 全局二进制文件目录
globalBinDir = "D:\\bun\\bin"

# 缓存配置
[install.cache]
# 缓存目录
dir = "D:\\bun\\install\\cache"
# 禁用缓存
disable = false
# 禁用清单缓存
disableManifest = false

# 注册表配置
registry = "https://registry.npmjs.org"

# 依赖安装配置
production = false
optional = true
dev = true
peer = true

# 锁定文件配置
[install.lockfile]
save = true
print = "yarn"  # 可选：同时生成 yarn.lock

# 作用域注册表配置
[install.scopes]
"@myorg" = { token = "$NPM_TOKEN", url = "https://registry.myorg.com/" }

# 测试配置
[test]
root = "./src"
timeout = 5000

# 运行时配置
[run]
# 自动安装行为
auto = "auto"  # auto, fallback, force

# 加载器映射
[loader]
".bagel" = "tsx"

# 安全扫描器配置
[install.security]
scanner = "@acme/bun-security-scanner"
```

### 配置优先级

1. 命令行参数
2. 环境变量
3. bunfig.toml
4. 默认值

## 常见用法与最佳实践

### 1. 项目初始化

```bash
# 创建新项目
bun create react-app my-app
bun create next-app my-next-app
bun create vite my-vite-app

# 初始化空项目
bun init
```

### 2. 包管理

```bash
# 安装依赖
bun install

# 添加依赖
bun add react react-dom
bun add -d typescript @types/node  # 开发依赖
bun add -g typescript              # 全局安装

# 移除依赖
bun remove react

# 更新依赖
bun update
bun update --latest
```

### 3. 脚本运行

```bash
# 运行脚本
bun run dev
bun run build

# 直接运行文件
bun index.ts
bun index.jsx

# 使用 bunx（类似 npx）
bunx create-react-app my-app
```

### 4. 测试

```bash
# 运行测试
bun test

# 监听模式
bun test --watch

# 更新快照
bun test --update-snapshots

# 生成覆盖率报告
bun test --coverage
```

### 5. 打包

```bash
# 打包前端应用
bun build --outdir ./dist ./src/index.tsx

# 打包为单个文件
bun build --compile --outfile my-app ./cli.ts

# 创建可执行文件
bun build --compile --target=bun ./server.ts
```

### 6. 开发服务器

```bash
# 启动开发服务器
bun dev

# 热重载
bun --watch server.ts

# 热更新
bun --hot server.ts
```

## 性能优化配置

### 1. 缓存优化

```toml
# bunfig.toml
[install.cache]
# 使用 SSD 作为缓存目录
dir = "D:\\SSD\\bun-cache"
disable = false
disableManifest = false
```

### 2. 并发优化

```toml
[install]
# 增加并发脚本数量
concurrentScripts = 32

# 网络并发
[install.network]
concurrency = 64
```

### 3. 内存优化

```bash
# 使用较少内存模式
bun --smol run dev

# 暴露垃圾回收
bun --expose-gc run dev
```

### 4. 后端优化

```bash
# 使用平台特定优化
bun install --backend hardlink  # Linux
bun install --backend clonefile # macOS
bun install --backend copyfile  # Windows
```

## 故障排除

### 1. 安装问题

**问题**: Bun 安装失败
```bash
# 解决方案：清理并重新安装
rm -rf ~/.bun
curl -fsSL https://bun.sh/install | bash
```

**问题**: PATH 未正确设置
```powershell
# 检查 PATH
echo $env:PATH

# 手动添加到 PATH
$env:PATH += ";D:\bun\bin"
```

### 2. 权限问题

**问题**: 全局安装权限不足
```bash
# 解决方案：使用用户级安装
bun config set globalDir "D:\bun\install\global"
bun config set globalBinDir "D:\bun\bin"
```

### 3. 缓存问题

**问题**: 缓存损坏
```bash
# 清理缓存
bun pm cache rm

# 或手动删除
rm -rf ~/.bun/install/cache
```

### 4. 网络问题

**问题**: 下载超时
```toml
# bunfig.toml
[install]
# 设置代理
registry = "https://registry.npmmirror.com/"
```

### 5. 版本冲突

**问题**: 版本不兼容
```bash
# 检查版本
bun --version

# 更新到最新版本
bun upgrade

# 安装特定版本
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"
```

## 验证安装

### 1. 检查安装

```bash
# 检查版本
bun --version

# 检查安装位置
where bun  # Windows
which bun  # Linux/macOS

# 检查配置
bun pm ls
```

### 2. 测试功能

```bash
# 创建测试项目
mkdir test-bun && cd test-bun
bun init -y

# 添加依赖
bun add express

# 创建测试文件
echo "console.log('Hello Bun!')" > index.js

# 运行测试
bun index.js
```

### 3. 性能测试

```bash
# 安装速度测试
time bun install

# 运行速度测试
time bun index.js
```

## 总结

通过以上配置，您可以：

1. **避免 C 盘占用**: 将所有 Bun 相关文件安装到其他磁盘
2. **优化性能**: 配置合适的缓存和并发设置
3. **提高开发效率**: 使用 Bun 的快速包管理和构建功能
4. **避免常见问题**: 通过正确的环境变量和配置文件设置

记住定期更新 Bun 以获得最新功能和性能改进：

```bash
bun upgrade
```
