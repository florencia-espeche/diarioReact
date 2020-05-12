import React from 'react';
import './FormPanel.css';

const FormPanel = () => {
    return (
        <form className="form--panel">
            <input className="form--input" type="text" name="name"  placeholder="Name" />
            <input className="form--input" type="text" name="email" placeholder="Email" />
            <button className="form--button"> Send </button>
        </form>
    )
}

export default FormPanel;