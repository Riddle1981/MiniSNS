<template>
  <div id="personal">
    <div id="head">
     <div id="sculpture">
       <div id="pic">
         <img class="pic" src="../../assets/picture.jpg">
       </div>
       <div id="num">
         <div class="msg">
           <p>{{following}}</p>
           <h2>关注</h2>
         </div>
         <div class="msg">
           <p>{{follower}}</p>
           <h2>粉丝</h2>
         </div>
       </div>
     </div>
      <div id="datum">
        <div id="nicename">
          <p>{{uname}}</p>
        </div>
        <div id="myDatum">
          <ul >
            <li>&nbsp;&nbsp;&nbsp;职业:{{industry}}</li>
            <li>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;居住地:{{domicile}}</li>
            <li>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别:{{sex}}</li>
            <li>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日:{{birthday}}</li>
          </ul>
        </div>
        <hr size="1" color="#CCC"/>
        <div id="introduce">
            <h1>个人简介</h1>
            <p>{{myintro}}</p>
        </div>
        <div id="editor">
            <button @click="upda">编辑个人资料</button>
        </div>
      </div>
    </div>
    <div id="zzc" v-show="info"></div>
    <div id="information" v-show="info">
      <span>编辑简介</span>
      <a id="close" @click="close">×</a>
      <hr size="1" width="680" id="hr"/>
      <form>
        <div class="item">
          <label>昵称：</label>
          <input type="text" class="style1" :value="uname"/>
        </div>
        <div class="item">
          <label>实名：</label>
          <input type="text" class="style1"/><br/>
        </div>
        <div class="item" >
          <label>职位：</label>
          <input type="text" class="style1" :value="industry"/>
        </div>
        <div class="item" >
          <label>性别：</label>
          <input class="radio" type="radio" value="男" name="sex"/>男
          <input class="radio" type="radio" value="女" name="sex"/>女<br/>
        </div>
        <div class="item">
          <label>生日：</label>
          <input type="datetime-local" class="style1" :value="birthday"/>
        </div>
        <div class="item">
          <label>行业：</label>
          <input type="text" class="style1" /><br/>
        </div>
        <div class="item" id="area">
          <label>地区：</label>
          <input type="text" class="style1" :value="domicile"/><br/>
        </div>
        <div class="item" id="text">
          <label>简述：</label>
          <textarea maxlength="300" name="textarea" @input="mycou" v-model="text"  :value="myintro"></textarea>
        </div>
        <div id="icount">
          <p id="spann">您还可以输入{{wordc}}字</p>
        </div>
        <div class="btn">
          <button id="cancel">取消</button>
          <button id="save">保存</button>
        </div>
      </form>
    </div>
    <myblog></myblog>
  </div>
</template>

<script>
  import myBlog from './oBlog'

export default{
    name: 'head',
    data () {
      return {
        text: '',
        info: false,
        following: '200',
        follower: '200',
        uname: 'Mocate',
        industry: '学生',
        domicile: '西安',
        sex: '女',
        birthday: '1997-01-01',
        myintro: 'The more you do,the more you can do.',
        wordc: '300'
      }
    },
    methods: {
      upda: function (event) {
        this.info = true
      },
      close: function (event) {
        this.info = false
      },
//      以上令与info关联的两个div块的v-show为true
      mycou: function (event) {
        var a = this.text.length
        this.wordc = 300 - a
//        以上为剩余字数统计
      }
    },
    components: { myblog: myBlog }
}
</script>

