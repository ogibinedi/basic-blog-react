import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './CreateBlog.scss';
import { LinkLabel } from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import axios from 'axios';

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const {title, body } = form;
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
        setIsUpdate(true);
        axios.get(`https://basic-blog-react-3ro6gbo6a-ogibinedi.vercel.app/v1/blog/post/${id}`)
        .then(res => {
            const data = res.data.data;
            dispatch(setForm('title', data.title));
            dispatch(setForm('body', data.body));
            dispatch(setImgPreview(`https://basic-blog-react-3ro6gbo6a-ogibinedi.vercel.app/${data.image}`));
        })
        .catch(err => console.log('error: ', err))
    }
  },[props, dispatch])

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate){
        updateToAPI(form, id)
    } else {
        postToAPI(form);
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image',file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div className='blog-post'>
        <LinkLabel title="Kembali ke home" onClick={() => history.push('/')} />
        <p className='label-create-new-blog'>{isUpdate ? 'Update Blog Post' : 'Create New Blog Post'}</p>
        <Input label="Post title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
        <p>Upload Image</p>
        <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
        <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
        <Gap height={20} />
        <div className="button-save">
            <Button title={isUpdate ? 'Update' : 'Save'} onClick={onSubmit}/>
        </div>
    </div>
  )
}

export default CreateBlog