exports.csrf = async function (ctx) {
    ctx.body = ctx.request.body;
}

exports.getCsrf = async function (ctx) {
    ctx.body = ctx.csrf;
}
