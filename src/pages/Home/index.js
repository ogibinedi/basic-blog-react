import React, { useEffect } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import './home.scss';

const Home = () => {
  const {dataBlog} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog())
  }, [dispatch]);


  const history = useHistory();

  return (
    <div className="homepage-wrapper">
        <div className='create-wrapper'>
            <Button title="create blog" onClick={() => history.push('/create-blog') } />
        </div>
        <Gap height={20} />
        <div className="content-wrapper">
            {dataBlog.map(post => (
                <BlogItem 
                key={post._id} 
                image={`http://localhost:5000/${post.image}`}
                title={post.title}
                name={post.author.name}
                date={post.createdAt}
                body={post.body} />
            ))}
        </div>
        <div className='pagination'>
            <Button title="Previous"/>
            <Gap width={20} />
            <p className='text-page'>1/3</p>
            <Gap width={20} />
            <Button title="Next" />
        </div>
    </div>
  );
};

export default Home;