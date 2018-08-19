<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view class="content"/>
    <CommonFooter :menuList="menuList"></CommonFooter>
  </div>
</template>
<script>
    import CommonHeader from '@/components/CommonHeader.vue';
    import CommonFooter from '@/components/CommonFooter.vue';
    export default {
        data(){
            return {
                menuList:[{
                    name:'电影',
                    path:'/movie',
                    bgColor:'#DB7093',
                    title:'movie'
                },{
                    name:'音乐',
                    path:'/music',
                    bgColor:'#00BFFF',
                    title:'music'
                },{
                    name:'书籍',
                    path:'/book',
                    bgColor:'#5F9EA0',
                    title:'book'
                },{
                    name:'图片',
                    path:'/photo',
                    bgColor:'#DC143C',
                    title:'photo'
                }],
            }
        },
        components:{
            CommonHeader,
            CommonFooter
        },
        created(){
            var path = this.$route.path;
            // console.log(this.$route);
            var menu = this.menuList.filter(elem=>{
                return elem.path == path;
            })
            // console.log(menu);
            this.$store.dispatch('changeBg',menu[0]);
        },
        destroyed(){
            window.onscroll = null;
        }
    }
</script>

<style lang="scss">
  .content{
    margin: 1rem 0;
  }
</style>
