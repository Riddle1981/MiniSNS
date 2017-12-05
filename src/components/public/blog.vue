<template>
  <div id='artical'>
   <div class='blogList' v-for='artical in list' :key='artical.id'>
      <h1>{{artical.title}}</h1>
      <p>{{artical.summary}}</p>
      <h2>
      <span class='ctx'>{{artical.time}}</span>
      <span class='tag'>阅读</span><span class='ctx'>({{artical.read}})</span>
      <span class='tag'>评论</span><span class='ctx'>({{artical.comment}})</span>
      <span class='tag'>喜欢</span><span class='ctx'>({{artical.like}})</span>
      </h2>
   </div>
  </div>
</template>
<script>
export default {
  name: 'blog',
  data () {
    return {
      list: [
        {
          title: '基于前后端分离的身份认证方式——JWT',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        },
        {
          title: 'hello',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        },
        {
          title: 'hello',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        },
        {
          title: 'hello',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        },
        {
          title: 'hello',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        },
        {
          title: 'world',
          summary:
            '目录： 一、什么是JWT 二、我们为什么要使用JWT（与传统的session认证有何区别） 三、如何使用JWT 四、JWT的构成及原理 五、JWT加解密实例一、什么是JWT JWT——Json web token 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准，可实现无状态、分布式的Web应用授权。二、我们为什么需要JWT？ 首先，当前后端分离时我们会因为同源策略...',
          time: '2016-08-05 12:24',
          read: 999,
          comment: 999,
          like: 20013
        }
      ]
    }
  }
}
</script>
<style scoped>
.blogList {
  font-family: 'Simsun';
  width: 90%;
  margin-left: 5%;
  height: 180px;
  border: 1px solid transparent;
  border-bottom: 1px dashed #cccccc;
}
.blogList h1 {
  font-size: 20px;
  color: #000000;
  font-weight: 500;
}
.blogList p {
  font-size: 14px;
  color: #666666;
  text-indent: 2em;
  font-weight: 100;
}
.blog h2 {
  font-weight: 100;
  text-align: right;
}
.ctx,.tag {
  font-size: 12px;
}
.ctx {
  color: #666666;
}
.tag {
  color: #d28363;
  margin-left: 5px;
}
</style>
