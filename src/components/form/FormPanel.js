import React, { useContext } from 'react';
import './FormPanel.css';
import Button from './Button';
import { SendContext } from '../../context/SendContext';
import FormConfirmation from '../form/FormConfirmation';

const FormPanel = () => {
    const send = useContext(SendContext);

    const submitHandler = () => {
        send.submit();
    }

    return (
        <form className="form--panel">
            <input className="form--input" type="text" name="name" placeholder="Name" />
            <input className="form--input" type="text" name="email" placeholder="Email" />
            <Button className="form--button" click={() => submitHandler}> Send </Button>
            <FormConfirmation />
        </form>
    )
}

export default FormPanel;
