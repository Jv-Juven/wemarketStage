module.exports = {
    security: {
        csrf: {
            enable: false
        },
        methodnoallow: {
            enable: false
        },
        domainWhiteList: [
            'http://10.100.31.217:8888',
            'http://10.100.31.31'
        ]
    },
    cors: {
        credentials: 'Access-Control-Allow-Credentials'
    },
    // development: {
    //     ignoreDirs: ['app/components', 'app/views'], // 指定过滤的目录（包括子目录）
    //     watchDirs: ['lib'] // 指定监听的目录
    // },
    // middleware: [ 'corsConfig' ]
}
