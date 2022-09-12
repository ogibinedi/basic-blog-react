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
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

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
                        rehypePlugins={[rehypeRaw, remarkGfm]}
                        children={dataPost.body}
                        components={{
                          code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                              <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                              />
                            ) : (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            )
                          }
                        }}
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