import React from 'react';
import './link.scss';

const LinkLabel = ({title, onClick}) => {
  return (
    <p className='link' onClick={onClick}>{title}</p>
  );
};

export default LinkLabel;