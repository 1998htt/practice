<template>
    <div>
        <h1>VUEX  </h1>
        {{count}}
        {{msg}}
        <!--{{$store.state.count}}-->
        {{len}}
        <button @click="$store.commit('add',5)">+</button>
        <button @click="$store.commit('sub',3)">-</button>
        <input type="text" v-model="str">
    </div>

</template>
<script>
    import {mapState} from 'vuex'
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
            ...mapState(['count','msg'])
        }

    }
</script>
<style>

</style>