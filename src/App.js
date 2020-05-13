import React, { useContext } from 'react';
import News from './pages/News';
import './App.css';
import Auth from './components/Auth';
import { AuthContext } from './context/AuthContext';

const App = (props) => {
    const authContext = useContext(AuthContext);

    let content = <Auth />;
    if (authContext.isAuth) {
        content = <News />
    }
    return content;
};

export default App;