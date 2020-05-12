import React from 'react'
import './NavBar.css';
import {Link} from "react-router-dom";

const NavBar = ({links}) => {
    return (
        <nav>
            <ul className="navbar--nav">
                {links.map((item, index) => <li className = "navbar--list" key={index}>
                    <Link className = "navbar--link" to={`/${item}`}>{item}</Link>
                </li>)}  
            </ul>
        </nav>
    );
}

export default NavBar;