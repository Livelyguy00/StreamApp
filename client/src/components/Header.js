import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return(
    <header className='header'>
      <div className='header__left'>
        <Link to='/' className='heading-secondary'>Streamy</Link>
      </div>
      <div className='header__right'>
        <Link to='/' className='btn btn--primary'>All streams</Link>
        <GoogleAuth />
      </div>
    </header>
  );
}

export default Header;