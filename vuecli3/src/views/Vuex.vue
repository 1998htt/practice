<template>
    <div>
        <h1>VUEX  </h1>
       <h1> {{count}}</h1>
        <h1>{{msg}}</h1>
        <h1>{{len}}</h1>
        <h1>{{count100}}</h1>
        <h2>{{yy}}</h2>
        <!--{{$store.state.count}}-->

        <button @click="$store.commit('add',5)">+</button>
        <button @click="$store.commit('sub',3)">-</button>
        <input type="text" v-model="str">
    </div>

</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        data(){
            return{
                str:'hhhhhhhh'
            }
        },
        // computed:{
        //     xx(){
        //         return this.$store.state.count
        //     }
        // }
  
        // computed:mapState({
        //     count:state=>state.count,
        //     yy:state=>state.msg,
        // }),

       // computed:mapState(['count','msg'])

        computed:{
            len(){
                return this.str.length
            },
            ...mapState(['count','msg']),
            ...mapGetters(['count100']),
            yy() {
                return this.$store.getters.count100
            }
        },
        mounted() {
            console.log(this.$store)
            // setInterval(()=>{
            //     this.$store.commit('add',10);

            // },1000)
        }

    }
</script>
<style>

</style>