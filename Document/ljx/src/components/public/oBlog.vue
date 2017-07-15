

<template>
  <div id="myblog">
      <div id="blog">

      </div>
      <div id="other">

      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Hogwarts'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }

  #myblog{
    width:1188px;
    height:600px;
    margin:0 auto;
  }
  #blog{
    height: 600px;
    width: 800px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;

  }
  #other{
    height: 600px;
    width: 373px;
    margin-left: 10px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;
  }
</style>
