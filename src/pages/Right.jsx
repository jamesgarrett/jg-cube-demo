import React from 'react';
import Footer from '../components/Footer';
import DownloadIcon from '../img/download.svg';
const DownloadLink = 'https://www.dropbox.com/s/ezkzzzwlkwugb2s/James%20Garrett%20-%20Resume.pdf?dl=1';

const Right = () => (
  <figure className="right">
    <div className="section-content">
      <div className="content scroller">
        <br />
        <h1>Resume</h1>
        <hr />
        <a href={DownloadLink} className="download-button styled-link" target="_blank" rel="noopener noreferrer" download>
          Download Resume <img className="link-arrow" src={DownloadIcon}/>
        </a>
        <hr/>
        <strong>Product Design Manager - AMC Networks</strong>
        <em>September 2021 to Present</em>
        <br />
        <strong>Senior Product Designer - AMC Networks</strong>
        <em>January 2020 to September 2021</em>
        <br />
        <strong>UI Designer - AMC Networks</strong>
        <em>November 2018 to January 2020</em>
        <br />
        <description>At AMC Networks I worked as an embedded designer on product and engineering teams, designing and prototyping features and experiences for mobile, web, and TV devices. I also worked as an end to end designer and frontend developer creating consumer facing experiences with internal marketing teams. I managed a small team of developers and set up internal processes for request intake, project tracking, and quality assurance for our amcplus.com marketing site. I advocated for and was a primary contributor to the first design system at AMCN, which now powers a suite of 40+ applications. I have mentored and onboarded junior designers, and am currently managing the development of the second iteration of our flagship design system.</description>
        <hr/>
        <strong>Designer + Developer - BigEyedWish</strong>
        <em>September 2017 to November 2018</em>
        <br />
        <description>As part of this independent creative agency I spent my time designing and coding for a mix of marketing sites, emails, and collateral. I was responsible for concepting, wireframing, and branding across projects. I contributed design to accounts including DirecTV, AT&T, FuboTV, Hearst, and Diageo.</description>
        <hr/>
        <strong>Design Lead - Storybook Labs</strong>
        <em>January 2016 - September 2017</em>
        <br />
        <description>I worked with Storybook Labs from the initial pitch to bring the product to life. I built the prototype that helped secure an initial round of funding and cement first place in the pitch competition where I met the team. Once funded, I worked with engineers leading end-to-end design of features on iOS.</description>
        <hr/>
        <strong>Chief of Everything - James Garrett Co (Freelance)</strong>
        <em>April 2013 to Present</em>
        <br />
        <description>Freelancing taught me how to solve problems, how to turn an idea into a shippable digital product, how to work with constraints, and how to improvise. Some of my favorite projects have included building a winning campaign website for US Congressman Charlie Rangel, working with One World Observatory on their launch, and building API-driven art installations with MacArthur ‘Genius Grant’ recipient Sarah Sze at the Copenhagen Contemporary Museum of Art.</description>
        <hr/>
      </div>
      <Footer/>
    </div>
  </figure>
)

export default Right
