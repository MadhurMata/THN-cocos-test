import React, { Component } from 'react'

export default class Card extends Component {
  render() {
      const { img, name, description, size, beds, people, price } = this.props
    return (
      <div className="card clearfix pointer active">
                <div className="room-image">
                    <img src={img} width="100%" />
                </div>

                <div className="room-content">
                    <h5 className="form-group">{name}</h5>
                    <p className="form-group">{description}</p>

                    <p className="form-group">Size: {size}m2</p>

                    <div className="room-info">
                        <div className="item">
                            <span className="inline-block">
                                <img src="images/icons/double-bed.svg" width="40" />
                            </span>
                            <div>Beds: {beds}</div>
                        </div>
                        <div className="item">People: {people}</div>
                        <div className="item price text-right">
                            <span className="line-through">€400</span>
                            €{price}
                    </div>
                    </div>
                </div>

            </div>
    )
  }
}