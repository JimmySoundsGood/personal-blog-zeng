---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 周一的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: xxx律师
    text: The peace of the people is the supreme law.
    tagline: /斜杠青年/人间清醒/工具控/
    image:
        # 首页右边的图片
        src: image/avatar-male.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/Algorithm/001_stack
    - theme: alt
      text: 个人成长
      link: /blog/bussiness/01.法律故问服务
# 按钮下方的描述
features:
  - icon: 🤹♀️
    title: Web前端
    details: 大厂程序媛，国内某互联网厂搬砖。
    link: /column/views/guide
  - icon: 👩🎨
    title: 喜欢美学
    details: 热爱一切美学，喜欢用各种设计工具造图。
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---

<script setup>
import Home from './.vitepress/components/Home.vue'
</script>

<Home />