import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

//Action Creators
import {fetchAllPosts} from './../actions/index';

// Components



class AllPosts extends Component {
  componentDidMount() {
   this.props.fetchAllPosts();
  }

  renderPostList() {
    return this.props.posts.map((post, i) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/post/${post.id}`}>
            {i + 1}. {post.title}
          </Link>

        </li>
      );
    })
  }

  render() {
    return(
     <div className="all-posts">
       <div className="text-xs-right">
         <Link className="btn btn-primary" to="/newpost">
           Create New Post
         </Link>
       </div>
       <h4>All Posts</h4>
       <ul className="list-group">
         {this.renderPostList()}
       </ul>
     </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    posts: state.allPosts
  }

};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchAllPosts}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
