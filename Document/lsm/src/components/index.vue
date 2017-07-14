<template>
    <div class="header">
        <h3>{{ msg }}</h3>
        <ul>
            <router-link to="/login">
                <li><a href="">登录</a></li>  
            </router-link>
            
            <router-link to="/register">
                <li><a href="">注册</a></li>  
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            msg: 'logo'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
    height: 50px;
    background: #006633;
}
li {
    list-style: none;
}
li a {
    text-decoration: none;
}
</style>
p