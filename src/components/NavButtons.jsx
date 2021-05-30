import React from 'react';

class NavButtons extends React.Component{
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
    return(
      <ul>
        <li><button className="previous" onClick={this.rotateBack}>previous</button></li>
        <li><button className="next" onClick={this.rotateForward}>next</button></li>
      </ul>
    )
  }
}

export default NavButtons
