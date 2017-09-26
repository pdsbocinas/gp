import React, { Component } from 'react'
import logo from '../../../images/icon-visa.png'
import { Navbar } from 'react-bootstrap'

class Logo extends Component {
  render() {
    return (
      <Navbar.Brand>
        <img src={logo} className="logo" alt="logo" />
      </Navbar.Brand>
    );
  }
}

export default Logo;
