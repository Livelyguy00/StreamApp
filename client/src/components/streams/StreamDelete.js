import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions/index';

class StreamDelete extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onDelete(){
    this.props.deleteStream(this.props.match.params.id)
  }

  renderActions(){
    return(
      <>
        <button onClick={() => this.onDelete() } className='btn btn--negative'>Delete</button>
        <Link to='/' className='btn btn--neutral'>Cancel</Link>
      </>
    );
  }  

  render(){
    if(!this.props.stream){
      return(
        <Modal 
          type='loading'
          onDismiss={ () => history.push('/') }
        />
      );
    }

    if(this.props.signedUser !== this.props.stream.userId){
      return(
        <Modal 
          type='warning' 
          text='You are not this stream creator! Create own stream to edit it!'
          onDismiss={ () => history.push('/') }
        />
      );
    }
    else{
      return(
        <Modal 
          type='card' 
          stream={this.props.stream} 
          title='Delete Stream'
          text='Are you sure you want to delete this stream?'
          actions={this.renderActions()}
          onDismiss={ () => history.push('/') }
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    stream: state.streams[ownProps.match.params.id],
    signedUser: state.auth.userId
  }
}

export default connect(mapStateToProps, {
  deleteStream, fetchStream
})(StreamDelete);