import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <div className='header__left'>
        <Link to='/' className='heading-secondary'>Streamy</Link>
      </div>
      <div className='header__right'>
        <Link to='/' className='btn btn--primary'>All streams</Link>
        <Link to='/' className='btn btn--primary'>Login</Link>
      </div>
    </header>
  );
}

export default Header;