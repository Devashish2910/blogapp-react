import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

//Action Creators
import {createPost} from './../actions/index';


class CreatePost extends Component {
  renderTextbox(field) {
    const {meta: {error, touched}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return(
      <div className={className}>
        <label> {field.label}: </label>
        <input
           className="form-control"
           type="text"
           placeholder={field.placeholder}
           {...field.input}
         />
       <div className='text-help'>
         {touched ? error : ''}
       </div>
      </div>
    );
  }

  renderTextArea(field) {
    const {meta: {error, touched}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return(
    <div className={className}>
      <label>{field.label}</label>
        <textarea
           className="form-control"
           type="text"
           placeholder={field.placeholder}
           rows="10"
           {...field.input}
         />
         <div className='text-help'>
           {touched ? error : ''}
         </div>
     </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
      alert("Post Create SuccessFully");
    })
  }

  render() {
    const {handleSubmit} = this.props;
    return(
      <form id="post-submit-form" className="post-submit-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            label="Title"
            component={this.renderTextbox}
            name="title"
            placeholder="What's the title?"
          />
        <Field
          label="Categories"
          name="categories"
          component={this.renderTextbox}
          placeholder="Article Belongs to which categories!!"
          />
        <Field
          label="Content"
          name="content"
          component={this.renderTextArea}
          placeholder="Fillout this with yopur great Ideas!!"/>
        </div>
        <button id="btn-submit" type="submit" className="btn btn-primary">Submit</button>
        <Link id="btn-back" className="btn btn-warning" to="/">
          Go Back
        </Link>
      </form>

    );
  }
}

const validate = (values) => {
  let error = {};

  if(!values.title) {
    error.title="*Title is Required!!"
  }

  if(!values.categories) {
    error.categories="*Atleast One Category is Required!!"
  }

  if(!values.content) {
    error.content="*Dumb!! How can you post a blog without content!!"
  }

  return error;

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({createPost},dispatch);
};

export default reduxForm({
  form: 'CreateNewPostForm',
  validate}
)(connect(null, mapDispatchToProps)(CreatePost));
