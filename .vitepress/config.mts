import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '开发文档',
  description: 'A VitePress Site',
  outDir: './dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/pages/path' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '代理path', link: '/pages/path' },
          { text: 'macos', link: '/pages/mac/doc' },
          { text: 'linux', link: '/pages/linux/doc' },
          { text: 'git', link: '/pages/git/doc' },
          { text: 'docker', link: '/pages/docker/doc' },
          { text: 'node', link: '/pages/node/doc' },
          { text: 'bun', link: '/pages/bun/doc' },
          { text: 'mise', link: '/pages/mise/doc' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/mu-mx/x-dev-doc' }],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
});
