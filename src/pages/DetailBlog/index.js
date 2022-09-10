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
        <div className='detail-page'>
            <img className='content-image' src={`http://localhost:5000/${dataPost.image}`} alt="detail-post" />
            <p className='content-author'>{dataPost.author.name} - {showFormattedDate(dataPost.createdAt)}</p>
            <p content-body>{dataPost.body}</p>
            <Gap height={20} />
            <LinkLabel title="Kembali ke home" onClick={() => history.push('/')} />
        </div>
      )
  }

  return <p>Loading data...</p>
}

export default withRouter(DetailBlog);