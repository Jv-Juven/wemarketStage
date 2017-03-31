'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx) {
        console.log(ctx);
      ctx.body = ctx.csrf;
    }
  }
  return HomeController;
};
