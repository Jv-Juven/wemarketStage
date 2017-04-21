'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        async index(ctx) {
            console.log(ctx);
            // ctx.body = ctx.csrf;
            // let result = await app.curl("http://makerh5.com:1227/getInfo", {
            //     method: 'POST',
            //     data: {
            //         pubKey: "20170131",
            //     },
            //     dataType: 'json'
            // });
            let result = await ctx.curl("http://platenogroup.com/pages/home/");
            ctx.body = result;
            app.runSchedule("update_cach");
        }
    }
    return HomeController;
};
