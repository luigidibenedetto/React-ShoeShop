import React from 'react';   
import './Header.css';

function Header(props) {
  return <header><img src={props.logo} alt="logo" /><span>{props.name}</span></header>  
}

export default Header;