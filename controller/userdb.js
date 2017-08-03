/**
 * Created by hermione on 2017/8/1.
 */

const Sequelize = require('sequelize');
const config = require('./config.js');

//创建一个sequelize对象实例：
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

//定义模型Pet，告诉Sequelize如何映射数据库表：
var User = sequelize.define('user', {
    uid: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    psd: Sequelize.STRING(10)
}, {
    timestamps: false
});

//写入数据
var now = Date.now();
var createUser = async (name,psd) => {
    var dog = await User.create({
        uid: 'd-' + now,
        name: name,
        psd: psd
    });
    console.log('created: ' + JSON.stringify(dog));
};


// 查询成功后会返回包含多个实例（instance）的数组。
var queryUser = async (name) =>
{
    var users = await User.findAll({
        where: {
            name: name
        }
    });
    console.log(`find ${users.length} users:`);
    for (let p of users) {
        console.log(JSON.stringify(p));
    }
    return users;

};


// 通过获取的示例进行数据更新
var updateUser = async (name) => {
    try{
        var User = await queryUser(name);
        for (let p of pets) {
            p.gender = true;
            p.updatedAt = Date.now();
            p.version++;
            await p.save();
        }
    }catch(err){
        console.log(err);
    }
};


// 通过获取的示例进行数据更新
var delUser = async (name) =>{
    try{
        var pets = await queryUser(name);
        for (let p of pets) {
            await p.destroy();
        }
    }catch(err)
    {
        console.log(err);
    }
};

module.exports = {
    post : createUser,
    delete : delUser,
    put : updateUser,
    get : queryUser

}