import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/Home" component={Home} exact />
                <Route path="/About" component={About} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default App;