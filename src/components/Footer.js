<<<<<<< HEAD
import { PropTypes } from "prop-types";

import './Footer.css'

function Footer({ company }) {
  return (
    <footer className="Footer">
      {new Date().getFullYear()} © {company}
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Footer;
=======
import React from 'react';   
import './Footer.css';

function Footer(props) {
    return <footer>{(new Date().getFullYear())} &copy; <span>{props.company}</span></footer>
}

export default Footer;
>>>>>>> fbb88796f607c597c4863b99c48b30747738ef9f
