import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  console.log(props);
  const renderWarning = () => {
    return(
      <div className='modal'>
        <div className='warning'>
          You are not this stream creator! Create own stream to edit it!
        </div>
      </div>
    )
  }

  const renderCard = () => {
    return(
      <div className='modal'>
        <div className='card'>
          <h2 className='heading-secondary card__heading'>Delete Stream</h2>
          <p className='paragraph card__content'>Are you sure you want to delete this stream?</p>
          <div className='card__stream'>
            <h2 className='heading-secondary'>{this.props.stream.title}</h2>
          </div>
          <div className='card__btns'>
            <button className='btn btn--negative' onClick={this.onDelete()}>Delete</button>
            <button className='btn btn--neutral'>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  const fetchLoading = () => {
    return(
      <div className='modal'>
        <div className='loading-box u-text-center'>
          <span className='loading-box__loading'>&nbsp;</span>
        </div>
      </div>
    )
  }

  if(props.content === 'loading'){
    return ReactDOM.createPortal(
      fetchLoading(),
      document.querySelector('#modal')
    )
  }

  if(props.content === 'warning'){
    return ReactDOM.createPortal(
      renderWarning(),
      document.querySelector('#modal')
    ) 
  }
  else{
    return ReactDOM.createPortal(
      renderCard(),
      document.querySelector('#modal')
    ) 
  }
}

export default Modal;