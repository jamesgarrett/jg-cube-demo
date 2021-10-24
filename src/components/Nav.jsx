import React from 'react';
import Logo from '../img/logo.svg';
import Linkedin from '../img/linkedin.svg';
import Github from '../img/github.svg';

const Nav = () => (
    <nav className="header-nav">
      <img src={Logo} alt="JGCO Logo" />
      <div className="right">
        <a href="https://www.linkedin.com/in/g4rrett"><img src={Linkedin} alt="Menu" className="social" /></a>
        <a href="https://www.github.com/jamesgarrett"><img src={Github} alt="Menu" className="social" /></a>
      </div>
    </nav>
)

export default Nav
