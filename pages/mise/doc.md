# 修改安装位置

```
MISE_CACHE_DIR
D:\editor\mise\packages\cache


MISE_CONFIG_DIR
D:\editor\mise\packages\config


MISE_DATA_DIR
D:\editor\mise\packages\lib


MISE_STATE_DIR
D:\editor\mise\packages\state

```


# Mise 配置说明文档

## 概述

Mise 是一个现代化的开发环境管理工具，类似于 asdf、direnv 和 make 的组合。它能够管理多种语言版本、环境变量和项目任务，为开发团队提供统一的环境配置方案。

## 核心配置项

### 1. 配置文件位置和优先级

Mise 支持多种配置文件，按以下优先级加载（高优先级覆盖低优先级）：

```
1. mise.{MISE_ENV}.local.toml  # 环境特定的本地配置
2. mise.local.toml             # 本地配置（不提交到版本控制）
3. mise.{MISE_ENV}.toml        # 环境特定配置
4. mise.toml                   # 项目配置
5. mise/config.toml            # 项目子目录配置
6. .config/mise.toml           # 用户配置
7. .config/mise/config.toml    # 用户主配置
8. .config/mise/conf.d/*.toml  # 配置片段目录
```

### 2. 基本配置文件结构

```toml
# mise.toml 基本结构
min_version = "2024.11.1"  # 最低要求的 mise 版本

[env]
# 环境变量配置
NODE_ENV = "development"
DATABASE_URL = "postgresql://localhost/myapp"

[tools]
# 工具版本配置
node = "20.11.0"
python = "3.11.5"
terraform = "1.0.0"

[tasks]
# 任务定义
[tasks.build]
run = "npm run build"
description = "构建项目"

[settings]
# 全局设置
jobs = 4
verbose = false
```

### 3. 环境变量配置

#### 基本环境变量
```toml
[env]
NODE_ENV = "production"
API_URL = "https://api.example.com"
DEBUG = "false"
```

#### PATH 配置
```toml
[env]
_.path = [
    "~/.local/share/bin",
    "{{config_root}}/node_modules/.bin",
    "tools/bin"
]
```

#### 动态环境变量
```toml
[env]
PROJECT_NAME = "{{ config_root | basename }}"
BUILD_DIR = "{{ config_root }}/build"
NODE_ENV = "{{ env.NODE_ENV | default(value='development') }}"
```

### 4. 工具版本配置

#### 基本工具配置
```toml
[tools]
node = "20"           # 指定版本
python = "3.11"       # 模糊版本
go = "latest"         # 最新版本
ruby = "lts"          # LTS 版本
```

#### 多版本配置
```toml
[tools]
python = ["3.10", "3.11"]  # 安装多个版本
```

#### 工具别名配置
```toml
[alias]
node = 'asdf:company/our-custom-node'
go = "core:go"
terraform = "aqua:hashicorp/terraform"
```

### 5. 全局设置配置

```toml
[settings]
# 基本设置
jobs = 4                                    # 并行任务数
verbose = false                             # 详细输出
yes = false                                 # 自动确认
raw = false                                 # 原始输出模式

# 更新和检查
always_keep_download = false                # 保留下载文件
always_keep_install = false                 # 保留安装文件
plugin_autoupdate_last_check_duration = '1 week'  # 插件更新检查频率

# 工具管理
not_found_auto_install = true              # 自动安装缺失工具
disable_tools = ['node']                    # 禁用特定工具
idiomatic_version_file_enable_tools = ['node']  # 启用惯用版本文件

# 网络设置
http_timeout = "30s"                        # HTTP 超时时间

# 文件设置
env_file = '.env'                           # 环境变量文件
shorthands_file = '~/.config/mise/shorthands.toml'  # 简写文件
disable_default_shorthands = false          # 禁用默认简写

# 状态显示
status = { 
    missing_tools = "if_other_versions_installed", 
    show_env = false, 
    show_tools = false 
}

# 实验性功能
experimental = true                         # 启用实验性功能
```

