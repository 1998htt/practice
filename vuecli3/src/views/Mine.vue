<template>
    <div>
        <h1>hello!!!</h1>
        <router-link :to="{name:'username',params:{name:'侯亭亭',age:20}}">登录</router-link>
        <router-link to="/mine/password/侯亭亭/20/3133437521@qq.com">注册</router-link>
        <router-view></router-view>
    </div>

</template>
<script>

</script>
<style>

</style>