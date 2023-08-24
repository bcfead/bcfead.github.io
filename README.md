---
article: false
title: BCFEAD
icon: note
---

> 开源工具、效率方法、心理学探索的自我提升笔记


## ✨ 初衷

曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。

更重要的是，**笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。**

因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。


## 🧱 笔记结构

- 置顶：日常习惯、健身、阅读；
- 代码：常用代码的学习和使用笔记；
- 软件应用：常用应用、Chrome 扩展和相关教程；
- 页面开发：页面插件和框架生成工具；
- 网站部署：网站相关的工具和知识收集；
- Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；
- 系统问题：Windows 系统优化和相关问题；
- 生活区：说明书、生活记录和小技巧；
- 博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。

## 🍥 搭建 LearnData


## 🔣 配置 LearnData

### 文档结构

LearnData 的网站配置和文本存放在 `docs` 文件夹下，文章与页面配置可参考主目录下的 `samplepage.md`。

docs 目录结构如下：

```bash
docs
|── .vuepress               # 网站配置
│   ├── config.ts           # 网站环境依赖和网站属性
│   ├── sidebar.ts          # 侧边栏
│   ├── navbar.ts           # 导航栏
│   ├── theme.ts            # 主题和插件
│   └── templateBuild.html  # 网页模板，网站关键词和统计
|── _posts                  # 博客文章目录
├── _temp                   # 草稿箱
├── reading                 # 读书笔记
├── anyname                 # 自定义笔记
├── blog.md                 # 博客页面
└── intro.md                # 博主个人介绍
```



### 读书笔记

读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 `docs/reading` 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。

如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 `docs\reading\index.html` 中的 Waline 区块。

```javascript
waline: {
   serverURL: "https://waline.newzone.top",
   ...
}
```

### 本地图片引用

为了避免在生成静态页面时出现 `Rollup failed to resolve import` 错误，本地图片必须保存在 `docs/.vuepress/public` 路径下。如果图片名称为 `1.png`，保存在 `docs/.vuepress/public/imgs` 路径下，则可以使用以下链接来引用该图片：`/imgs/1.png` 或使用 Markdown 图片链接：`![](/imgs/1.png)`。本方法也适用于将附件部署到网站上。

## 🖥️ 网站部署

在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。

很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。

### 同步到服务器

如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」>「Secrets」>「Action」，并添加 `FTP_HOST`、`FTP_PORT`、`FTP_USERNAME` 和 `FTP_PASSWORD` 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。

如果你不需要将文档同步到服务器的 FTP 上，则请删除 `.github/workflows/main.yml` 中 Sync files 区块的代码，以避免出现报错。或者根据 [GitHub 同步到 OSS](https://newzone.top/deploy/Static.html#同步到-oss) 步骤将网页部署到云存储上。

### 部署到 Vercel

Vercel 的速度比 GitHub Pages 稳定一些，不过「\*.vercel.app」域名已经被 DNS 污染。建议国内用户绑定自定义域名以获得更好的使用体验。

Vercel 部署步骤如下：

1. 点击 [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages) 或将 `https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages` 中的 `rockbenben/LearnData` 改为 `你的用户名/仓库名`，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。

2. 输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 `Create`。

   ![](https://img.newzone.top/2022-08-24-17-24-16.png "创建 Vercel 项目")

3. 接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 `Go to Dashboard` 跳转到应用的控制台。

   ![](https://img.newzone.top/2022-08-24-17-21-58.png "Vercel 部署成功提示")

4. 为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 `PERSONAL_TOKEN` 和 GitHub Actions。

   - 新建 [Personal access tokens](https://github.com/settings/tokens)，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。
   - 在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。
   - 将下方代码编辑到 `.github/workflows/main.yml` 文件末尾，注意修改 `dst_owner` 和 `dst_repo_name`。

   ```yml
   # 将页面更新到 Vercel
   - name: Copy file to Vercel
     if: always()
     uses: andstor/copycat-action@v3
     with:
       personal_token: ${{ secrets.PERSONAL_TOKEN }}
       src_path: /.
       dst_path: /
       # 你的用户名
       dst_owner: rockbenben
       # 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库
       dst_repo_name: LearnData-Vercel
       dst_branch: main
       src_branch: gh-pages
       clean: true
   ```

## 🤔 常见问题

### 网页显示异常

如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 `https://xxx.github.io/yyy`，则需要将 `docs/.vuepress/config.ts` 中的 base 改为 `/yyy`，其默认值为 `/`。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。


### 同步服务器报错
