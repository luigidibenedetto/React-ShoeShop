import React from 'react';   
import './Footer.css';

function Footer(props) {
    return <footer>{(new Date().getFullYear())} &copy; <span>{props.company}</span></footer>
}

export default Footer;