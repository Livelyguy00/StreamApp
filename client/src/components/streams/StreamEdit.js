import React from 'react';
import _ from 'lodash';
import { editStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render(){
    if(!this.props.stream){
      return (
        <div className='loading-box u-text-center'>
          <span className='loading-box__loading'>&nbsp;</span>
        </div>
      );
    }

    if(this.props.signedUser !== this.props.stream.userId){
      return(
        <div className='warning'>
          You are not this stream creator! Create own stream to edit it!
        </div>
      );
    }
    else{
      return(
        <div>
          <h2 className='heading-secondary'>Edit your stream</h2>
          <StreamForm 
            onSubmit={ this.onSubmit } 
            initialValues={_.pick(this.props.stream, 'title', 'description')} 
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    stream: state.streams[ownProps.match.params.id],
    signedUser: state.auth.userId
  }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);