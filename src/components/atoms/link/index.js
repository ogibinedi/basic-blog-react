import React from 'react';
import './link.scss';

const LinkLabel = ({title, onClick}) => {
  return (
    <span className='link' onClick={onClick}>{title}</span>
  );
};

export default LinkLabel;