import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return(
        <div className='stream'>
          <div className='stream__info'>
            <div className='stream__info--title'></div>
            <div className='stream__info--desc'></div>
          </div>
          <div className='stream__enter'>
          <FontAwesomeIcon icon={faPlayCircle} className='stream__enter--icon'></FontAwesomeIcon>
          </div>
        </div>
      )
    })
  }

  render(){
    console.log(this.props.streams)
    return (
      <div className='stream__list'>
        { this.renderList() }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps,
  { fetchStreams }
)(StreamList);