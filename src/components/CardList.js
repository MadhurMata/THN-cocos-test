import React, { Component } from 'react'

import Card from './Card'

export default class CardList extends Component {
  state = {
   discount: false,
   promo: 0.9
  }

  componentDidMount() {
    this.handlePromo()
  }

  handlePromo = () => {
    const { promo } = this.props
    if (promo){
      this.setState({
        discount: true,
      }) 
    }
  }

  handleClick = (name, people, price) => {
    
    this.props.cardInfo(name, people, price)
  };

  render() {
    const {discount, promo} = this.state
    return (
      <div className="col-md-8 main">
        <Card
          img="images/cocos/room_1.png" 
          name="Mini Dreamy Room"
          description="Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor."
          size={25}
          beds={1}
          people={2}
          price={discount ? 350 * promo : 350}
          handleClick={this.handleClick}
        />
        <Card
          img="images/cocos/room_2.png" 
          name="Sweet Bungalow"
          description="The perfect blend of comfort and culture, our superior room with a central garden view has the stunning, and comes with a double bed."
          size={50}
          beds={1}
          people={2}
          price={discount ? 400 * promo : 400}
          handleClick={this.handleClick}

        />
        <Card 
          img="images/cocos/room_3.png"
          name="Mini Dreamy Room"
          description="Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor."
          size={125}
          beds={3}
          people={4}
          price={discount ? 600 * promo : 600}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}