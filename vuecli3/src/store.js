import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state1 = new Vuex.Store({
  state:{
    a:1,
    b:2
  },
  mutations:{
    add(state,q){
      state.a+=q;
    } 
  },
  getters:state => {
    state.a = a
  }
})
export default state1;
