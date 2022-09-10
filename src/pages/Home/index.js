import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import './home.scss';
import showFormattedDate from '../../utils/dateformat';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const [counter, setCounter] = useState(1)
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [dispatch, counter]);


  const history = useHistory();

  const prev = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure? This could not be undone.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(`https://basic-blog-react-3ro6gbo6a-ogibinedi.vercel.app/v1/blog/post/${id}`)
            .then(res => {
                dispatch(setDataBlog(counter));
            })
            .catch(err => console.log('err: ', err));
          }
        },
        {
          label: 'No',
          onClick: () => console.log('Canceled')
        }
      ]
    });
  }

  return (
    <div className="homepage-wrapper">
        <div className='create-wrapper'>
            <Button title="create blog" onClick={() => history.push('/create-blog') } />
        </div>
        <Gap height={20} />
        <div className="content-wrapper">
            {dataBlog.length !== 0 ? dataBlog.map(post => (
                <BlogItem 
                key={post._id} 
                image={`https://basic-blog-react-3ro6gbo6a-ogibinedi.vercel.app/${post.image}`}
                title={post.title}
                name={post.author.name}
                date={showFormattedDate(post.createdAt)}
                body={post.body}
                _id={post._id}
                onDelete={confirmDelete}
                 />
            )): <div className='empty-post'>
                    <span className='icon'><FaFileAlt size={100} /></span>
                    <h3 className='icon-info'>Belum ada postingan yang bisa ditampilkan. Silahkan buat postingan baru.</h3>
                </div>}
        </div>
        <div className='pagination'>
            <Button title="Previous" onClick={prev}/>
            <Gap width={20} />
            <p className='text-page'>{page.currentPage + "/" + page.totalPage}</p>
            <Gap width={20} />
            <Button title="Next" onClick={next} />
        </div>
    </div>
  );
};

export default Home;