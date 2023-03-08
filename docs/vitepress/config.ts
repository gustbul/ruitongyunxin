import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "国信瑞通",
  description: "国信瑞通 PCDN 服务商",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '新用户向导', link: '/guide' }
    ],

    sidebar: [
      {
        text: '开始上机',
        items: [
          { text: '新用户', link: '/guide' },
          { text: 'X86 设备', link: '/guide/x86' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
