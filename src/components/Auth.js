import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import Container from '../components/form/Container';
import './Auth.css';

const Auth = props => {
    const authContext = useContext(AuthContext);

    const loginHandler = () => {
        authContext.login();
    };

    return (
        <div className="auth--div">
            <Container>
                <h2>You are not authenticated!</h2>
                <p>Please log in to continue.</p>
                <button onClick = {loginHandler}>
                    Log In
                </button>
            </Container>
        </div>
    );
};

export default Auth;