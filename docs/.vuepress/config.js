module.exports = {
  title: '静态站点',
  dest: './dist',
  description: 'Just remak',
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@docs': '/docs',
        '@public': '/docs/.vuepress/public',
      }
    }
  },
   // 主题配置
   themeConfig: {
    // navbar: false, // 禁用导航栏
    displayAllHeaders: true, // 默认值：false
    // 侧边栏
    sidebar: [
      {
        title: '网络', // 标题
        collapsable: false, // 展开状态
        children: [
          '/computenetwork/websecurity',
          '/computenetwork/TCP',
        ]
      }
    ]
  }
}