import React from 'react';
// import './blogItem.scss';
import { Button } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { defaultImage } from '../../../assets';


const BlogItem = ({ image, title, name, date, body, _id, onDelete}) => {
  const history = useHistory();
  return (
    <>
        <div className='col'>
            <div className="card shadow-sm">
                <img className='bd-placeholder-img card-img-top' src={image.length > 0 ? image :  defaultImage} width="100%" height="225" alt="featureImage" />
                <div className="card-body">
                  <p style={{ fontWeight: 'bold', color: 'grey'}}>{title.substring(0, 30)}...</p>
                  <p className="card-text">{body.substring(0, 50)}...</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button onClick={() => onDelete(_id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                      <button onClick={() => history.push(`/create-blog/${_id}`)} type="button" className="btn btn-sm btn-outline-success">Edit</button>
                    </div>
                    <small className="text-muted" style={{ fontWeight: 'bold', fontSize: '10px'}}>{name} {date}</small>
                  </div>
                </div>
                <div className="card-footer">
                   <Button className="btn btn-info btn-sm float-end" title="Read more..." onClick={() => history.push(`/detail-blog/${_id}`)} /> 
                </div>
            </div>
        </div>
    </>
  );
};

export default BlogItem;