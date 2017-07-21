import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchPosts } from './../actions/index';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  eachPost() {
    return _.map(this.props.allPosts, post => {
      return (
        <li className="list-group-item" key={post.id} onClick={() => this.onPostClick(post)}>
        <Link to={`/post/${post.id}`}>
          {post.title}
        </Link>
       </li>
      );
    })
  }

  onPostClick(post) {
    const id = post.id;
    this.props.history.push('/post/'+id);
  }

  render() {
    return(
      <div className="all-posts">
        <div className="text-xs-right">
         <Link className="btn btn-primary" to="/posts/new">
           Add a Post
         </Link>
        </div>
        <h3>All Posts</h3>
        <ul className="list-group">
         {this.eachPost()}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    allPosts: state.allPosts
  };
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
