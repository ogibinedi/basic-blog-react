import React, { useEffect, useState } from 'react';
import './DetailBlog.scss';
import { Gap, LinkLabel } from '../../components';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import showFormattedDate from '../../utils/dateformat';

const DetailBlog = (props) => {
  const [dataPost, setDataPost] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios.get(`http://localhost:5000/v1/blog/post/${id}`)
    .then(res => {
        setDataPost(res.data.data);
    })
    .catch(err => console.log(err));
  }, [props])
  const history = useHistory();
  
  if (dataPost.author) {
    return (
        <div className='container-sm'>
            <div className="col-sm-12">
                <img className='content-image' src={`http://localhost:5000/${dataPost.image}`} alt="detail-post" width="100%" />
                <h3>{dataPost.title}</h3>
                <p className='content-author'>{dataPost.author.name} - {showFormattedDate(dataPost.createdAt)}</p>
                <p content-body>{dataPost.body}</p>
                <Gap height={20} />
                <LinkLabel title="Kembali ke home" onClick={() => history.push('/')} />
            </div>
        </div>
    )
  } else {
    return (<div>Loading data...</div>)
  }
  
}

export default withRouter(DetailBlog);