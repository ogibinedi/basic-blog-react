import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './CreateBlog.scss';

const CreateBlog = () => {
  return (
    <div className='blog-post'>
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