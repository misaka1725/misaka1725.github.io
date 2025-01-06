import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  theme: 'valaxy-theme-yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '冬夏凝思',
    },
    bg_image: {
      enable: true,
      url: '/bg/bg-light-new.webp',
      dark: '/bg/bg-dark-new.webp',
      opacity: 1
    },
    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的小可爱们',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],
    footer: {
      since: 2024,
      //beian: {
      //  enable: false,
      //  icp: '苏ICP备17038157号',
      //},
    },
  },
  unocss: { safelist },
})
