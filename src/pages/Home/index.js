import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap, Search } from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import './home.scss';
import showFormattedDate from '../../utils/dateformat';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { FaFileAlt, FaPlus } from 'react-icons/fa';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [counter, setCounter] = useState(1)
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [dispatch, counter]);

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
            axios.delete(`https://obemernapi.herokuapp.com/v1/blog/post/${id}`)
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
    <div className='album py-5 bg-light'>
        <div className='container'>
            <Search placeholder="Masukan Judul Artikel yang kamu cari"
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
        />
        <Gap height={100} />
        <button className='btn btn-success btn-md text-right'onClick={() => history.push('/create-blog') } style={{ position: 'absolute'}}><FaPlus /> &nbsp; Create Blog </button>
        <Gap height={70} />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            
            {
                // eslint-disable-next-line array-callback-return
                dataBlog.length !== 0 ? dataBlog.filter((search) => {
                if(searchTerm === ""){
                    return search;
                }
                if(search.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return search;
                }
            })
            .map(post => (
                <BlogItem 
                key={post._id} 
                image={`https://obemernapi.herokuapp.com/${post.image}`}
                title={post.title}
                name={post.author.name}
                date={showFormattedDate(post.createdAt)}
                body={post.body}
                _id={post._id}
                onDelete={confirmDelete}
                 />
            )): <div className='container-fluid'>
                    <span style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItem: 'center', margin: 'auto'}}><FaFileAlt size={100} color='grey' /></span>
                    <h3 style={{ color: 'grey', textAlign: 'center', }}>Belum ada postingan yang bisa ditampilkan. Silahkan buat postingan baru.</h3>
                </div>}
        </div>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
            <Button className="btn btn-warning" title="Previous" onClick={prev}/>
            <Gap width={20} />
            <p className='text-page'>{page.currentPage + "/" + page.totalPage}</p>
            <Gap width={20} />
            <Button className="btn btn-warning" title="Next" onClick={next} />
        </div>
        </div>
    </div>
        
  );
};

export default Home;