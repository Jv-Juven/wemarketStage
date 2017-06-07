'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1490415777369_9966';
    // 数据库配置
    // config.mongoose = {
    //     url: 'mongodb://127.0.0.1:27017/wemarketStage',
    //     options: {}
    // }

    return config;
};
