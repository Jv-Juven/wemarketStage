'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1490415777369_9966';
    // 数据库配置
    config.sequelize = {
        dialect: 'mariadb',
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        username: 'root',
        // 密码
        password: '',
        // 数据库名
        database: 'webackstage'
    }

    return config;
};
