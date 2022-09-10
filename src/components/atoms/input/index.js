import React from 'react';
import './input.scss';
const Input = ({label, ...rest}) => {
  return (
    <>
        <div className='mb-3'>
            <label htmlFor="ControlInput" className='form-label'>{label}</label>
            <input className='form-control' {...rest} />
        </div>
    </>
  )
}

export default Input;