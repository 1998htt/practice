<template>
  <div class="movie">
    <ul>
      <li v-for="movie in movieList" >
          <div class="img">
            <!--<img :src="/movie.json/movie.images.small" alt="">-->
            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.webp" alt="">
          </div>
          <div class="title">
              <h3>{{movie.title}}</h3>
             <p>观众评：<span class="aver">{{movie.rating.average}}</span></p>
            主演：<span v-for="actor in movie.casts" >{{actor.name}} </span>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios';
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
