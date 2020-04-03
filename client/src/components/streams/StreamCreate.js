import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput (formProps) {
    return (
      <div className='form__group'>
        <label for={formProps.input.name} className='form__label'>{formProps.input.name}</label>
        <input 
          type='text' 
          className='form__input' 
          id={formProps.input.name} 
          value={formProps.input.value} 
          onChange={formProps.input.onChange}/>
      </div>
    );
  }

  render(){
    return (
      <form className='form'>
        <Field name='title' component={ this.renderInput }/>
        <Field name='description' component={ this.renderInput }/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);