module.exports = app => {
    return class MysqlController extends app.Controller {
        async getInfo (ctx) {
            // let info = await ctx.service.info.find();
            ctx.body = app.testInfo;
        }
    }
}
