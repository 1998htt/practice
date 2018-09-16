import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux';
//action
 const add = (num)=>{
    console.log('--action');
    return {
        type:'ADD',
        text:num

    }
}
class App extends Component{
    addHandle(num){
        store.dispatch(add(num));
    }
  render(){
    return (
      <div>
          <h1>{this.props.count}</h1>
          <button onClick = {this.addHandle.bind(this,2)}>click</button>
      </div>
    )
  }
}
//显示到页面
const mapStateProps = (state)=>{
    return {
        count:state.count
    }
}
const mapDispatchToProps = (dispatch) =>{
     return{
         add: ()=>{
             dispatch(add())
         }


     }
}
export default connect(mapStateProps,mapDispatchToProps)(App) ;
