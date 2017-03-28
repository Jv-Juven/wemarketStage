'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1490415777369_9966';
    // 数据库配置
    config.mysql = {
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '',
            // 数据库名
            database: 'webackstage'
        },
        // 是否加载到 app 上， 默认开启
        app: true,
        // 是否加载到 agent 上， 默认关闭
        agent: false
    }

    return config;
};
