import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

// Import both aplication state
import AllPosts from './reducer-all-posts';
import CurrentPost from './reducer-current-post';


const rootReducer = combineReducers({
  allPosts: AllPosts,
  currentPost: CurrentPost,
  form: formReducer
});

export default rootReducer;
