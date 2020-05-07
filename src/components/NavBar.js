import React from 'react'
import './NavBar.css';

const NavBar = ({links}) => {
    return (
        <nav>
            <ul className="navbar--nav">
                {links.map((item, index) => <li className = "navbar--list" key={index}>
                    <a className = "navbar--link" href="#">{item}</a>
                </li>)}  
            </ul>
        </nav>
    );
}

export default NavBar;