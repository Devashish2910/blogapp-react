import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostById, deletePostById} from './../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

// Action Creators


class ViewPost extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
   this.props.fetchPostById(postId);
  }

  onDeleteClick(id) {
    this.props.deletePostById(id, () => {
      this.props.history.push("/");
      alert("Post Deleted Succesfully");
    })
  }

  render() {
    const {currentPost} = this.props;

    if(!currentPost) {
      <div>
        <h3>Loading...</h3>
      </div>
    }
    return(
      <div className="view-post-main">
        <div className="navigation">
         <Link to="/" className="btn btn-info text-xs-left">
           Back To All Posts
         </Link>
         <button className="btn btn-danger pull-xs-right" onClick={() => this.onDeleteClick(currentPost.id)}>
           Delete Post
         </button>
        </div>
        <h2 id="title">{currentPost.title}</h2>
        <h6 id="cotegories">Categories: {currentPost.categories}</h6>
        <p id="content">{currentPost.content}</p>
      </div>

    );
  }
}

const mapStateToProps = ({currentPost}) => {
  return {
    currentPost
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostById, deletePostById},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
