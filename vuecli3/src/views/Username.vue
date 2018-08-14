<template>
    <div>
        <h1>用户名</h1>
        名字是：{{$route.params.name}}
        年龄是：{{$route.params.age}}
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    
</style>