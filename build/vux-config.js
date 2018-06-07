'use strict'

module.exports = {
  plugins: [
    'vux-ui', 'inline-manifest', 'progress-bar', 'duplicate-style',
    {
      name: 'less-theme',
      path: 'src/assets/style/theme.less'
    }
  ]
}
