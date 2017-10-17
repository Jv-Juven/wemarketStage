# egg-example

egg的demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/news
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

# 安装的模块：
- [egg-mysql](https://github.com/eggjs/egg-mysql) 操作mysql数据库模块
- [egg-sequelize]() 数据库操作模块
- [egg-mongoose]() `mongodb`模块
- [egg-cors]() 解决跨域问题