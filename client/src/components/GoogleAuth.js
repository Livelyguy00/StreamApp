import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '826938809501-992ahnccropcre2sp1hc4p1enqd69ib2.apps.googleusercontent.com',
        scope: 'email'  
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    })
  }

  onAuthChange = isSignedIn => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null){
      return (
        <div className='loading-box'>
          <div className='loading-box__loading'></div>
          <span className='loading-box__text'>Loading...</span>
        </div>
      );
    }
    else if(this.props.isSignedIn){
      return (
        <div className='btn btn--primary' onClick={ this.onSignOutClick }>Sign Out</div>
      )
    }
    else{
      return <div className='btn btn--primary' onClick={ this.onSignInClick }>Sign In</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps, 
  { signIn, signOut }
)(GoogleAuth);