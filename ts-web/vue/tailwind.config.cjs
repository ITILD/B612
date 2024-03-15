/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 配置 purge 选项指定所有的 pages 和 components 文件，
  // 使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。
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
      colors: {
        // 暗色主题
        //主色-背景
        'gray-1': 'rgb(28,33,40)',
        //主色-内容
        'gray-2': 'rgb(34, 39, 46)',
        //主色-细致内容
        'gray-3': 'rgb(45, 51, 59)',
        //主色-内容-按钮
        'gray-4': 'rgb(55, 62, 71)',
        //主色-分割线
        'gray-5': 'rgb(68, 76, 86)',
        //大字符
        'gray-6': 'rgb(173, 186, 199)',
        //符号编码蓝色
        'blue-1': 'rgb(83, 155, 245)',
        //符号编码绿色
        'green-1': 'rgb(61, 156, 90)',
        //符号编码深绿色
        'green-2': 'rgb(52, 125, 57)',
      },
    },
  },
  plugins: [
    // 排版 防止marked渲染出html被base更改 https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
  ],
}
