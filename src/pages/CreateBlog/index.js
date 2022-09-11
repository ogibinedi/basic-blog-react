import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './CreateBlog.scss';
import { LinkLabel } from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from 'react-icons/fa';


const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const {title, body } = form;
  const history = useHistory();
  const notify = () => {
    // set 3 second
    if (isUpdate){
        toast.success('The update has succeed.', {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000
        })
    }else {
        toast.success('New post has added', {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000
        })
    }
  }

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
        setIsUpdate(true);
        axios.get(`https://obemernapi.herokuapp.com/v1/blog/post/${id}`)
        .then(res => {
            const data = res.data.data;
            dispatch(setForm('title', data.title));
            dispatch(setForm('body', data.body));
            dispatch(setImgPreview(`https://obemernapi.herokuapp.com/${data.image}`));
        })
        .catch(err => console.log('error: ', err))
    }
  },[props, dispatch])

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate){
        updateToAPI(form, id)
        notify()
    } else {
        postToAPI(form);
        notify();
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image',file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div className="container">
        <ToastContainer />
        <div className='form-control'>
            <LinkLabel 
            title={
                <span>
                <FaArrowLeft /> <span>Kembali ke home</span>
                </span>
            } 
            onClick={() => history.push('/')} />
            <p className='label-create-post'>{isUpdate ? 'Update Blog Post' : 'Create New Blog Post'}</p>
            <Input label="Post title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
            <p>Upload Image</p>
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea label="Post Body" value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
            <Gap height={20} />
            <div className="button-save">
                <Button title={isUpdate ? 'Update' : 'Save'} onClick={onSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default CreateBlog