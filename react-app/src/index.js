import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {Provider} from 'react-redux';
import store from './store.js';
import Main from './component/Main';
ReactDOM.render(
    //<Provider store={store}>
    //   <App />
    //</Provider>,
    <Main/>,
    document.getElementById('root'));