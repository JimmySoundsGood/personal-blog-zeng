import { defineConfig } from 'vitepress';

const BASE_URL = '/personal-blog-zeng/'; // 争议解决律师

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: BASE_URL,
  title: '个人博客',
  description: '商事争议解决律师',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${BASE_URL}favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
