import React from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="mb-1">&copy; { today.getFullYear() } My MERN Blog</p>
        <p className="mb-0">My MERN Blog adalah aplikasi web sederhana yang dibuat menggunakan javascript modern, nodejs express dan mongodb.</p>
      </div>
    </footer>
  )
}

export default Footer;