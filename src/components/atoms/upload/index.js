import React from 'react';
import './upload.scss';
import { ContentBlog } from '../../../assets';

const Upload = () => {
  return (
    <div className='upload'>
        <img className='preview' src={ContentBlog} alt="preview" />
        <input type="file" name="file_name" id="file_name"  />
    </div>
  )
}

export default Upload