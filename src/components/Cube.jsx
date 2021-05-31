import React from 'react';
import RightArrow from '../img/arrow-right.svg';
import LeftArrow from '../img/arrow-left.svg';

class Cube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      rotation: ''
    }
    this.rotateForward = this.rotateForward.bind(this)
    this.rotateBack = this.rotateBack.bind(this)
  };

  rotateBack(){
    this.setState(
      {
        counter : this.state.counter += 90,
        rotation : 'translateZ( -50vw ) rotateY( ' + this.state.counter + 'deg )'
      }
    )
  }

  rotateForward(){
    this.setState(
      {
        counter : this.state.counter -= 90,
        rotation : 'translateZ( -50vw ) rotateY( ' + this.state.counter + 'deg )'
      }
    )
  }

  render(){
    console.log('render rotation: ' + this.state.rotation)
    return(
      <div className="wrap">
        <nav>
          <ul>
            <li><button className="previous" onClick={this.rotateBack}><img src={LeftArrow} alt="left arrow"/></button></li>
            <li><button className="next" onClick={this.rotateForward}><img src={RightArrow} alt="right arrow"/></button></li>
          </ul>
        </nav>
        <section className="cube-container">
          <div id="cube" style={{transform: this.state.rotation}}>
            <figure className="front">
              <div className="section-content">
                <header>home</header>
                <div className="content">
                  si lorem ipsum sit dolor est...
                </div>
                <div className="footer">content © james garrett 2021</div>
              </div>
            </figure>
            <figure className="back">
              <div className="section-content">
                  <header>shop</header>
                  <div className="content">
                    si lorem ipsum sit dolor est...
                  </div>
                  <div className="footer">content © james garrett 2021</div>
                </div>
            </figure>
            <figure className="right">
              <div className="section-content">
                 <header>projects</header>
                  <div className="content">
                    si lorem ipsum sit dolor est...
                  </div>
                  <div className="footer">content © james garrett 2021</div>
                </div>
              </figure>
            <figure className="left">
              <div className="section-content">
                  <header>contact</header>
                  <div className="content">
                    si lorem ipsum sit dolor est...
                  </div>
                  <div className="footer">content © james garrett 2021</div>
                </div>
            </figure>
          </div>
        </section>
      </div>
    );
  }
}

export default Cube