## Node.js 相关配置

### 1. Node.js 版本管理

#### 基本 Node.js 配置
```toml
[tools]
node = "20"              # 指定版本
node = "lts"             # LTS 版本
node = "latest"          # 最新版本
node = "22.0.0"          # 精确版本
```

#### Node.js 构建配置
```toml
# 从源码编译 Node.js
mise settings node.compile=1

# 设置构建风格（用于非官方构建）
mise settings node.flavor=musl
mise settings node.flavor=glibc-217

# 设置非官方构建镜像
mise settings node.mirror_url=https://unofficial-builds.nodejs.org/download/release/
```

### 2. npm 包管理

#### 全局 npm 包配置
```toml
[tools]
# 通过 npm 后端安装全局包
"npm:typescript" = "latest"
"npm:eslint" = "8.0.0"
"npm:prettier" = "latest"
"npm:jest" = "latest"
```

#### 默认 npm 包配置
创建 `~/.config/mise/node/default-packages` 文件：
```
lodash
request
express
typescript
eslint
```

### 3. Node.js 项目配置示例

#### 完整的 Node.js 项目配置
```toml
min_version = "2024.9.5"

[env]
# 添加 node_modules/.bin 到 PATH
_.path = ['{{config_root}}/node_modules/.bin']

# 项目信息
PROJECT_NAME = "{{ config_root | basename }}"
BIN_PATH = "{{ config_root }}/node_modules/.bin"
NODE_ENV = "{{ env.NODE_ENV | default(value='development') }}"

[tools]
# Node.js 版本
node = "{{ env['NODE_VERSION'] | default(value='lts') }}"

# 全局工具
"npm:typescript" = "latest"
"npm:eslint" = "latest"
"npm:jest" = "latest"

[tasks.install]
alias = "i"
description = "安装 npm 依赖"
run = "npm install"

[tasks.start]
alias = "s"
description = "启动开发服务器"
run = "npm run start"

[tasks.lint]
alias = "l"
description = "运行 ESLint"
run = "eslint src/"

[tasks.test]
description = "运行测试"
alias = "t"
run = "jest"

[tasks.build]
description = "构建项目"
alias = "b"
run = "npm run build"

[tasks.info]
description = "显示项目信息"
run = '''
echo "项目: $PROJECT_NAME"
echo "NODE_ENV: $NODE_ENV"
'''
```

#### 使用 pnpm 的 Node.js 项目配置
```toml
[tools]
node = '22'

[hooks]
# 启用 corepack 以管理 pnpm
postinstall = 'npx corepack enable'

[settings]
# 必须启用实验性功能才能使用 hooks
experimental = true

[env]
_.path = ['./node_modules/.bin']

[tasks.pnpm-install]
description = '使用 pnpm 安装依赖'
run = 'pnpm install'
sources = ['package.json', 'pnpm-lock.yaml', 'mise.toml']
outputs = ['node_modules/.pnpm/lock.yaml']

[tasks.dev]
description = '运行开发脚本'
run = 'node --run dev'
depends = ['pnpm-install']
```

### 4. Node.js 环境变量

#### 运行时环境变量
```bash
# 设置特定 Node.js 版本
MISE_NODE_VERSION=20

# 设置环境变量文件
MISE_ENV_FILE=.env

# 设置默认包文件
MISE_NODE_DEFAULT_PACKAGES_FILE=~/.config/mise/node/default-packages
```

## 任务配置

### 1. 基本任务配置

```toml
[tasks.build]
run = "npm run build"
description = "构建项目"
alias = "b"

[tasks.test]
run = "npm test"
description = "运行测试"
alias = "t"
```

### 2. 任务依赖和条件

