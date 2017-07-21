export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
import axios from 'axios';

const url = 'http://reduxblog.herokuapp.com/api/posts';
const key = '?key=deva2910';

export const fetchPosts = () => {
  const request = axios.get(`${url}${key}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};
export const savePost = (values, callback) => {
  const request = axios.post(`${url}${key}`,values)
  .then(() => callback())
  .catch(() => {
    alert("Sorry, something went wrong!!");
  });

  return {
    type: CREATE_POST,
    payload: request
  };
};
export const fetchPostById = (id) => {
 const request = axios.get(`${url}/${id}${key}`);
 return {
   type: FETCH_POST,
   payload: request
 };
};
export const deletePostById = (id,callback) => {
  const request = axios.delete(`${url}/${id}${key}`)
  .then(() => callback())
  .catch(() => {
    alert("Post Not delete!!");
  })
  return {
    type: DELETE_POST,
    payload: request
  }
};
