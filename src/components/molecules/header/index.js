import React from 'react';
import { FaFacebook, FaMailBulk, FaReact, FaTwitter } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Tentang</h4>
              <p className="text-muted">My MERN Blog adalah aplikasi web sederhana yang dibuat menggunakan javascript modern, nodejs express dan mongodb</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white" style={{ textDecoration: 'none'}}>Follow saya di &nbsp; <FaTwitter /></a></li>
                <li><a href="/" className="text-white" style={{ textDecoration: 'none'}}>Like saya &nbsp; <FaFacebook /></a></li>
                <li><a href="/" className="text-white" style={{ textDecoration: 'none'}}>Email saya di &nbsp; <FaMailBulk/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm navbar-fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <FaReact /> &nbsp;
            <strong>My MERN Blog</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;