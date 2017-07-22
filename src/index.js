import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

// Components & Containers
import AllPosts from './containers/all-posts';
import ViewPost from './containers/view-post';
import CreatePost from './containers/create-post';





const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <div className="text-md-center"><h5>Blog App Prototype - Devashish - React</h5></div>
        <Switch>
          <Route path="/newpost" component={CreatePost} />
          <Route path="/post/:id" component={ViewPost} />
          <Route path="/" component={AllPosts} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
