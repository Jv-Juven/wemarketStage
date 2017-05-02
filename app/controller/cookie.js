exports.add = async function (ctx) {
    ctx.cookies.set('count', 'hello cookies', {
        maxAge: 30000,
        encrypt: true
    });
    ctx.cookies.set('msg', 'hello cookies', {
        maxAge: 30000
    });
    // const count = ctx.cookies.get('count');
    // count = count ? Number(count) : 0;
    // ctx.cookies.set('count', count);
    ctx.body = "count";
}
exports.get = async function (ctx) {
    let result = ctx.cookies.get("count");
    ctx.body = result + Date.now();
}
exports.remove = async function (ctx) {
    const count = ctx.cookies.set('count', null);
    ctx.status = 204;
}
