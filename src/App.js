import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NewsLetter from './pages/NewsLetter';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from './context/UserContext';

const App = () => {
    const user = { name: 'flor', loggedIn: true }
    return (
        <React.Fragment><UserProvider value={user}>
            <Router>
                <>
                <Header />
                <Switch>
                    
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/NewsLetter" commponent={NewsLetter} />
                    
                </Switch>
                <Footer />
                </>
            </Router></UserProvider>
        </React.Fragment>
    )
}

export default App;