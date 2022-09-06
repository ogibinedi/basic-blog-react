import React from 'react';
import './blogItem.scss';
import { ContentBlog } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={ContentBlog} alt="featureImage" />
        <div className="content-detail">
            <p><h2 className='title'>Judul Blog</h2></p>
            <p><h3 className='author'>Author - Date Posting</h3></p>
            <p className='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores dignissimos in corporis, iste dolorum cum eius corrupti laudantium consectetur ullam quos illum ab ipsum ducimus quaerat fugit? Nemo, eligendi.</p>
            <Gap height={20} />
            <Button title="Read more..." onClick={() => history.push('/detail-blog')} />
        </div>
    </div>
  );
};

export default BlogItem;