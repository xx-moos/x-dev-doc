## 快速入门

```js
[http "https://github.com"]
	proxy = socks5://127.0.0.1:7898
[https "https://github.com"]
	proxy = socks5://127.0.0.1:7898
```

- 全局初始化

```js
git config --global user.name "xx"
git config --global user.email "xx@qq.com"
```

- 新仓库

```js
git clone **.git
cd xx
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

- 存在的文件夹，加入 git

```js
cd existing_folder
git init
git remote add origin **.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

- 存在 git 的仓库，抹去原来的远程地址

```js
cd xx
git remote rename origin old-origin
git remote add origin **.git
git push -u origin --all
git push -u origin --tags
```

- git 开发分支覆盖 dev 分支操作

```js
如果要将 feat-3.3.4 分支的内容合并到 dev 分支，并且完全以 feat-3.3.4 分支的内容为准，可以按照以下步骤操作：

切换到 dev 分支：

git checkout dev
重设 dev 分支为 feat-3.3.4 分支的内容：

git reset --hard feat-3.3.4
这会将 dev 分支重置为与 feat-3.3.4 分支相同的内容，丢弃掉 dev 分支上的所有其他更改。

推送更改（如果需要）：
如果 dev 分支已经推送到远程仓库，
并且你需要将其更新为 feat-3.3.4 的内容，
请使用强制推送（注意：强制推送可能会影响其他人的工作，只在确定安全的情况下使用）：

git push origin dev --force
或者，如果你在本地工作，可以直接进行后续的开发或提交。

通过以上步骤，你已经成功将 feat-3.3.4 分支的内容合并到 dev 分支，并且 dev 分支现在与 feat-3.3.4 分支完全一致。
```

## 1. 仓库初始化与克隆

```bash
# 初始化本地仓库
git init

# 克隆远程仓库
git clone <repository-url>
git clone https://github.com/username/repository.git
git clone git@github.com:username/repository.git

# 克隆指定分支
git clone -b <branch-name> <repository-url>
```

## 2. 配置用户信息

```bash
# 设置全局用户名和邮箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 设置当前仓库的用户名和邮箱
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 查看配置信息
git config --list
git config user.name
git config user.email
```

## 3. 文件操作

```bash
# 查看文件状态
git status

# 添加文件到暂存区
git add <filename>                    # 添加指定文件
git add .                            # 添加所有文件
git add *.js                         # 添加所有js文件
git add src/                         # 添加src目录下所有文件

# 提交更改
git commit -m "提交信息"
git commit -am "提交信息"             # 添加并提交已跟踪的文件

# 查看提交历史
git log
git log --oneline                    # 简洁显示
git log --graph                      # 图形化显示
git log --all --graph --oneline      # 显示所有分支的图形化历史
```

## 4. 分支操作

```bash
# 查看分支
git branch                          # 查看本地分支
git branch -r                       # 查看远程分支
git branch -a                       # 查看所有分支

# 创建和切换分支
git branch <branch-name>            # 创建分支
git checkout <branch-name>          # 切换分支
git checkout -b <branch-name>       # 创建并切换分支
git switch <branch-name>            # 切换分支（新命令）
git switch -c <branch-name>         # 创建并切换分支（新命令）

# 删除分支
git branch -d <branch-name>         # 删除本地分支
git branch -D <branch-name>         # 强制删除本地分支
git push origin --delete <branch-name>  # 删除远程分支
```

## 5. 远程仓库操作

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin <repository-url>

# 推送代码
git push origin <branch-name>
git push origin main                # 推送到main分支
git push -u origin main             # 设置上游分支并推送

# 拉取代码
git pull origin <branch-name>
git fetch origin                    # 获取远程更新但不合并
git merge origin/<branch-name>      # 合并远程分支

# 推送所有分支
git push --all origin
```

## 6. 撤销操作

```bash
# 撤销工作区修改
git checkout -- <filename>         # 撤销指定文件的修改
git restore <filename>              # 撤销指定文件的修改（新命令）

# 撤销暂存区修改
git reset HEAD <filename>           # 取消暂存指定文件
git restore --staged <filename>     # 取消暂存指定文件（新命令）

# 撤销提交
git reset --soft HEAD~1             # 撤销最后一次提交，保留更改
git reset --mixed HEAD~1            # 撤销最后一次提交和暂存，保留工作区更改
git reset --hard HEAD~1             # 完全撤销最后一次提交

# 修改最后一次提交
git commit --amend -m "新的提交信息"
```

## 7. 标签操作

```bash
# 创建标签
git tag <tag-name>                  # 创建轻量标签
git tag -a <tag-name> -m "标签信息"  # 创建附注标签

# 查看标签
git tag
git show <tag-name>

# 推送标签
git push origin <tag-name>          # 推送指定标签
git push origin --tags              # 推送所有标签

# 删除标签
git tag -d <tag-name>               # 删除本地标签
git push origin --delete <tag-name> # 删除远程标签
```

## 8. 其他常用命令

```bash
# 查看差异
git diff                            # 查看工作区与暂存区的差异
git diff --cached                   # 查看暂存区与最后一次提交的差异
git diff HEAD                       # 查看工作区与最后一次提交的差异

