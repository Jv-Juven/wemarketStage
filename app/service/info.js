module.exports = app => {
    return class Info extends app.Service {
        async find (ctx) {
            const info = await app.model.Goods.findAll();
            console.log("info", info);
            return info;
        }
    }
}
