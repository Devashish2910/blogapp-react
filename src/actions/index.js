export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
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

};
export const deletePostById = (id) => {

};
