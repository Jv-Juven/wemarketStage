let paramRules = {
    goodsName: {
        type: 'string',
        required: true
    }
}
module.exports = app => {
    return class IssueController extends app.Controller {
        async create (ctx) {
            let paramsData = ctx.request.body;
            const errors = ctx.validate(paramRules, paramsData);
            ctx.body = errors;
        }
    }
}
