module.exports = app => {
    return class Info extends app.Service {
        async find (params) {
            const InfoModel = app.model.Info;
            let { name, age } = params;
            let result = await InfoModel.create({
                name,
                age
            }, function (error) {
                if (error) throw error;
                console.log('插入数据成功');
            });
            return result;
        }
    }
}
