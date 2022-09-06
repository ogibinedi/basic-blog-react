import React from 'react';
import './header.scss';
import { FaSignOutAlt, FaReact } from 'react-icons/fa';
import { LinkLabel } from '../../atoms';
import { useHistory } from 'react-router-dom';
const Header = () => {
  const history = useHistory();
  return (
    <header>
        <nav className='header'>
            <div className='brand'>
                <FaReact size={45} /> &nbsp; <a href="/">My React Blog</a>
            </div>
            <div className='menu-item'>
                <span className='item-link'>
                    <LinkLabel title='Logout' onClick={() => history.push('/login')} />   &nbsp; <FaSignOutAlt color='white' />
                </span>
            </div>
        </nav>
    </header>
  );
};

export default Header;