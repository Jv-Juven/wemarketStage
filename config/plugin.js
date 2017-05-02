'use strict';
const path = require('path');
// had enabled by egg
// exports.static = true;
// 配置从这里开始
module.exports = {
    mysql: {
        enable: true,
        package: 'egg-sequelize'
    },
    valid: {
        enable: true,
        path: path.join(__dirname, "../lib/plugin/egg-valid")
    }
}
