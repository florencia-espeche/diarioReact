
import React from 'react';
import './Header.css';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className="header--wrapper">
            <h1 className="header--header">NYT React</h1>
            <span className="header--text">A React App for the New York Times</span>
            <NavBar links={['Home', 'About', 'NewsLetter']} />
        </header>
    );
}

export default Header;