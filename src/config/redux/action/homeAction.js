import axios from 'axios';

export const setDataBlog = (page) => (dispatch) => {
    axios.get(`https://basic-blog-react-93j36ut7v-ogibinedi.vercel.app/v1/blog/posts?page=${page}&perPage=6`)
    .then(result => {
        const responseAPI = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
        dispatch({
            type: 'UPDATE_PAGE', 
            payload: {
                currentPage: responseAPI.current_page, 
                totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
            }
        });
    })
    .catch(err => {
        console.log('error: ', err);
    })
}