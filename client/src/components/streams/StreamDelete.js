import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions/index';

class StreamDelete extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onDelete(){
    console.log(this.props)
  }

  render(){
    if(!this.props.stream){
      return(
        <Modal content='loading'/>
      );
    }

    if(this.props.signedUser !== this.props.stream.userId){
      return(
        <Modal content='warning'/>
      );
    }
    else{
      return(
        <Modal content='card'/>
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