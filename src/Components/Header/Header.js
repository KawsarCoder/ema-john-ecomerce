import React from 'react';
import Logo from "../../images/Logo.svg"
import "./Header.css";
const Header = () => {
    return (
        <div className='navWrap'>
          <nav className='navBar'>
                <img className='main-log' src={Logo} alt="site-logo" />
                <div className='tabWrap'>
                <a href="/order">Order</a>
                <a href="/orderReview">Order ReView</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">Login</a>
                </div>
          </nav>
        </div>
    );
};

export default Header;