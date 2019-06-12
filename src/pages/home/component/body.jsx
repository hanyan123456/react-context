import React from 'react';
import PropTypes from 'prop-types';
import Child from './child'

const body = ({ Data}) => {
       
    return (
        <div>
            <span>{Data}</span>
            <Child></Child>
        </div>
    )
}
body.propTypes = {
    Data: PropTypes.string.isRequired
};
export default body