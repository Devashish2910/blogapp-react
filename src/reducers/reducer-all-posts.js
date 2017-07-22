import {FETCH_ALL_POSTS, DELETE_POST_BY_ID, CREATE_POST} from './../actions/index';
import _ from 'lodash';

export default (state=[], action) => {
  switch (action.type) {
    case CREATE_POST:
     return [action.payload.data, ...state]

    case DELETE_POST_BY_ID:
     return _.pull(state, action.payload.id);

    case FETCH_ALL_POSTS:
      return action.payload.data;

    default:
     return state;

  }
};
