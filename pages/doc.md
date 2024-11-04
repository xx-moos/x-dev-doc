

## git

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

-  存在git的仓库，抹去原来的远程地址
```js
cd xx
git remote rename origin old-origin
git remote add origin **.git
git push -u origin --all
git push -u origin --tags
```

- git 开发分支覆盖dev 分支操作
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


## bun

```js
// .bunfig.toml

[install]
# 将默认注册表设置为字符串
registry = "https://registry.npmmirror.com"

```

## nodejs

```js
// npm

npm config set registry https://registry.npmmirror.com


npm i -g yarn pnpm nrm rimraf


nrm ls


nrm use taobao


// pnpm 

pnpm config set store-dir path/to/local/store

pnpm config set store-dir F:\\.store
```


## path
```js
mac

export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin/"


mac  设置代理

export https_proxy=http://127.0.0.1:12334 http_proxy=http://127.0.0.1:12334 all_proxy=socks5://127.0.0.1:12334


window 设置代理

set http_proxy=http://127.0.0.1:12334
set https_proxy=https://127.0.0.1:12334

```




