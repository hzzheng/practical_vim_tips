const chapter_01 = {
  text: 'Chapter 1',
  collapsible: true,
  items: [
    {
      text: 'tip 001',
      link: '/tip_001',
    },
    {
      text: 'tip 002',
      link: '/tip_002',
    },
    {
      text: 'tip 003',
      link: '/tip_003',
    },
    {
      text: 'tip 004',
      link: '/tip_004',
    },
    {
      text: 'tip 005',
      link: '/tip_005',
    },
    {
      text: 'tip 006',
      link: '/tip_006',
    },
  ],
}
const chapter_02 = {
  text: 'Chapter 2',
  collapsible: true,
  items: [
    {
      text: 'tip 007',
      link: '/tip_007',
    },
    {
      text: 'tip 008',
      link: '/tip_008',
    },
    {
      text: 'tip 009',
      link: '/tip_009',
    },
    {
      text: 'tip 0010',
      link: '/tip_010',
    },
    {
      text: 'tip 0011',
      link: '/tip_011',
    },
    {
      text: 'tip 0012',
      link: '/tip_012',
    },
  ],
}
const chapter_03 = {
  text: 'Chapter 3',
  collapsible: true,
  items: [
    {
      text: 'tip 0013',
      link: '/tip_013',
    },
  ],
}
export default {
  title: 'Practical Vim Tips',
  themeConfig: {
    nav: [
      {
        text: 'The Book',
        link: 'https://book.douban.com/subject/25869486/',
      },
    ],
    sidebar: [chapter_01, chapter_02, chapter_03],
  },
}
