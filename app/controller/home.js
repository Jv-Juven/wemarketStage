'use strict';
const FormStream = require("formstream");
module.exports = app => {
    class HomeController extends app.Controller {
        async index(ctx) {
            // console.log(ctx);
            ctx.body = ctx.csrf;
            // let result = await app.curl("http://makerh5.com:1227/getInfo", {
            //     method: 'POST',
            //     data: {
            //         pubKey: "20170131",
            //     },
            //     dataType: 'json'
            // });
            // let result = await ctx.curl("http://platenogroup.com/pages/home/");
            // ctx.body = result;
            // app.runSchedule("update_cach");
        }
        async http(ctx) {
            let url = "http://httpbin.org";
            let result = await ctx.curl(`${url}/get?foo=bar`);
            ctx.status = result.status;
            ctx.set(result.headers);
            ctx.body = result.data;
        }
        async post(ctx) {
            const result = await ctx.curl("http://httpbin.org/post", {
                // 必须指定 method
                method: 'POST',
                // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
                contentType: 'json',
                data: {
                    hello: 'world',
                    now: Date.now()
                },
                // 明确告诉 HttpClient 以 JSON 格式处理响应 body
                dataType: 'json'
            });
            ctx.body = result.data;
        }
        async put(ctx) {
            let result = await ctx.curl("http://httpbin.org/put", {
                method: 'PUT',
                contentType: 'json',
                data: {
                    update: 'foo bar'
                },
                dataType: 'json'
            });
            ctx.body = result.data;
        }
        async del(ctx) {
            let result = await ctx.curl("http://httpbin.org/delete", {
                method: 'DELETE',
                dataType: 'json'
            });
            ctx.body = result.data;
        }
        async form(ctx) {
            let result = await ctx.curl("http://httpbin.org/post", {
                method: 'POST',
                data: {
                    foo: 'bar',
                    now: Date.now()
                },
                dataType: 'json'
            });
            ctx.body = result.data;
        }
        async multipart(ctx) {
            const form = new FormStream();
            form.field('foo', 'bar');
            form.file('file', __filename);
            const result = await ctx.curl("http://httpbin.org/post", {
                methoe: 'POST',
                header: form.headers(),
                stream: form,
                dataType: 'json'
            });
            ctx.body = result.data.files;
        }
    }
    return HomeController;
};
