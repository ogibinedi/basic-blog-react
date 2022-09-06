import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './CreateBlog.scss';
import { LinkLabel } from '../../components';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className='blog-post'>
        <LinkLabel title="Kembali ke home" onClick={() => history.push('/')} />
        <p className='label-create-new-blog'>Create New Blog Post</p>
        <Input label="Post title" />
        <p>Upload Image</p>
        <Upload />
        <TextArea />
        <Gap height={20} />
        <div className="button-save">
            <Button title="Save"/>
        </div>
    </div>
  )
}

export default CreateBlog