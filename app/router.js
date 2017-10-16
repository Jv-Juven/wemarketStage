'use strict';

module.exports = app => {
    app.get('/index', 'home.index');
    app.get('/get/http', "home.http");
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
    app.get('/setInfo', 'mongoose.create');

    // app.post('/trip-hotel/hotel/v2/roomRate', 'corsConfig', 'mock.roomRate');
    // app.options('roomRate', '/trip-hotel/hotel/v2/roomRate', 'mock.index');
    app.post('roomRate', '/trip-hotel/hotel/v2/roomRate', 'mock.index');
    app.post('getMember', '/trip-book/wehotel/getMember', 'mock.memberInfo');
    app.post('updateMember', '/trip-book/wehotel/updateMember', 'mock.updateMember');
    app.post('sn', '/trip-book/booking/getSn', 'mock.sn');
    app.post('/order/preBookSuccess', 'mock.orderSuccess');
    app.post('/order/prepareCancel', 'mock.prepareCancel');
    app.post('/trip-book/bundle/getGoods', 'mock.tiedSelleGoods');
    app.post('/trip-book/order/orderDetail', 'mock.orderDetail');
};