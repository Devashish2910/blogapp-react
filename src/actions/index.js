import axios from 'axios';
const url = 'http://reduxblog.herokuapp.com/api/posts';
const key = '?key=deva2910';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID';
export const CREATE_POST = 'CREATE_POST';


export const createPost = (values, callback) => {
  const request = axios.post(`${url}${key}`, values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
};

export const fetchAllPosts = () => {
  const request = axios.get(`${url}${key}`);
  return {
    type: FETCH_ALL_POSTS,
    payload: request
  }
};

export const fetchPostById = (id) => {
  const request = axios.get(`${url}/${id}${key}`);

  return {
    type: FETCH_POST_BY_ID,
    payload: request
  }
};

export const deletePostById = (id, callback) => {
  const request = axios.delete(`${url}/${id}${key}`)
  .then(() => callback());


  return {
    type: DELETE_POST_BY_ID,
    payload: request
  }
}
