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



<template>
    <header class="bg-header">
        <div class="container">
            <div class="logo">
                <img src="../../assets/starlinklogobig.png" alt class="second-img" />
            </div>
            <div class="hd-links normal">
                <div @click.stop="handleClick('home')">
                    <a>首页</a>
                    <div class="underline"
                         v-bind:class="{active : current == 'home'}"></div>
                </div>
                <div class="dropdown"
                     v-on:mouseover="showDropDown"
                     v-on:mouseleave="hideDropDown"
                     @click.stop="handleClick('productApps')">
                    <a>产品服务</a>
                    <div class="underline"
                         v-bind:class="{active : current == 'productApps'}"></div>
                    <transition name="fast">
                        <div class="dropdown-content"
                             v-show="show">
                            <div class="container">
                                <div class="hdcell-a">
                                    <h2 class="normal">智能应用</h2>
                                    <ul class="sm-normal">
                                        <li v-for="(v,idx) in header.apps"
                                            :key="idx"
                                            @click.stop="routerby('productApps','productApps',idx)">
                                            <a>{{v}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hdcell-b">
                                    <h2 class="normal">智能硬件</h2>
                                    <ul class="sm-normal">
                                        <li v-for="(v,idx) in header.hardwares"
                                            :key="idx"
                                            @click.stop="routerby('productApps','productHardware', idx)">
                                            <a>{{v}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hdcell-c">
                                    <h2 class="normal">算法类</h2>
                                    <ul class="sm-normal">
                                        <li v-for="(v,idx) in header.algorithm"
                                            :key="idx"
                                            @click.stop=" routerby('productApps','productAlgo', idx, idx); ">
                                            <a>{{v}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div @click.stop="handleClick('document')">
                    <a>文档中心</a>
                    <div class="underline"
                         v-bind:class="{active : current == 'document'}"></div>
                </div>
                <div @click.stop="handleClick('joinus')">
                    <a>加入我们</a>
                    <div class="underline"
                         v-bind:class="{active : current == 'joinus'}"></div>
                </div>
                <div>
                    <el-dropdown>
                        <el-button type="primary"
                                   class="btn"
                                   v-show="nickName && (managerUrl.mangerUrl || managerUrl.iotUrl)">
                            <img class="controlIcon"
                                 src="../../assets/icons/control.svg" />控制台
                        </el-button>
                        <el-dropdown-menu slot="dropdown" class="power">
                            <el-dropdown-item v-for="(item,index) in list" :key="index" class="item" >
                                <a :href="item.address" class="address">{{item.name}}</a>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span style="margin-left:23px">|</span>
                </div>
                <!--        <div>-->
                <!--          <el-dropdown trigger="click">-->
                <!--            <el-button type="primary"-->
                <!--                       class="btn"-->
                <!--                      >-->
                <!--              <img class="controlIcon"-->
                <!--                   src="../../assets/icons/control.svg" />控制台-->
                <!--            </el-button>-->
                <!--            <el-dropdown-menu slot="dropdown" class="power" v-if="list">-->
                <!--              <el-dropdown-item v-for="(item,index) in list" :key="index" class="item" >-->
                <!--                <a :href="item.address" class="address">{{item.name}}</a>-->
                <!--              </el-dropdown-item>-->
                <!--            </el-dropdown-menu>-->
                <!--          </el-dropdown>-->

                <!--          <span style="margin-left:23px">|</span>-->
                <!--        </div>-->
                <div v-if="!nickName">
                    <div class="login">
                        <a @click="authenticate">登录</a>
                    </div>
                    <span>|</span>
                    <div class="login">
                        <a @click="authenticate">注册</a>
                    </div>
                </div>
                <div v-else>
                    <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{nickName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                        <el-dropdown-menu slot="dropdown" class="logout" id="xx">
                            <el-dropdown-item>
                                <el-button type="primary">退出</el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import productData from "../../utils/productData";
    // // import smoothscroll from "smoothscroll-polyfill";
    import login from "../../utils/login";
    import logout from "../../utils/logout";

    export default {
        name: "Header",
        data: function () {
            return {
                aa:false,
                show: false,
                logName: "登录",
                header: productData.header,
                current: "home",
                controlUrl: "",
                // showControl: false,
                list:[],
                managerUrl: ""
            };
        },
        created () {
            this.getCurrentUser();
            this.current = this.getCurrentRoute();
            // this.showControlBtn();
            this.power();
        },
        computed: {
            ...mapGetters( [ "nickName", "navPos", "iotUrl", "mangerUrl" ] )
        },
        methods: {
            ...mapActions( [ "getCurrentUser" ] ),
            authenticate: function () {

                login( this.$route.fullPath );
            },
            handleCommand: async function () {
                logout( this.$route.fullPath )
            },
            getCurrentRoute: function () {
                if (
                    this.$route.name == "productAlgo" ||
                    this.$route.name == "productapps" ||
                    this.$route.name == "productHardware"
                ) {
                    // this.current = "productApps";
                    return "productApps";
                } else {
                    return this.$route.name;
                }
            },
            showDropDown: function () {
                this.show = true;
            },
            hideDropDown: function () {
                this.show = false;
            },
            handleClick: function ( pathname ) {
                if ( pathname !== "productApps" ) {
                    this.topFunction();
                    if ( pathname == "joinus" && this.nickName == "" ) {
                        let routeData = this.$router.resolve( {
                            name: pathname,
                            query: { id: 0 }
                        } );
                        window.open( routeData.href, "_blank" );
                    } else {
                        this.$router.push( { name: pathname, query: { id: 0 } } );
                    }
                } else {
                    this.show = !this.show;
                }
            },
            topFunction: function () {
                window.scrollTo( {
                    top: 0,
                    // behavior: "smooth"
                } );
            },
            routerby: function ( activename, pathname, value ) {
                console.log( activename, pathname, value );
                if ( pathname !== "productAlgo" ) this.topFunction();
                this.show = !this.show;
                this.$router.push( {
                    name: pathname,
                    query: { id: value }
                } );
            },
            control: function () {
                let controlUrl;
                if ( this.mangerUrl.mangerUrl !== '' ) {
                    console.log(this.mangerUrl,'yes');
                    controlUrl = this.mangerUrl.mangerUrl;
                    this.showControl = true;
                } else if ( this.mangerUrl.iotUrl !== '' ) {
                    controlUrl = this.mangerUrl.iotUrl;
                    this.showControl = true;
                }
                window.open = controlUrl;
            },
            showControlBtn: function () {
                if ( this.mangerUrl.mangerUrl === "" && this.mangerUrl.iotUrl === "" ) {
                    this.showControl = false;
                    console.log( this.showControl );
                }
            },
            power: function () {
                this.list = [];
                this.managerUrl = (this.mangerUrl && this.mangerUrl != "")?this.mangerUrl:JSON.parse(localStorage.getItem('managerUrl'));
                console.log(this.managerUrl, this.managerUrl.mangerUrl,this.managerUrl.iotUrl,'dgye');
                if(this. managerUrl.mangerUrl &&this. managerUrl.mangerUrl !== '' ) {
                    let obj = {};
                    obj.name = '京东星链后台';
                    obj.address = this.managerUrl.mangerUrl;
                    this.list.push(obj);
                }
                if(this.managerUrl.iotUrl && this.managerUrl.iotUrl !== '' ) {
                    let obj = {};
                    obj.name = '京东星链IOT';
                    obj.address = this.managerUrl.iotUrl;
                    this.list.push(obj);
                }
                console.log(this.list,'地址');
            }
        },
        watch: {
            $route: function ( to ) {
                if (
                    to.name == "productAlgo" ||
                    to.name == "productapps" ||
                    to.name == "productHardware"
                ) {
                    this.current = "productApps";
                } else {
                    this.current = to.name;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/styles/main.scss";
    .btn {
        padding: 0px;
        padding-left: 15px;
        padding-right: 15px;
        height: 30px;
        line-height: 30px;
        margin-top: -3px;
    }
    .controlIcon {
        margin-right: 10px;
        position: relative;
        top: 1px;
    }
    .login {
        padding-left: 10px;
        padding-right: 10px;
    }
    .power {
        margin-top: 1.35rem!important;
        margin-right:-1rem!important;
        width: 7.5rem;
        .address:hover{
            color: #5B4CF9!important;
        }
        .address {
            color: #222222;
        }
    }
    .el-dropdown {
        position:relative!important;
    }
    .logout {
        margin-top: 1.35rem!important;
        width: 7.5rem;
    }

</style>