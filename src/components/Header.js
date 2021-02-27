<<<<<<< HEAD
import PropTypes from "prop-types";

import "./Header.css";

function Header({ logo, name }) {
  return (
    <header className="Header">
      <img src={logo} alt={name} />
      <span>{name}</span>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
=======
import React from 'react';   
import './Header.css';

function Header(props) {
  return <header><img src={props.logo} alt="logo" /><span>{props.name}</span></header>  
}

export default Header;
>>>>>>> fbb88796f607c597c4863b99c48b30747738ef9f
