import React, { useEffect, useState } from 'react';
import './DetailBlog.scss';
import { Gap, LinkLabel } from '../../components';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import showFormattedDate from '../../utils/dateformat';
import { FaArrowLeft } from 'react-icons/fa';
import { defaultImage } from '../../assets';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighLight from 'rehype-highlight';

const DetailBlog = (props) => {
  const [dataPost, setDataPost] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios.get(`https://obemernapi.herokuapp.com/v1/blog/post/${id}`)
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
                { dataPost.image.length > 0 ? (
                    <img className='content-image' src={`https://obemernapi.herokuapp.com/${dataPost.image}`} alt="detail-post" width="100%" />
                ) : (
                    <img className='content-image' src={defaultImage} alt="detail-post" width="100%" />
                )}
                <h3 className='content-title'>{dataPost.title}</h3>
                <p className='content-author'>{dataPost.author.name} - {showFormattedDate(dataPost.createdAt)}</p>
                <p content-body>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw, rehypeHighLight]}
                        children={dataPost.body}
                    />
                </p>
                <Gap height={20} />
                <LinkLabel 
                title={
                    <>
                        <FaArrowLeft /> <span>Kembali ke home</span>
                    </>
                } 
                onClick={() => history.push('/')} />
            </div>
        </div>
    )
  } else {
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '24px', color: 'green'}}>Loading data...</div>)
  }
  
}

export default withRouter(DetailBlog);