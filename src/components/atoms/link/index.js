import React from 'react';
import './link.scss';

const LinkLabel = ({title, onClick}) => {
  return (
    <p className='btn btn-success float-end' onClick={onClick}>{title}</p>
  );
};

export default LinkLabel;