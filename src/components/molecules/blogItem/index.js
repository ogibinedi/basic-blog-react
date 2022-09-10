import React from 'react';
import './blogItem.scss';
import { Button, Gap } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BlogItem = ({ image, title, name, date, body, _id, onDelete}) => {
  const history = useHistory();
  return (
    <>
        <div className='blog-item'>
            <img className='image-thumb' src={image} alt="featureImage" />
            <div className="content-detail">
                <div className="title-wrapper">
                <p className='content-title'>{title}</p>
                <div className="edit-wrapper">
                    <span onClick={() => history.push(`/create-blog/${_id}`)} className='edit'><FaEdit /></span>
                    <span onClick={() => onDelete(_id)} className='delete'><FaTrash /></span>
                </div>
            </div>
                <p className='author'>{name} - {date}</p>
                <p className='body'>{body}</p>
                <Gap height={20} />
                <Button title="Read more..." onClick={() => history.push(`/detail-blog/${_id}`)} />
            </div>
        </div>
    </>
  );
};

export default BlogItem;