import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class NewPost extends Component {

  renderTxtBox(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
   return(
     <div className={className}>
       <label> {field.lable}: </label>
       <input
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
      <div className="text-help">
          {touched ? error : ''}
      </div>

     </div>
   );
  }

  renderTxtArea(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label> {field.lable}: </label>
        <textarea
           className="form-control"
           type="text"
           placeholder={field.placeholder}
           rows="10"
           {...field.input}
         />
         <div className="text-help">
             {touched ? error : ''}
         </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }



  render() {
    const {handleSubmit} = this.props;
    return (

      <form id="post-submit-form"onSubmit={handleSubmit(this.onSubmit.bind(this))} className="new-post-form">
       <div >
          <Field
            lable="Title"
            name="title"
            component={this.renderTxtBox}
            placeholder= "Enter Your Blog Title"
          />
          <Field
            lable="Categories"
            name="categories"
            component={this.renderTxtBox}
            placeholder= "Your Blog Belongs to which category?? (Separate by ',')"
          />
          <Field
            lable="Content"
            name="content"
            component={this.renderTxtArea}
            placeholder= "Fill This With Your Ideas!!"
          />
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
       <Link id="btn-cancel" className="btn btn-danger" to="/">
           Cancel
       </Link>

      </form>
    );
  }
}

const validate = (values) => {
  const error = {};

  if(!values.title) {
    error.title = "*Please Enter Value In Title";
  }

  if(!values.categories) {
    error.categories = "*Please Enter Value In Categories";
  }

  if(!values.content) {
    error.content = "*Please Enter Value In Content";
  }

  return error;
};

export default reduxForm({
  validate,
  form: 'CreateNewPost'
})(NewPost);
