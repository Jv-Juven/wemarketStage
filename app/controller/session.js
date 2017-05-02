exports.get = async function (ctx) {
    ctx.body = ctx.session;
}

exports.set = async function (ctx) {
    ctx.session.username = "天线的德比";
    ctx.session.age = "8";
    ctx.session.sex = "female";
    ctx.status = 204;
}

exports.remove = async function (ctx) {
    ctx.session = null;
    ctx.body = ctx.session;
}
