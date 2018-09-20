import React, { Component } from 'react';
// class PageA extends Component{
//     constructor(props) {
//         super(props);
//         console.log(this.props.match.params.id)
//     }
//
//     render(){
//         return (
//             <div>
//                 A主页面
//             </div>
//         )
//     }
// }
const PageA = (props)=>{
        return(
            <div>
                A页面{props.match.params.id}
            </div>
        )


}
export default PageA;