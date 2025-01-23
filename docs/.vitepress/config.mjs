import { defineConfig } from 'vitepress';
import navbar from './navbar.mjs';
import sidebar from './sidebar.mjs';

const BASE_URL = '/personal-blog-zeng/'; // 争议解决律师

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: BASE_URL,
  title: 'personal-blog-zeng',
  description: '商事争议解决律师',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  themeConfig: {
    logo: `/image/avatar-male.png`,
    // 配置导航栏
    nav: navbar,
    // 配置侧边栏
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outline: {
      level: [2, 6],
      label: '目录',
    },
  },
});
