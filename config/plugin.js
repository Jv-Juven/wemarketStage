'use strict';
const path = require('path');
// had enabled by egg
// exports.static = true;
// 配置从这里开始
module.exports = {
    // mongoose: {
    //     enable: true,
    //     package: 'egg-mongoose'
    // },
    valid: {
        enable: true,
        path: path.join(__dirname, "../lib/plugin/egg-valid")
    },
    cors: {
        enable: true,
        package: 'egg-cors'
    }
}
