var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        userId: {type: String, required: true},
        name: {type: String, required: true},
        sex: {type: String, required: true},
        originalHeartSounds: {type: String, required: true},
        heartSounds: {type: Array, required: true},
        isOk: {type: Boolean, required: true},
    },
    {timestamps: true}
);
//选项timestamps的值设置为 true，则自动给所映射集合添加createdAt和updatedAt两个字段。

module.exports = mongoose.model('User', UserSchema);