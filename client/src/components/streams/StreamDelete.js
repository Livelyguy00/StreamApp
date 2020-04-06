import React from 'react';
import { connect } from 'react-redux';
import { deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
  onDelete(){
    deleteStream()
  }
  
  render(){
    return (
      <div className='card'>
        <h2 className='heading-secondary card__heading'>Delete Stream</h2>
        <p className='paragraph card__content'>Are you sure you want to delete this stream?</p>
        <div className='card__btns'>
          <button className='btn btn--negative' onClick={this.onDelete()}>Delete</button>
          <button className='btn btn--neutral'>Cancel</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  deleteStream
})(StreamDelete);