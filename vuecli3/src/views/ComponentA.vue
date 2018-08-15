<template>
    <div>
        <h3>我是组件A</h3>
        <component-b :msg="msg"></component-b>
        <component-c @fn="xx"></component-c>
        {{msg}}
    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    export default {
        data(){
            return {
                msg:0
            }
        },
        methods:{
          xx(a){
              this.msg += a;
          }
        },
        components:{
            ComponentB,
            ComponentC
        }
    }
</script>
<style>

</style>