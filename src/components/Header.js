import PropTypes from "prop-types";

import "./Header.css";

function Header({ logo, name }) {
  return (
    <header className="Header">
      {/* <img src={logo} alt={name} /> */}
      <span style={{fontSize: 50}}>HS</span>
      <span>{name}</span>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
