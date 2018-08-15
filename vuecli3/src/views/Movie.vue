<template>
    <div>
        <ul>
            <li v-for="m in movieList" @click="actor(m.actor)">
                {{m.name}}{{m.avg}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                movieList:[
                    {
                        actor:"沈腾",
                        name:"西虹市首富",
                        avg:8.7
                    },
                    {
                        actor:"黄渤",
                        name:"一出好戏",
                        avg:8.5
                    },
                    {
                        actor:"徐峥",
                        name:"我不是药神",
                        avg:8.2
                    },
                    {
                        actor:"李易峰",
                        name:"动物世界",
                        avg:9.5
                    },

                ]
            }
        },
        methods:{
            actor(a){
                this.$router.push('/movieDetail/'+a);
            }
        }
    }
</script>
<style scoped>
  li{
      list-style: none;
  }
</style>