export const FETCH_POSTS = 'FETCH_POSTS';
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
