import React from 'react';
import './DetailBlog.scss';
import {ContentBlog} from '../../assets';
import './DetailBlog.scss';

const DetailBlog = () => {
  return (
    <div className='detail-page'>
        <img className='content-image' src={ContentBlog} alt="detail-post" />
        <h2 className='content-title'>Title Blog</h2>
        <span className='content-author'>Author - Date Post</span>
        <p content-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic similique, reprehenderit eligendi harum aspernatur porro obcaecati possimus! Excepturi laboriosam voluptates similique suscipit consequuntur, maiores veniam eius quis amet harum quaerat.</p>
    </div>
  )
}

export default DetailBlog;