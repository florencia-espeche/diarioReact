import React, {useState} from 'react';

export const SendContext = React.createContext({
    isSubmit: false, 
    submit: () => {}
});

const SendContextProvider = props => {
    const [isSend, setSend] = useState(false);

    const submitHandler = () => {
        setSend(true);
    };

    return (
        <SendContext.Provider 
        value ={{submit: submitHandler, isSubmit: isSend}} >
            {props.children}
        </SendContext.Provider>
    );
};

export default SendContextProvider;