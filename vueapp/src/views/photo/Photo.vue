<template>
  <div class="photo">
    <img v-for="(p,index) in photoList" :src="p.src" alt="" @click="getPhoto(index)">
  </div>
</template>
<script>
  import Axios from 'axios';
  export default {
      data(){
          return {
            photoList:[],
          }
      },
      created(){
          Axios.get('data/photodata.json')
              .then((res)=>{
                  this.photoList = res.data.photoData;
                  this.$store.dispatch('setPhoto',this.photoList);
              })
      },
      methods:{
          getPhoto(index){
              this.$router.push('/getPhoto/'+index);

          }
      }
  }
</script>
<style>
.photo img{
  width: 50%;
}
</style>
