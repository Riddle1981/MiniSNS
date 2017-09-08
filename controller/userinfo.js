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
var UserInfo = sequelize.define('userinfo', {
  uid: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  birth: Sequelize.STRING(10),
  sex: Sequelize.STRING(2),
  following: Sequelize.STRING(20),
  follower: Sequelize.STRING(20),
  anum: Sequelize.STRING(20),
  industry: Sequelize.STRING(20),
  domicile: Sequelize.STRING(20),
  autograph: Sequelize.STRING(255)
}, {
  timestamps: false
});

//写入数据
var now = Date.now();
var createUser = async (name) => {
  var user = await UserInfo.create({
    name: name
  });
  console.log('created: ' + JSON.stringify(user));
};


// 查询成功后会返回包含多个实例（instance）的数组。
var queryUser = async (name) =>
{
  var users = await UserInfo.findAll({
    where: {
      name: name
    }
  });
  console.log(`find ${users.length} users:`);
  for (let u of users) {
    console.log(JSON.stringify(u));
  }
  return users;

};


// 通过获取的示例进行数据更新
var updateUser = async (name) => {
  try{
    var User = await queryUser(name);
    for (let u of User) {
      u.gender = true;
      u.updatedAt = Date.now();
      u.version++;
      await u.save();
    }
  }catch(err){
    console.log(err);
  }
};


// 通过获取的示例进行数据更新
var delUser = async (name) =>{
  try{
    var users = await queryUser(name);
    for (let u of users) {
      await u.destroy();
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
