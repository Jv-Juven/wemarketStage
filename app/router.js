'use strict';

module.exports = app => {
    app.get('/home', 'home.index');
    app.resources('issue', '/issue', 'issue');
};
