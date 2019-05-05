import React, { Component } from 'react'

import Nav from '../components/Nav'
import Engine from '../components/Engine'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default class Promo extends Component {
  state = {
    booking: {},
    promo: "promo"
  }

  handleBooking = (booking) => {
    this.setState({ booking })
  }

  render() {

    return (
      <div className="room-and-rates">
        <Nav />
        <Engine handleBooking={this.handleBooking}/>
        <Main summary={this.state.booking} promo={this.state.promo}/>
        <Footer />
      </div>
    )
  }
}