import React from 'react'

const BackgroundPic  = (props) =>  <img className='image' src={props.image} alt="Background"/>;

export default BackgroundPic;

// export default class BackgroundPic extends Component {
//
//     render() {
//         return (
//             <div>
//                 <img src={props.image}/>
//             </div>
//     )
//     }
// }