import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }

  streamMenagement(stream){
    if(stream.userId === this.props.CurrentUserId){
      return(
        <div className='stream__creator'>
          <Link to={`/streams/delete/${stream.id}`}>
            <FontAwesomeIcon icon={faTrashAlt} className='stream__creator--icon'></FontAwesomeIcon>
          </Link>
          <Link to={`/streams/edit/${stream.id}`}>
            <FontAwesomeIcon icon={faEdit} className='stream__creator--icon'></FontAwesomeIcon>
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if(this.props.isLogged){
      return(
        <div className='u-text-right'>
          <Link to='/streams/new' className='btn btn--primary'>Create a stream</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return(
        <div className='stream' key={stream.id}>
          <div className='stream__info'>
            <div className='stream__info--title'>{stream.title}</div>
            <div className='stream__info--desc'>{stream.description}</div>
          </div>
          { this.streamMenagement(stream) }
          <div className='stream__enter'>
            <Link to={`/streams/${ stream.id }`}>
              <FontAwesomeIcon icon={faPlayCircle} className='stream__enter--icon'></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className='stream__list'>
        <h2 className='heading-secondary'>Streams</h2>
        { this.renderList() }
        { this.renderCreate() }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    streams: Object.values(state.streams),
    CurrentUserId: state.auth.userId,
    isLogged: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps,
  { fetchStreams }
)(StreamList);