import React from 'react';
import './blogItem.scss';
import { Button, Gap } from '../../atoms';
import { useHistory } from 'react-router-dom';

const BlogItem = (props) => {
  const { image, title, name, date, body } = props;
  const history = useHistory();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt="featureImage" />
        <div className="content-detail">
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{name} - {date}</h3>
            <p className='body'>{body}</p>
            <Gap height={20} />
            <Button title="Read more..." onClick={() => history.push('/detail-blog')} />
        </div>
    </div>
  );
};

export default BlogItem;