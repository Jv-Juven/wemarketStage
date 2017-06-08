module.exports = options => {
    return async function corsConfig (ctx, next) {
        console.log(ctx.request.header.origin);
        ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin)
        // ctx.set('Access-Control-Expose-Headers', 'Set-Cookie')
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
        ctx.set('Access-Control-Allow-Credentials', true)
        ctx.set('Access-Control-Max-Age', 500000)
        // ctx.set('Access-Control-Allow-Headers', '*');
        ctx.set('Access-Control-Allow-Headers', 'token, Accept, x-csrf-token, X-Custom-Header, X-Requested-With, Origin, Content-Type, Authorization');
        next();
    }
}
