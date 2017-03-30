module.exports = {
    security: {
        csrf: false
    },
    development: {
        ignoreDirs: ['app/components', 'app/views'], // 指定过滤的目录（包括子目录）
        watchDirs: ['lib'] // 指定监听的目录
    }

}
