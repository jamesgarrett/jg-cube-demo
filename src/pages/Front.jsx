import React from 'react';
import Footer from '../components/Footer';
import Profile from '../img/profile.webp';

const Front = () => (
  <figure className="front">
    <div className="section-content">
      <div className="content">
        <div className="row">
          <div className="col">
            <h1>James Garrett</h1>
            <p>Hi, I'm James Garrett – a designer and developer focusing on digital product design, user experience design, and frontend engineering.</p>
          </div>
          <div className="col profile">
            <img src={Profile} alt="James Garrett"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </figure>
)

export default Front
