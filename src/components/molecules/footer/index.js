import React from 'react';
import './footer.scss';
import { 
    FaBloggerB, 
    FaFacebookSquare, 
    FaTwitterSquare, 
    FaInstagramSquare, 
    FaYoutubeSquare 
} from 'react-icons/fa';

const Footer = () => {
  const today = new Date();
  return (
    <footer className='container'>
        <div className='logo'>
            <FaBloggerB color='yellow' size={75} />
        </div>
        <div className='wrapper'>
            <div className='social-wrapper'>
                <FaFacebookSquare color='#344ceb' size={30} />
            </div>
            <div className="social-wrapper">
                <FaInstagramSquare color='#a118a3' size={30}/>
            </div>
            <div className="social-wrapper">
                <FaTwitterSquare color='#05a0ed' size={30}/>
            </div>
            <div className="social-wrapper">
                <FaYoutubeSquare color='#d60f0f' size={30}/>
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer;