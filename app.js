// const mongoose = require('mongoose');
// module.exports = app => {
//     const db = mongoose.createConnection('localhost', 'test');
//     db.on('error', console.error.bind(console, '连接错误:'));
//     db.once('open', function () {
//         console.log('mongoose已打开');
//     });
//
//     var PersonSchema = new mongoose.Schema({
//         name: String // 定义一个属性name，类型为String
//     });
//     var PersonModel = db.model('Person', PersonSchema);
//     var personEntity = new PersonModel({
//         name: 'Juven'
//     });
//     personEntity.save();
//     console.log(personEntity.name);
// }
