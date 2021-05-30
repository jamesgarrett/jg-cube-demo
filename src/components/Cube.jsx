import React from 'react';

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

  rotateForward(){
    this.setState(
      {
        counter : this.state.counter += 90,
        rotation : 'translateZ( -50vw ) rotateY( ' + this.state.counter + 'deg )'
      }
    )
  }

  rotateBack(){
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
        <section className="cube-container">
          <div id="cube" style={{transform: this.state.rotation}}>
            <figure className="front">
              <div className="section-content">
                <header>home</header>
                <nav>
                  <ul>
                    <li><button className="previous" onClick={this.rotateBack}>previous</button></li>
                    <li><button className="next" onClick={this.rotateForward}>next</button></li>
                  </ul>
                </nav>
                <div className="content">
                  si lorem ipsum sit dolor est...
                </div>
                <div className="footer">content © james garrett 2021</div>
              </div>
            </figure>
            <figure className="back">
              <div className="section-content">
                  <header>shop</header>
                  <nav>
                    <ul>
                      <li><button className="previous">previous</button></li>
                      <li><button className="next">next</button></li>
                    </ul>
                  </nav>
                  <div className="content">
                    si lorem ipsum sit dolor est...
                  </div>
                  <div className="footer">content © james garrett 2021</div>
                </div>
            </figure>
            <figure className="right">
              <div className="section-content">
                 <header>projects</header>
                  <nav>
                    <ul>
                      <li><button className="previous">previous</button></li>
                      <li><button className="next">next</button></li>
                    </ul>
                  </nav>
                  <div className="content">
                    si lorem ipsum sit dolor est...
                  </div>
                  <div className="footer">content © james garrett 2021</div>
                </div>
              </figure>
            <figure className="left">
              <div className="section-content">
                  <header>contact</header>
                  <nav>
                    <ul>
                      <li><button className="previous">previous</button></li>
                      <li><button className="next">next</button></li>
                    </ul>
                  </nav>
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
