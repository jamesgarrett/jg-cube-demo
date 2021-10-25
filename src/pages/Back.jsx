import React from 'react';
import Footer from '../components/Footer';
import Arrow from '../img/external-link.svg';

const Back = () => (
  <figure className="back">
    <div className="section-content">
      <div className="content">
        <h1>Projects</h1>
        <a className="styled-link" href="https://www.garrett.is/portfolio/2020/2/4/amc-design-system">AMC Design System <img className="link-arrow" src={Arrow}/></a>
        <a className="styled-link" href="https://www.garrett.is/portfolio/2020/3/5/travel-vilain">Travel Vilain <img className="link-arrow" src={Arrow}/></a>
        <a className="styled-link" href="https://www.garrett.is/portfolio/2020/2/11/snack-attack">Snack Attack <img className="link-arrow" src={Arrow}/></a>
        <a className="styled-link" href="https://www.garrett.is/portfolio/growcart">Growcart <img className="link-arrow" src={Arrow}/></a>
        <a className="styled-link" href="https://www.garrett.is/portfolio/2020/2/4/thirdhand">Thirdhand <img className="link-arrow" src={Arrow}/></a>
      </div>
      <Footer/>
    </div>
  </figure>
)

export default Back
