const chapter_01 = {
  text: '1. The Vim Way',
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
  text: '2. Normal Mode',
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
      text: 'tip 010',
      link: '/tip_010',
    },
    {
      text: 'tip 011',
      link: '/tip_011',
    },
    {
      text: 'tip 012',
      link: '/tip_012',
    },
  ],
}
const chapter_03 = {
  text: '3. Insert Mode',
  collapsible: true,
  items: [
    {
      text: 'tip 013',
      link: '/tip_013',
    },
    {
      text: 'tip 014',
      link: '/tip_014',
    },
    {
      text: 'tip 015',
      link: '/tip_015',
    },
    {
      text: 'tip 016',
      link: '/tip_016',
    },
    {
      text: 'tip 017',
      link: '/tip_017',
    },
    {
      text: 'tip 018',
      link: '/tip_018',
    },
    {
      text: 'tip 019',
      link: '/tip_019',
    },
  ],
}
const chapter_04 = {
  text: '4. Visual Mode',
  collapsible: true,
  items: [
    {
      text: 'tip 020',
      link: '/tip_020',
    },
    {
      text: 'tip 021',
      link: '/tip_021',
    },
    {
      text: 'tip 022',
      link: '/tip_022',
    },
    {
      text: 'tip 023',
      link: '/tip_023',
    },
    {
      text: 'tip 024',
      link: '/tip_024',
    },
    {
      text: 'tip 025',
      link: '/tip_025',
    },
    {
      text: 'tip 026',
      link: '/tip_026',
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
    sidebar: [chapter_01, chapter_02, chapter_03, chapter_04],
  },
}
