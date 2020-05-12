import React from 'react';
import './Container.css';

const Container = (props) => {
    return (
        <div className = "container-div">
            {props.children}
        </div>
    )
}

export default Container;