import React, { Component } from 'react';
import '../App.css';

class Bouton extends Component {
  render() {
    return (
      <button style={{fontSize:this.props.action}} onClick={this.props.fonction} >{this.props.text}</button>
    );
  }
}

export default Bouton;
