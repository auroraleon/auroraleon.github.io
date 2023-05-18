import { defineUserConfig, defaultTheme } from 'vuepress';
export default defineUserConfig({
  lang: 'zh-CN',
  title: '梁工春日AuroraLion',
  description: '分享计算机科学、微电子工程、Java后端、Vue前端等；以及相关的教程、指南、手册等知识',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  port: 20001,
  theme: defaultTheme({
    logo: '/logo.jpg',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文章',
        link: '/backend'
      }
    ]
  })
});
