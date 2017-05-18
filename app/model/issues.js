module.exports = app => {
    return app.model.define('Issues', {
        id: {
            type: app.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: app.Sequelize.STRING
    }, {
        // 不要忘了启用 timestamps
        timestamps: false,
        // 禁止修改表名. 默认情况下
        // sequelize会自动使用传入的模型名（define的第一个参数）做为表名
        // 如果你不想使用这种方式你需要进行以下设置
        freezeTableName: true,
        tableName: 'Issues'
    });
}
