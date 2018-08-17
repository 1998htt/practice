<template>
  <div class="movie">
    <ul>
      <MovieList v-for="movie in movieList" :movie="movie"></MovieList>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios';
  import MovieList from '@/views/movie/MovieList.vue'
  export default {
      data(){
          return {
              movieList:[],
          }
      },
      created(){
          Axios.get('/movie.json')
              .then((res)=>{
                  this.movieList = res.data.subjects;
                  console.log(this.movieList);
              })

      },
      components:{
          MovieList,
      }

  }
</script>
<style lang="scss">
  .movie li{
    display:flex;
    padding:10px;

  }
  .img{
    flex-grow: 1;
    width: 0;
  }
  .title{
    flex-grow: 3;
    width: 0;
    margin-left:20px;
    .aver{
      color:orange;
    }
  }
</style>
