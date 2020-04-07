import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  const renderWarning = () => {
    return(
      <div onClick={ props.onDismiss } className='modal'>
        <div onClick={(e) => e.stopPropagation()} className='warning u-absolute-centered'>
          { props.text }
        </div>
      </div>
    )
  }

  const renderCard = () => {
    return(
      <div onClick={ props.onDismiss } className='modal'>
        <div onClick={(e) => e.stopPropagation()} className='card u-absolute-centered'>
          <h2 className='heading-secondary card__heading'>{ props.title }</h2>
          <p className='paragraph card__content'>{ props.text }</p>
          <div className='card__stream'>
            <h2 className='heading-secondary'>{props.stream.title}</h2>
          </div>
          <div className='card__actions'>
            { props.actions }
          </div> 
        </div>
      </div>
    );
  }

  const fetchLoading = () => {
    return(
      <div onClick={ props.onDismiss } className='modal'>
        <div onClick={(e) => e.stopPropagation()} className='loading-box u-absolute-centered'>
          <span className='loading-box__loading'></span>
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  if(props.type === 'loading'){
    return ReactDOM.createPortal(
      fetchLoading(),
      document.querySelector('#modal')
    )
  }

  if(props.type === 'warning'){
    return ReactDOM.createPortal(
      renderWarning(),
      document.querySelector('#modal')
    ) 
  }

  if(props.type === 'card'){
    return ReactDOM.createPortal(
      renderCard(),
      document.querySelector('#modal')
    ) 
  }
}

export default Modal;