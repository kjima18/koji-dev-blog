import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/logo.png';
import '../styles/topHeader.css';

const TopHeader = () => {
  return(
    <header className='header'>
      <Link to="/">
        <img src={Logo} className="logo-image" alt="logo"></img>
      </Link>
    </header>
  )
}

export default TopHeader;