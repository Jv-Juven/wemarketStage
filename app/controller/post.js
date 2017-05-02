exports.post = async function (ctx) {
    const result = await ctx.curl("http://httpbin.org/post", {
        method: 'POST',
        contentType: 'json',
        data: {
            hello: 'world',
            now: Date.now()
        },
        dataType: 'json'
    });
    ctx.body = result.data;
}
