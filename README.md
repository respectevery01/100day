# 100 Day Writing Challenge

一个极简的 100 天写作计划页面，用 Astro 构建，Notion 风格。

## 为什么搞这个

每天写一篇文章，连续 100 天。

目的很简单：通过持续输出倒逼输入，记录成长轨迹。不追求长篇大论，哪怕是一条推特、一段思考，只要写下来就有价值。

选择极简设计是因为：
- 不需要花哨的页面，内容才是重点
- 数据用 TypeScript 管理，改一个文件就能更新
- 部署到任何静态托管平台，零成本维护

## 快速开始

### 1. Fork 仓库

点击右上角 **Fork** 按钮，复制到你自己的 GitHub 账号。

### 2. 配置数据

编辑 `src/data/days.ts`，添加你的文章链接：

```ts
export const days: DayEntry[] = [
  {
    day: 1,
    title: '文章标题',
    blogUrl: 'https://yourblog.com/post-1',    // 博客链接（可选）
    twitterUrl: 'https://x.com/you/status/...', // 推特链接（可选）
  },
  { day: 2, title: '待完成' }, // 留空表示未完成
];
```

### 3. 配置侧边栏（可选）

编辑 `src/data/sidebar.ts`，添加你的其他链接：

```ts
export const sidebarSections: LinkSection[] = [
  {
    title: '其他链接',
    links: [
      { name: '我的博客', url: 'https://blog.yours.com', description: '技术博客' },
    ],
  },
];
```

### 4. 配置页脚

编辑 `src/data/footer.ts`，修改社交媒体链接和版权信息。

### 5. 配置分析（可选）

编辑 `src/data/analytics.ts`，填入你的 Google Analytics 或 Umami ID。

### 6. 部署

```bash
npm install
npm run build
```

构建产物在 `dist/` 目录，可部署到：
- **GitHub Pages**: 推送 `dist/` 到 `gh-pages` 分支
- **Vercel**: 连接仓库后自动部署
- **Cloudflare Pages**: 同上
- **Netlify**: 同上

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:4321` 预览。

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- TypeScript - 数据管理
- 零依赖 CSS - 手写样式，无框架

## License

MIT
