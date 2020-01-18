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
    }
}