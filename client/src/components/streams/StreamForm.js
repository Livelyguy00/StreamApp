import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError = ({ touched, error }) => {
    if(touched && error){
      return(
        <div className='form__error'>
          { error }
        </div>
      );
    }
  }

  renderInput = ({ input, meta }) => {
    return (
      <div className='form__group'>
        <label className='form__label'>{input.name}</label>
        <input 
          type='text' 
          className='form__input' 
          {...input}
          autoComplete='off'
        />
        <div className='form__message'>
          {this.renderError(meta)}
        </div>
      </div>
    );
  }

  onSubmit = formValues =>{
    this.props.onSubmit(formValues)
  }

  render(){
    return (
      <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className='form'>
        <Field name='title' component={ this.renderInput }/>
        <Field name='description' component={ this.renderInput }/>
        <button className='btn btn--primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.title){
    errors.title = 'You must name your stream';
  }
  if(!formValues.description){
    errors.description = 'You must add a description to your stream'
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);