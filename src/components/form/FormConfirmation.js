
import React, { useContext } from 'react';
import { SendContext } from '../../context/SendContext';


const FormConfirmation = () => {

    const send = React.useContext(SendContext);

    return (
        <div>
            {send.isSubmit ? <p>Nice job!</p> : <p><em>Pssst... Go ahead and login...</em></p>}
        </div>
    );
}

export default FormConfirmation;