module.exports = app => {
    return class MongooseController extends app.Controller {
        create(ctx) {
            let result = ctx.service.info.find(ctx.request.query);
            ctx.body = result;
        }
    }
}
