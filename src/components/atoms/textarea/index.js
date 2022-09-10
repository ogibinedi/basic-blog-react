import React from 'react';
import './textarea.scss';

const TextArea = ({label, ...rest }) => {
  return (
    <div className='mb-3'>
        <label htmlFor="ControlInput" className='form-label'>{label}</label>
        <textarea className='form-control' rows={3} {...rest}></textarea>
    </div>
  )
}

export default TextArea