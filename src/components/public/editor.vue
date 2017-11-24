<template>
<div class="edit">
    <input class="title" type="text" placeholder="标题">
    <div id="mavon">
        <mavonEditor  style="height: 100%"/>
    </div>
</div>
  
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'edit',
  components: {
    mavonEditor
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.title{
    height: 48px;
    width: 1290px;
    border-radius:5px;
    border: 1px solid #cccccc; 
    
}
.edit{
   margin-top: 0px;
   min-height: 600px;
   padding-top: 50px;
   background-color: #f3f3f3;
   text-align: center;
}
#mavon{
    width: 1290px;
    height: 800px;
    margin: 0 auto;
    margin-top: 20px;
}

</style>

