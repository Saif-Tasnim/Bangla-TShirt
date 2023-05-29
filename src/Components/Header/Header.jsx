import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/order'>Order</Link>
            <Link to='/order'>Inventory</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    );
};

export default Header;