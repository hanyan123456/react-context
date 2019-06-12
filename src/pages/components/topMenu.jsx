import React from 'react';
import PropTypes from 'prop-types';

const topMenu =({ Data}) =>{
return(
    <div>
        <span>莫名其妙的组件</span>
        <span>{Data}</span>
    </div>
)
}

topMenu.propTypes = {
    Data:PropTypes.string.isRequired  
};
export default topMenu;