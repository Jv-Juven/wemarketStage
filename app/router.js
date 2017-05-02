'use strict';

module.exports = app => {
    app.get('/index', 'home.index');
    app.get('/http', "home.http");
    app.post('/post', "home.post");
    app.post('/simglePost', "post.post");
    app.put('/put', "home.put");
    app.delete('/del', "home.del");
    app.post('/form', "home.form");
    app.post('/multipart', "home.multipart");
    app.resources('issue', '/issue', 'issue');

    app.get('/addCookies', "cookie.add");
    app.get('/getCookies', "cookie.get");
    app.get('/removeCookies', "cookie.remove");
    app.get('/getSession', "session.get");
    app.get('/setSession', "session.set");
    app.get('/removeSession', "session.remove");

    app.get('/getCsrf', "security.getCsrf");
    app.post('/csrf', "security.csrf");

    app.get('/getInfo', "mysql.getInfo");
};
