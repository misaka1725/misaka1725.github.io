import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://atri-ginka.pages.dev/',
  lang: 'zh-CN',
  title: '冬夏凝思',
  author: {
    name: 'ATRI&GINKA拜年祭',
    avatar: '/avatar/avatar.avif'
  },
  description: '拜年祭快要来啦！ヾ(≧▽≦*)o',
  social: [
    {
      name: 'QQ 群 1050458482',
      link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4YnAvzPYqPsBoETqZoY3kbFkl1cT5s3H&authKey=2QRQmm9kTFA1UFF7dDuf1RlMzyxefl8351RSbUxq0oFAi4xyabKG5gRJounMWe4o&noverify=0&group_code=868266603',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/341137896?spm_id_from=333.337.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },

  sponsor: {
    enable: false,
    title: '感谢大家的支持！',
    methods: [
    ],
  },
})
