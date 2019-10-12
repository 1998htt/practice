<template>
  <div id="app">
<!--  <el-carousel :interval="6000" arrow="always">-->
<!--    <el-carousel-item v-for="(img,index) in imgList" :key="index">-->
<!--    -->

<!--     </el-carousel-item>-->
<!--    </el-carousel>-->
      <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
          </el-carousel-item>
      </el-carousel>



  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
export default {
  name: 'App',
  data(){
    return{
      imgList:[
        {url:'http://img4.imgtn.bdimg.com/it/u=508387608,2848974022&fm=26&gp=0.jpg'},
        {url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg'},
        {url:'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg'},
        {url:'http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg'}
      ]
    }
  },
  method:{

  }
}
</script>

<style>
    #vv {
        width: 100px;
        height: 100px;
        position:absolute;
        top:200px;
        z-index: 33;
        opacity: 0.9;
    }
    img {
        width:100%;
    }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
