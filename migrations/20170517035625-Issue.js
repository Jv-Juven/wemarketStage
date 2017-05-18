'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // const { INTEGER, STRING, DOUBLE, TEXT, BIGINT } = Sequelize;
    // return queryInterface.createTable('Issues', {
    //     id: {
    //         type: BIGINT,
    //         unique: true,
    //         autoIncrement: true,
    //         primaryKey: true
    //     },
    //     created_at: {
    //         type: BIGINT,
    //         allowNull: false
    //     },
    //     updated_at: {
    //         type: BIGINT,
    //         allowNull: false
    //     },
    //     version: {
    //         type: BIGINT,
    //         allowNull: false
    //     },
    //     goodsId: {
    //         type: INTEGER
    //         // unique: true,
    //         // autoIncrement: true
    //     }, // 发布物品id
    //     goodsName: {
    //         type: STRING(100)
    //     }, // 发布物品名称
    //     intro: {
    //         type: STRING(100),
    //         allowNull: true
    //     }, // 物品简介
    //     price: {
    //         type: DOUBLE,
    //         defaultValue: 0.00
    //     }, // 价格
    //     nickName: {
    //         type: STRING(100),
    //         // allowNull: true
    //     }, // 用户昵称
    //     contactWay: {
    //         type: INTEGER,
    //         defaultValue: 1
    //     }, // 联系方式， 1: QQ, 2: Wechat
    //     contactNum: {
    //         type: STRING(11)
    //     }, // 联系号码
    //     phone: {
    //         type: STRING(100),
    //         // allowNull: true
    //     }, // 手机号码
    //     sellerRemarks: {
    //         type: TEXT,
    //         allowNull: true
    //     }, // 卖家补充
    //     imgs: {
    //         type: STRING(1000000),
    //         allowNull: true
    //     }, // 多张图片
    //     goodsStatus: {
    //         type: INTEGER,
    //         defaultValue: 0
    //     } // 上传信息的物品状态 0: 未处理, 1: 通过审核, 2: 不通过审核；3: 过期下架；4：已售；5：违规；
    // });
    queryInterface.createTable('issues', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Issues');
  }
};
