import React, { Component } from 'react'

import Nav from '../components/Nav'
import Engine from '../components/Engine'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default class Home extends Component {
  state = {
    booking: {}
  }

  handleBooking = (booking) => {
    this.setState({ booking })

  }
  render() {
    const { booking } = this.state
    return (
      <div className="room-and-rates">
        <Nav />
        <Engine handleBooking={this.handleBooking}/>
        <Main manageBooking={booking}/>
        <Footer />

      </div>
    )
  }
}