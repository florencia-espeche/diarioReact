import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NewsLetter from './pages/NewsLetter';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { UserProvider } from './context/UserContext';

const App = () => {
    const user = { name: 'flor', loggedIn: true }
    return (
        <React.Fragment>
            <UserProvider value={user}>
                <Router>
                    <Switch>
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/NewsLetter" component={NewsLetter} />
                        <Route exact path="/" render={() => (<Redirect to="/Home" />)} />
                    </Switch>
                </Router>
            </UserProvider>
        </React.Fragment>
    )
}

export default App;