<style>
  #text{
    vertical-align: top;
  }
  *{
    margin: 0px;
    padding: 0px;
    font-family: "Microsoft YaHei";
  }
  body{
    background: #E9E9E9;
  }
  hr{
    opacity: 0.5;
    filter: alpha(opacity=30, finishopacity=0,style=1);
    align: center;
    width: 800px;
    margin-left: 50px;
  }
  #sculpture{
    float:left;
    width: 150px;
    height: 230px;
    /*以上为头像和粉丝关注数部分样式*/
  }
  #myDatum{
    margin-left: 20px;
    margin-top: 50px;
    height: 30px;
    /*以上为资料显示部分包含昵称样式*/
  }
  #myDatum li{
    float:left;
    margin-left: 35px;
    font-weight: 500;
    font-size: 16px;
    list-style: none;
  }
  #datum{
    height: 200px;
    width: 1000px;
    float: left;
    /*以上为资料显示部分除昵称样式*/
  }
  #nicename{
    font-size: 28px;
    text-align: left;
    margin-left: 20px;
    margin-top: 25px;
    /*以上为昵称部分样式*/
  }
  #head{
    width:1150px;
    height:230px;
    padding-left: 20px;
    margin:0 auto;
    padding-top: 15px;
    background: #FFF;
    border:1px solid #ccc;
    /*以上是个人主页的整个信息部分*/
  }
  #pic{
    width:150px;
    height:150px;
    /*头像的div模块*/
  }
  .pic{
     width:150px;
     height:150px;
    /*头像img样式*/
  }
  .msg{
    float:left;
    margin-left: 15px;
    /*粉丝及关注信息*/
  }
  .msg p{
    font-weight: 500;
    font-size: 24px;
  }
  .msg h2{
    font-weight: 200;
    font-size: 18px;
    color:#808080;
  }
  #num{
    margin-top: 10px;
    margin-left: 15px;
  }
  #introduce{
    height: 60px;
    margin-top: 15px;
    margin-left: 20px;
    text-align: left;
    float: left;
    width: 800px;
  }

  #introduce h1{
    font-size: 16px;
    color: #808080;

  }
  #introduce p{
    display: block;
    margin-top: 10px;
    color: #000;
    /*个人简介部分*/
  }
  #editor{
    margin-top: 40px;
    margin-left: 10px;
    font-size: 18px;
    height: 35px;
    width: 150px;
    float: left;
    /*资料编辑按钮样式*/
  }
  #editor button{
    width: 120px;
    height: 35px;
    color: #0F88EB;
    border:1px solid #0F88EB;
    background-color: #FFF;
    border-radius: 5px;
  }
  #editor button:hover{
    background-color: rgba(15,155,253,0.1);
     }
  #zzc{
    position: absolute;
    top: 0px;
    width:100%;
    height: 1200px;
    background: #000;
    opacity: 0.4;
    filter:alpha(Opacity=10);
    /*遮罩层，此处加position直接形成叠加层无需z-index*/
  }
  #hr{
    width: 580px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  #information{
    top: 50%;
    left: 50%;
    margin-top: -290px;
    margin-left: -340px;
    /*以上为绝对定位居中*/
    z-index: 1;
    position: absolute;
    width: 680px;
    height: 580px;
    background-color: #FFF;
    border: 1px solid #DCDCDC;
    /*个人资料弹窗部分样式*/
  }
  #close {
    /*text-decoration: none;*/
    display: inline-block;
    margin-left: 620px;
    width: 20px;
    height: 30px;
    font-size: 32px;
    color: #808080;
    text-weight: 500;
  }
  .btn{
    height: 35px;
    width: 180px;
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
  #icount{
    text-align: right;
    margin-right: 20px;
    font-size: 14px;
    color: #BE0000;

  }
  .btn button{
    height: 27px;
    width: 80px;
    color: #FFF;
    border: none;
  }
  #area{
    width: 680px;
  }
  #cancel{
    background: #999999;
  }
  #save{
    margin-left: 10px;
    background: #BE0000;
  }
  #information span{
    font-size: 18px;
    display: inline-block;
    width: 100px;
    position: absolute;
    top:10px;
    left: 0px;
    font-weight: 200;
    text-align: right;
  }
  .item{
    width: 310px;
    margin-left: 30px;
    margin-top: 20px;
    height: 40px;
    text-align: left;
    float: left;
  }
  .item .radio{
    margin-left: 10px;
  }
  #text{
    width: 650px;
    height: 100px;
    margin-right: 10px;
  }
  #text lable{
    display: block;
  }
  #information form .style1{
    width: 230px;
    height: 30px;
    border: 1px solid #D7D7D7;
  }
  #information textarea{
    width: 580px;
    height: 100px;
    border: 1px solid #D7D7D7;
  }
</style>
