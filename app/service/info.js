module.exports = app => {
    return class Info extends app.Service {
        async find (ctx) {
            // const result = await app.model.Issues.create({
            //     version: 1,
            //     goodsName: '面膜',
            //     intro: '第一条数据'
            // });
            // const info = await app.model.Issues.findAll();
            // const info = app.model.Issues.update({
            //     goodsName: 'heihei'
            // }, {
            //     where: {
            //         id: 1
            //     }
            // });
            // console.log("info", typeof info);
            // info.then((res) => {
            //     console.log(res);
            // }).catch((errMsg) => {
            //     console.log('catch', errMsg);
            // });
            let result = await app.model.Issues.create({
                name: 'heihei'
            });
            console.log(result);
            // return info;
        }
    }
}
