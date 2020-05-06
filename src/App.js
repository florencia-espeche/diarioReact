import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <main>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </Switch>
        </main>
    )
}

export default App;