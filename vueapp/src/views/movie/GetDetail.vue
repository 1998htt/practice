<template>
    <div>
        名称：<h1>一出好戏</h1>
        <img src="" alt="">
        <p>简介:</p>
        <p>id:{{$route.params.id}}</p>
    </div>

</template>

<script>
    import  Axios from 'axios';
    export default {
        data(){
            return {
                movieDetail:{}
            }
        },
        mounted(){
            var movieId = this.$route.params.id;
            // Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
            //     .then((res)=>{
            //         this.movieDetail = res.data;
            //     })
        }

    }
</script>
<style>

</style>