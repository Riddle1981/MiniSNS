/**
 * Created by hermione on 2017/12/4.
 */

const Sequelize = require('sequelize');
const config = require('./config.js');


var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

var Articals = sequelize.define('userinfo', {
  bid: {
    type: Sequelize.STRING(20),
    primaryKey: true
  },
  bname: Sequelize.STRING(30),
  time: Sequelize.DATE,
  readnum: Sequelize.INTEGER(5),
  commentnum: Sequelize.INTEGER(5),
  likenum: Sequelize.INTEGER(5),
  content: Sequelize.TEXT,
  summary: Sequelize.TEXT,
  author: Sequelize.STRING(20)
}, {
  timestamps: false
});


var now = Date.now();
var createArtical = async (artical) => {
  var essay = await Articals.create({
    bid: now,
    bname: artical.name,
    author: artical.author,
    time: artical.time,
    readnum: artical.readnum,
    commentnum: artical.commentnum,
    likenum: artical.likenum,
    content: artical.content,
    time: artical.time

  });
  console.log('created: ' + JSON.stringify(essay));
};



var queryArtical = async (id) =>
{
  var essay = await Articals.findAll({
    where: {
      bid: id
    }
  });
  console.log(`find ${essay.length} essay:`);
  for (let e of essay) {
    console.log(JSON.stringify(e));
  }
  return essay;

};



var updateUser = async (essay) => {
  try{
    var essay = await queryArtical(id);
    for (let e of essay) {
      e.gender = true;
      e.updatedAt = Date.now();
      e.bname = artical.name,
      e.author = artical.author,
      e.time = artical.time,
      e.readnum = artical.readnum,
      e.commentnum = artical.commentnum,
      e.likenum = artical.likenum,
      e.content = artical.content,
      e.time = artical.time
      await e.save();
    }
  }catch(err){
    console.log(err);
  }
};



var delUser = async (name) =>{
  try{
    var essay = await queryArtical(name);
    for (let e of essay) {
      await e.destroy();
    }
  }catch(err)
  {
    console.log(err);
  }
};

module.exports = {
  post : createArtical,
  delete : delArtical,
  put : updateArtical,
  get : queryArtical

}
