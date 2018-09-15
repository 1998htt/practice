import {creatStore} from 'redux';

const inintialState = {
    count:0
}
const store = creatStore(()=>{
    count:0
},inintialState);
export default store;