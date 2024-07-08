import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
const base = process.env.GITHUB_ACTIONS === 'true'
  ? '/jxi-my-blog/'
  : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: '我的博客',
  description: '基于vitePress的技术分享博客',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    //['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.jpg',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'leetcode',
        items: [
          { text: '二叉树', link: '/leetcode/二叉树/' },
          {text: '回溯', link: '/leetcode/回溯/'},
          {text: '贪心', link: '/leetcode/贪心/'},
          {text: '动态规划', link: '/leetcode/动态规划/'},
          { text: '数组', link: '/leetcode/数组/' },
          { text: '滑动窗口', link: '/leetcode/滑动窗口/' },
          { text: '链表', link: '/leetcode/链表/' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'Javascript', link: '/前端/Javascript/' },
          { text: 'Keycloak', link: '/前端/KeyCloak/' },
          {text: 'Jest', link: '/前端/Jest/'},
          { text: 'NestJS', link: '/前端/NestJS/' },
          { text: 'React', link: '/前端/React/' },
          { text: 'Typescript', link: '/前端/Typescript/'}
        ]
      },
      {text: '后端', items: [
        { text: 'java web', link: '/后端/java web/' },
        { text: 'maven', link: '/后端/maven/' },
        { text: 'mybatis', link: '/后端/mybatis教程/' },
        { text: 'mysql', link: '/后端/mysql学习/' },
        { text: 'shiro', link: '/后端/shiro教程/' },
        { text: 'spring', link: '/后端/spring/' },
        {text: 'java虚拟机', link: '/后端/深入理解java虚拟机/' }
      ]},
      {
        text: '通用工具',
        items: [
          { text: 'markdown', link: '/通用工具/Markdown/' },
          { text: 'vim', link: '/通用工具/vim基本使用/' },
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xilovesyu'
      }
    ]
  }
})