```toml
[tasks.build]
run = "npm run build"
depends = ["test"]  # 依赖其他任务

[tasks.test]
run = "npm test"
sources = ["src/**/*.js", "test/**/*.js"]  # 输入文件
outputs = ["coverage/"]  # 输出文件
```

### 3. 任务参数配置

```toml
[tasks.test]
usage = '''
arg "file" description="要测试的文件" default="src/main.js"
'''
run = 'npm test {{arg(name="file")}}'
```

## 环境特定配置

### 1. 环境变量控制

```bash
# 设置活动环境
MISE_ENV=development
MISE_ENV=production
MISE_ENV=ci,test  # 多个环境，后者覆盖前者

# 覆盖配置文件发现
MISE_OVERRIDE_CONFIG_FILENAMES=mise.custom.toml
```

### 2. 环境特定配置文件

```toml
# mise.development.toml
[env]
NODE_ENV = "development"
DEBUG = "true"

[tools]
node = "latest"

# mise.production.toml
[env]
NODE_ENV = "production"
DEBUG = "false"

[tools]
node = "lts"
```

## 插件配置

### 1. 插件安装和配置

```toml
[plugins]
# 自定义插件仓库
elixir = "https://github.com/my-org/mise-elixir.git"
node = "https://github.com/my-org/mise-node.git#DEADBEEF"

# vfox 插件
vfox-npm = "https://github.com/jdx/vfox-npm"
```

### 2. 后端配置

```toml
[tools]
# 不同后端的工具配置
"core:go" = "latest"                    # 核心后端
"asdf:company/custom-node" = "latest"   # asdf 后端
"aqua:hashicorp/terraform" = "latest"   # aqua 后端
"npm:prettier" = "latest"               # npm 后端
"pipx:psf/black" = "latest"             # pipx 后端
```

## 常用命令

### 1. 配置管理命令

```bash
# 刷新path
mise reshim

# 查看当前配置
mise cfg

# 查看当前工具版本
mise ls --current

# 生成配置文件
mise config generate

# 获取配置值
mise config get tools.node

# 设置配置值
mise config set tools.node "20"

# 列出所有配置
mise config ls
```

### 2. 工具管理命令

```bash
# 安装工具
mise use node@20

# 全局安装
mise use -g node@20

# 安装最新版本
mise use node

# 列出已安装版本
mise ls node

# 执行特定版本
mise exec node@20 -- node -v
```

### 3. 任务执行命令

```bash
# 执行任务
mise task build

# 列出所有任务
mise task ls

# 执行任务并显示详细信息
mise task build --verbose
```

## 最佳实践

### 1. 项目配置建议

- 在项目根目录创建 `mise.toml` 文件
- 使用 `min_version` 指定最低 mise 版本要求
- 为不同环境创建不同的配置文件
- 使用环境变量进行动态配置

### 2. Node.js 项目建议

- 将 `node_modules/.bin` 添加到 PATH
- 使用 LTS 版本作为默认 Node.js 版本
- 通过 npm 后端管理全局工具
- 配置适当的任务依赖关系

### 3. 团队协作建议

- 将 `mise.toml` 提交到版本控制
- 使用 `.gitignore` 忽略 `mise.local.toml`
- 在 CI/CD 中缓存 mise 安装
- 提供清晰的配置文档

## 故障排除

### 1. 配置问题诊断

```bash
# 查看配置加载顺序
mise cfg

# 检查工具版本
mise ls --current

# 查看详细日志
MISE_LOG_LEVEL=debug mise task build
```

### 2. 常见问题

- 确保配置文件语法正确
- 检查工具版本是否已安装
- 验证环境变量设置
- 确认插件是否正确安装

## 总结

Mise 提供了强大而灵活的配置系统，能够满足各种开发环境的需求。通过合理配置，可以确保团队成员使用一致的工具版本和环境设置，提高开发效率和项目稳定性。Node.js 相关的配置特别丰富，支持多种包管理器和构建工具，是现代 JavaScript 项目开发的理想选择。
