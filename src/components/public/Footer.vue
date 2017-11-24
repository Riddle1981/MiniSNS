<template>
  <div class="footer" id="footer">
    <div class="about">
      <ul>
        <li>关于MiniSNS</li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">编辑器语法</a></li>
        <li><a href="#">服务条款</a></li>
        <li><a href="#">每周精选</a></li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <li>联系合作</li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">合作伙伴</a></li>
        <li><a href="#">媒体报道</a></li>
        <li><a href="#">意见反馈</a></li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <li>帮助中心</li>
        <li><a href="#">常见问题</a></li>
        <li><a href="#">自助服务</a></li>
        <li><a href="#">新手指南</a></li>
        <li><a href="#">协议下载</a></li>
      </ul>
    </div>
    <div id="wx" class="about">
      <div id="img">
        <img src="../../../user/2.jpg"/>
      </div>
      <p>扫码关注微信公众平台</p>
    </div>
    <div id="contact" class="about">
      <ul @click="sendd">
        <li>内容许可</li>
        <li><a>除特别说明外，用户内容均采用 知识共享署名-非商业性使用</a></li>
        <li><a>禁止演绎 4.0 国际许可协议 进行许可</a></li>
        <li><a>媒体及其它合作:MiniSNS@mini.com</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['message'],
    methods: {
      sendd: function () {
        this.$emit('sendToP', 'data')
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  a{
    color:black;
    font-weight: 100;
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  .footer{
    width: 100%;
    height: 220px;
    border-top: 1px solid #eeeeee;
    padding-top: 30px;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
  }
.about{
    color:#808696;
    flex-basis: 200px;
  }
  #wx{
    height: 160px;
    width: 130px;
    float: left;
    margin-right: 80px;
  }
  #wx p{
    font-size: 12px;
    color: #808696;
  }
  #img{
    height: 130px;
    width: 130px;
    padding-left: 10px;
    padding-top: 10px;
    background: white;
    margin-bottom: 5px;
  }
  #img img{
    height: 110px;
    width: 110px;
  }
  .footer .about ul li {
    list-style: none;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .footer .about ul li:nth-child(1){
    font-size: 18px;
  }
  .footer .about ul li a{
    color: #000000;
  }
</style>
