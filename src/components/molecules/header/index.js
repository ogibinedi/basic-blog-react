import React from 'react';
import './header.scss';
import { FaSignOutAlt, FaReact } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
        <nav className='header'>
            <div className='brand'><FaReact size={45} /> &nbsp; My React Blog</div>
            <div className='menu-item'>
                <span className='item-link'>
                    Logout &nbsp; <FaSignOutAlt color='white' />
                </span>
            </div>
        </nav>
    </header>
  );
};

export default Header;