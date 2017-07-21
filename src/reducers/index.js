import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import AllPosts from './reducer-allPosts';

const rootReducer = combineReducers({
   allPosts: AllPosts,
   form: formReducer
});

export default rootReducer;
