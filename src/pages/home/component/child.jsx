import React from 'react';
import { Consumer } from '../../context'
const child = () => {

    return (
        
        <Consumer>
            {( childData ) =>
             <div>
                    <span>我是子组件的子组件{childData}</span>                 
             </div>
            }
        </Consumer>
        
    )
}
export default child