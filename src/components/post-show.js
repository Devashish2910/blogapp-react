import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPostById, deletePostById} from './../actions/index';

class PostShow extends Component {
  render() {
    return(
      <div>

      </div>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostById, deletePostById}, dispatch);

};

const mapStateToProps = state => {
  allPost: state.allPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
