var mongoose = require('mongoose');//导入 mongoose功能模块
mongoose.Promise = global.Promise;//防止对数据库异步操作时在终端报告警告信息
mongoose.connect('mongodb://localhost:27017/keshe-db');
//启动数据库时会出现端口号；
//通过 Mongoose 提供的connect()方法连接到运行在本地的db数据库。
var User = require('./models/user');

var db = mongoose.connection;
db.on('error', console.log);　//连接失败；

db.once('open', function () {
    var user = new User(
        {
            userId: '1',
            name: 'zhangsan',
            sex: '男',
            originalHeartSounds: '0100020333',
            heartSounds: [20, 30, 40],
            isOk: true
        });

    user.save(function (err) {
        if (err) console.log(err);
    });
    console.log('save success!');
});


