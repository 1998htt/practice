<template>
  <div class="test_box">
    <p @click="go">测试组件内部守卫的作用，点击跳到HelloWorld</p>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg: ""
        }
    },
    // 属于组件自己的生命周期
    beforeRouteEnter(to,from,next){
        console.log(to);
        console.log(from);
        console.log(next)
        next(vm =>{
            vm.msg = 'htt'
            localStorage.msg = vm.msg;
            console.log(vm);
        })
        
    },
    beforeRouteUpdate(to,from,next){
        console.log(to);
        console.log(from);
        console.log(next)

        next(vm =>{
            vm.msg = '111'
            localStorage.msg = vm.msg;
            console.log(vm);
        })
        
    },
    beforeRouteLeave(to,from,next){
        console.log(to);
        console.log(from);
        console.log(next)

        next(vm =>{
            vm.msg = '111'
            localStorage.msg = vm.msg;
            console.log(vm);
        })
        
    },
    methods: {
        go() {
        console.log(1111)
        //   编程式导航
        this.$router.push({ name: 'componentA' })
        }
    }
}

</script>

<style>

</style>