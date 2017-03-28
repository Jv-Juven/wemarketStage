'use strict';

// had enabled by egg
// exports.static = true;
// 配置从这里开始
module.exports = {
    mysql: {
        enable: true,
        package: 'egg-mysql'
    },
    validate: {
        enable: true,
        package: 'egg-validate'
    }
}
