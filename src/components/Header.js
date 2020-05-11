
import React from 'react';
import './Header.css';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="nav--wrapper">
      <h1 className="nav--header">NYT React</h1>
      <span className="nav--text">A React App for the New York Times</span>
      <NavBar links={['Home','NewsLetter', 'About']} />
    </header>
  );
}

export default Header;