import React from 'react';
import Logo from '../img/logo.svg';
import Bars from '../img/bars.svg';

const Nav = () => (
    <nav className="header-nav">
      <img src={Logo} alt="JGCO Logo" />
      <img src={Bars} alt="Menu" />
    </nav>
)

export default Nav
