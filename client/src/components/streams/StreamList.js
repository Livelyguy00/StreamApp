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

  streamCreator(stream){
    if(stream.userId === this.props.CurrentUserId){
      return(
        <div className='stream__creator'>
          <Link to='/streams/delete'>
            <FontAwesomeIcon icon={faTrashAlt} className='stream__creator--icon'></FontAwesomeIcon>
          </Link>
          <Link to='/streams/edit'>
            <FontAwesomeIcon icon={faEdit} className='stream__creator--icon'></FontAwesomeIcon>
          </Link>
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
          { this.streamCreator(stream) }
          <div className='stream__enter'>
            <Link to='/streams/show'>
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
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    streams: Object.values(state.streams),
    CurrentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps,
  { fetchStreams }
)(StreamList);