/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
//  配置 purge 选项指定所有的 pages 和 components 文件，
//   使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      // 横纵比 aspect-[9/16]
      // aspectRatio: {
      //   '9/16': '9/16',
      // },
      // gridTemplateRows: {
      //   // grid布局 12列
      //   '12': 'repeat(12, minmax(0, 1fr))',
      // }
    },
  },
  plugins: [],
}
