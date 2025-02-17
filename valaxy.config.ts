import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

const safelist = [
  'i-ri-home-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  theme: 'valaxy-theme-yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '冬夏凝思',
    },
    bg_image: {
      enable: true,
      url: '/bg/bg-light.avif',
      dark: '/bg/bg-dark.avif',
      opacity: 1
    },
    pages: [
    ],
    footer: {
      since: 2024,
    },
  },
  unocss: { safelist },
})
