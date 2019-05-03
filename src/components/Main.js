import React from 'react'

import CardList from './CardList'
import Summary from './Summary'


export default function Main() {
  return (
    <div className="container rar-summary">
      <section className="row">
        <div className="col-md-8 main">
            <h2>Rooms & Rates</h2>
            <p className="subtitle">Plan your perfect stay at our hotel</p>
            <img src="images/cocos/wizard_1.png" width="480" className="wizard" />
        </div>
        <div className="col-md-4 sidebar-header"></div>
      </section>
      <section className="row">
        <CardList />
        <Summary />
      </section>
    </div>
  )
}