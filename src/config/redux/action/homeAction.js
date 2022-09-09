import axios from 'axios';

// first way
// export const setDataBlog = () => {
//     return (dispatch) => {
//         axios.get('http://localhost:5000/v1/blog/posts?page=2&perPage=4')
//         .then(result => {
//             const responseAPI = result.data;
//             dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
//         })
//         .catch(err => {
//             console.log('error: ', err);
//         })
//     }
// }

// second way to simplify
export const setDataBlog = () => (dispatch) => {
    axios.get('http://localhost:5000/v1/blog/posts?page=2&perPage=4')
    .then(result => {
        const responseAPI = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
    })
    .catch(err => {
        console.log('error: ', err);
    })
}