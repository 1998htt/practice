import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux'

 const add = ()=>{
    console.log('--action');
    return {
        type:'ADD'
    }
}
class App extends Component {
    addHandle(){
        store.dispatch(add());
    }
  render() {
    return (
      <div>
          <h1>{this.props.count}</h1>
          <button onClick = {this.addHandle.bind(this)}>click</button>
      </div>
    );
  }
}
const mapStateProps = (state)=>{
    return {
        count:state.count
    }
}
export default connect( mapStateProps )(App) ;