# 暂存更改
git stash                           # 暂存当前更改
git stash list                      # 查看暂存列表
git stash pop                       # 恢复并删除最新的暂存
git stash apply                     # 恢复最新的暂存但不删除
git stash drop                      # 删除最新的暂存

# 查看文件历史
git log --follow <filename>         # 查看文件的提交历史
git blame <filename>                # 查看文件的每一行是谁修改的
```

## SSH 密钥生成和配置

### 1. 生成 SSH 密钥

```bash
# 生成 RSA 密钥（推荐）
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

# 生成 ED25519 密钥（更安全，推荐）
ssh-keygen -t ed25519 -C "your.email@example.com"

# 生成 ECDSA 密钥
ssh-keygen -t ecdsa -b 521 -C "your.email@example.com"
```

### 2. SSH 密钥生成过程

```bash
# 运行生成命令后，会提示输入以下信息：
# 1. 密钥保存位置（默认：~/.ssh/id_rsa）
# 2. 密码短语（可选，建议设置）
# 3. 确认密码短语

# 示例输出：
# Generating public/private rsa key pair.
# Enter file in which to save the key (/c/Users/username/.ssh/id_rsa):
# Enter passphrase (empty for no passphrase):
# Enter same passphrase again:
# Your identification has been saved in /c/Users/username/.ssh/id_rsa.
# Your public key has been saved in /c/Users/username/.ssh/id_rsa.pub.
```

### 3. 查看和管理 SSH 密钥

```bash
# 查看公钥内容
cat ~/.ssh/id_rsa.pub
cat ~/.ssh/id_ed25519.pub

# 查看私钥内容（谨慎操作）
cat ~/.ssh/id_rsa
cat ~/.ssh/id_ed25519

# 列出所有 SSH 密钥
ls -la ~/.ssh/

# 测试 SSH 连接
ssh -T git@github.com
ssh -T git@gitlab.com
```

### 4. 配置 SSH 客户端

```bash
# 创建或编辑 SSH 配置文件
nano ~/.ssh/config
# 或
vim ~/.ssh/config

# 配置文件示例：
# Host github.com
#     HostName github.com
#     User git
#     IdentityFile ~/.ssh/id_rsa
#     IdentitiesOnly yes
#
# Host gitlab.com
#     HostName gitlab.com
#     User git
#     IdentityFile ~/.ssh/id_ed25519
#     IdentitiesOnly yes
```

### 5. 添加 SSH 密钥到 SSH Agent

```bash
# 启动 SSH Agent
eval "$(ssh-agent -s)"

# 添加私钥到 SSH Agent
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_ed25519

# 查看已添加的密钥
ssh-add -l

# 删除所有密钥
ssh-add -D
```

### 6. 将公钥添加到 Git 平台

#### GitHub

1. 复制公钥内容：`cat ~/.ssh/id_rsa.pub`
2. 登录 GitHub → Settings → SSH and GPG keys
3. 点击 "New SSH key"
4. 粘贴公钥内容并保存

#### GitLab

1. 复制公钥内容：`cat ~/.ssh/id_rsa.pub`
2. 登录 GitLab → Preferences → SSH Keys
3. 粘贴公钥内容并保存

#### Gitee（码云）

1. 复制公钥内容：`cat ~/.ssh/id_rsa.pub`
2. 登录 Gitee → 设置 → SSH 公钥
3. 粘贴公钥内容并保存

### 7. 测试 SSH 连接

```bash
# 测试 GitHub 连接
ssh -T git@github.com

# 测试 GitLab 连接
ssh -T git@gitlab.com

# 测试 Gitee 连接
ssh -T git@gitee.com

# 成功连接会显示类似信息：
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

### 8. 常见问题解决

```bash
# 如果遇到权限问题，设置正确的文件权限
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub

# 如果 SSH Agent 没有运行，手动启动
eval "$(ssh-agent -s)"

# 如果密钥没有添加到 SSH Agent，手动添加
ssh-add ~/.ssh/id_rsa

# 查看详细的 SSH 连接调试信息
ssh -vT git@github.com
```

## 常用 Git 工作流

### 1. 标准工作流

```bash
# 1. 克隆仓库
git clone <repository-url>
cd <repository-name>

# 2. 创建功能分支
git checkout -b feature/new-feature

# 3. 进行开发
# ... 编写代码 ...

# 4. 添加和提交更改
git add .
git commit -m "feat: 添加新功能"

# 5. 推送分支
git push -u origin feature/new-feature

# 6. 创建 Pull Request/Merge Request
# 在 Git 平台上创建 PR/MR

# 7. 合并后删除分支
git checkout main
git pull origin main
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### 2. 紧急修复工作流

```bash
# 1. 从主分支创建热修复分支
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# 2. 修复问题
# ... 修复代码 ...

# 3. 提交修复
git add .
git commit -m "fix: 修复关键bug"

# 4. 推送并创建 PR
git push -u origin hotfix/critical-bug-fix
```

