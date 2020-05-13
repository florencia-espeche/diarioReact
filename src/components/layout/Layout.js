import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({children}) => {

    return (
        <div className="layout-container">
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;