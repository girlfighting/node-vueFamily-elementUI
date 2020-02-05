module.exports = {
  //构建项目目录
  outputDir: "nodeadmin",
  //部署应用包时基本的URL，设置成./不支持HTML5 history和构建多页面应用
  publicPath: "./",
  //生产环境打包时不启用source map
  productionSourceMap: false,
  //eslint-loader 保存时是否检查
  lintOnSave: true,
  //结束一个函数，基于webpack-chain的chainableConfig实例，允许对内部的webpack进行更细粒度的修改
  chainWebpack: config => {},
  //如果这个值是一个对象，则会通过webpack-merge合并到最终的配置中。
  //如果是一个函数，则会接收被解析的配置作为参数，该函数可以修改配置但不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  configureWebpack: config => {},
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 构建多页时使用
  pages: undefined,
  //css的相关配置
  css: {
    //是否启用css modules
    // 当为true时，css文件名可省略 module 默认为 false
    requireModuleExtension: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: true,
    //是否开启css sourceMap
    //设置为 true 之后可能会影响构建的性能
    sourceMap: true,
    //css的预设器配置项
    //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      sass: {
        //设置全局样式
        prependData: '@import "@/styles/common.scss";'
      }
    }
  },
  //webpack-dev-server 相关配置
  devServer: {
    //编译完成是否自动打开浏览器
    open: true,
    //访问端口
    port: process.env.PORT ? +process.env.PORT : 80,
    //指定使用地址，默认localhsot,0.0.0.0代表可以被外界访问
    host: "0.0.0.0",
    //编译失败时是否刷新页面
    https: false,
    //是否开启热加载
    hot: true,
    //设置代理
    proxy: null,
    //全屏模式下是否显示警告和错误脚本
    overlay: {
      warnings: true,
      errors: true
    }
  },
  //第三方插件配置
  pluginOptions: {},
  //pwa的相关配置
  pwa: {}
};
