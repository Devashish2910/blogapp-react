import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

//import App from './components/app';
import reducers from './reducers';

//Components
import PostsIndex from './components/posts-index';
import NewPost from './components/new-post';
import PostShow from './components/post-show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/" component={PostsIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
