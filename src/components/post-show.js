import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPostById, deletePostById} from './../actions/index';
import {Link} from 'react-router-dom';

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
  }


  render() {
    const {myPost} = this.props;

    if(!myPost) {
      return(
          <div>Loading...</div>
      );

    }
    return(
      <div className="post-show">
       <div className="navigation">
         <Link className="btn btn-warning text-xs-left" to="/">
             Back To All
         </Link>
          <button className="btn btn-danger pull-xs-right" onClick={() => this.onDeleteClick(myPost.id)}>
            Delete Post
          </button>
       </div>
       <h3 id="title">{myPost.title}</h3>
       <h6 id="categories">Categories: {myPost.categories}</h6>
       <p id="content">{myPost.content}</p>

      </div>
    );
  }

  onDeleteClick(id) {
   this.props.deletePostById(id, () => {
     this.props.history.push('/');
     alert("Post Deleted Succesfully.");
   })
  }

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostById, deletePostById}, dispatch);

};

const mapStateToProps = ({allPosts}, ownProps) => {
  return {
    myPost: allPosts[ownProps.match.params.id]
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
