import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: '国信瑞通',
  description: '国信瑞通 PCDN 服务商',
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
            {
        text: '用户上机',
        items: [
          { text: '盒子', link: '/guide/index' },
          { text: 'x86', link: '/guide/x86' },
          { text: 'Item C', link: '/item-3' },
        ],
    ],

    sidebar: [
      {
        text: '开始上机',
        items: [
          { text: '新用户', link: '/guide/index' },
          { text: 'X86 设备', link: '/guide/x86' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
