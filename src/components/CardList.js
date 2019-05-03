import React, { Component } from 'react'

import Card from './Card'

export default class CardList extends Component {
  render() {
    return (
      <div className="col-md-8 main">
        <Card
          img="images/cocos/room_1.png" 
          name="Mini Dreamy Room"
          description="Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor."
          size={25}
          beds={1}
          people={2}
          price={350}
        />
        <Card
          img="images/cocos/room_2.png" 
          name="Sweet Bungalow"
          description="The perfect blend of comfort and culture, our superior room with a central garden view has the stunning, and comes with a double bed."
          size={50}
          beds={1}
          people={2}
          price={400}
        />
        <Card 
          img="images/cocos/room_3.png"
          name="Mini Dreamy Room"
          description="Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor."
          size={125}
          beds={3}
          people={4}
          price={600}
        />
      </div>
    )
  }
}