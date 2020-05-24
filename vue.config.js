// const path = require('path')
// const webpack = require('webpack')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'components':'@/components',
                'content':'components/content',
                'common':'components/common',
                'assets':'@/assets',
                'views':'@/views',
                'network':'@/network'
            }
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    },
    // chainWebpack: config => {
    //     config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    //     //const svgRule = config.module.rule('svg')
    //     //svgRule.uses.clear()
    //     config.module
    //       .rule('svg-sprite-loader')
    //       .test(/\.svg$/)
    //       .include
    //       .add(resolve('src/icons')) //处理svg目录
    //       .end()
    //       .use('svg-sprite-loader')
    //       .loader('svg-sprite-loader')
    //       .options({
    //         symbolId: 'icon-[name]'
    //       })
    //   }
    //   configureWebpack: () => ({
    //     // resolve: {
    //     //   alias: require('./alias.config').webpack
    //     // }
    //     // module: {
    //     //   rules: [{
    //     //     test: /\.svg$/,
    //     //     use: [{
    //     //       loader: "svg-sprite-loader",
    //     //       options: {
    //     //         symbolId: 'icon-[name]'
    //     //       }
    //     //     }]
    //     //   }]
    //     // }
    //   })
    // chainWebpack(config) {
    //     config.module
    //       .rule("svg")
    //       .exclude.add(resolve("src/assets/icons")) // icons存放地（svg放的地方）
    //       .end();
    //     config.module
    //       .rule("icons")
    //       .test(/\.svg$/)
    //       .include.add(resolve("src/assets/icons")) // icons存放地（svg放的地方）
    //       .end()
    //       .use("svg-sprite-loader")
    //       .loader("svg-sprite-loader")
    //       .options({
    //         symbolId: "icon-[name]"
    //       })
    //       .end();
    //   }
    // chainWebpack: config => {
    //     const svgRule = config.module.rule('svg')
    
    //     // 清除已有的所有 loader。
    //     // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    //     svgRule.uses.clear()
    
    //     // 添加要替换的 loader
    //     svgRule
    //       .use('vue-svg-loader')
    //         .loader('vue-svg-loader')
    // }
}