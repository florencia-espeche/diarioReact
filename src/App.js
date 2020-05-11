import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from './components/UserContext';

const App = () => {
    const user = { name: 'flor', loggedIn: true }
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <UserProvider value={user}>
                        <Route path="/Home" component={Home} />

                        <Route path="/About" component={About} />
                    </UserProvider>
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    )
}

export default App;