import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Username from './views/Username.vue';
import Password from './views/Password.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine,
        children:[
            {
              path:'username',
              name:'username',
              component: Username
            },
            {
                path:'password/:name/:age/:email',
                component: Password
            },

        ]
    },
    {
      path:'/home',
      redirect:'/'
    },
    {
        path:'/home/:name/:age/:email',
        redirect: '/mine/password/:name/:age/:email'
    },


  ],
});