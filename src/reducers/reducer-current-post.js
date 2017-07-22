import {FETCH_POST_BY_ID} from './../actions/index';

export default (state ={}, action) => {
  switch (action.type) {
    
    case FETCH_POST_BY_ID:
    return action.payload.data;

    default:
     return state;

  }
}
