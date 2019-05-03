import React, { Component } from 'react'

import Nav from '../components/Nav'
import Engine from '../components/Engine'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default class Home extends Component {
  render() {
    return (
      <div className="room-and-rates">
        <Nav />
        <Engine />
        <Main />
        <Footer />

      </div>
    )
  }
}