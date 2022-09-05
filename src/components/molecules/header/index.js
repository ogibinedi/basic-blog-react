import React from 'react';
import './header.scss';
const Header = () => {
  return (
    <header>
        <nav className='header'>
            <div className='brand'>My React Blog</div>
            <div className='menu-item'>
                <span className='item-link'>Login</span>
                <span className='item-link'>Register</span>
                <span className='item-link'>Logout</span>
            </div>
        </nav>
    </header>
  );
};

export default Header;