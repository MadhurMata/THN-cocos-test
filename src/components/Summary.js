import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { statement } from '@babel/template';



export default class Summary extends Component {
    state = {
        numberOfNights: 1,
        defaultPrice: 350,
        booking: {
            checkIn: "",
            checkout: "",
            adults: 0,
            children: 0,
            cardName: "",
            cardPrice: 0,
            totalPrice: 0,
            numberOfNights: 0
        }
    };

    componentDidMount = () => {
       if(JSON.parse(localStorage.getItem("booking"))){
            this.getInfo();  
        }   
    }


    handleNumberOfNights = event => {
        event.preventDefault();
        this.setState({
            numberOfNights: parseInt(event.target.value)
        })
    };

   totalPrice = () => {
        const { numberOfNights, defaultPrice, cardPrice } = this.state
        const OneNightPrice = this.props.cardInfo.cardPrice
        if(localStorage === undefined){
            return "€" + (numberOfNights * cardPrice)
        } else if (OneNightPrice) {
            return "€" + numberOfNights * OneNightPrice
        } else if(numberOfNights === 1){
            return "€" + defaultPrice
        }else{
            const totalPrice = numberOfNights * defaultPrice
            return "€" + totalPrice
        }
    }

    handleSaveInfo = () => {
        const {checkIn, checkout, adults, children} = this.props.summary;  
        const {cardName, cardPrice } = this.props.cardInfo
        const booking = {
            checkIn,
            checkout,
            adults,
            children,
            cardName,
            cardPrice: cardPrice || this.state.defaultPrice,
            totalPrice: this.totalPrice(),
            numberOfNights: parseInt(this.state.numberOfNights)
        }
        localStorage.setItem("booking", JSON.stringify(booking));
        this.setState({
            booking,
        })
    };

    getInfo = () => {
        const storedInfo = JSON.parse(localStorage.getItem("booking"))
        const { checkIn, checkout, adults, children, cardName, totalPrice, numberOfNights} = storedInfo
        this.setState({
            checkIn,
            checkout,
            adults,
            children,
            cardName,
            totalPrice,
            numberOfNights
        })
    }

    render() {
        const {
            numberOfNights,
            cardName: cardNameLocalStorage,
            checkIn: checkInLocalStorage,
            checkout: checkoutLocalStorage,
            adults: adultsLocalStorage,
            children: childrenLocalStorage


        } = this.state
        const { summary, cardInfo } = this.props;
        const { checkIn, checkout, adults, children } = summary;
        const { cardName, cardPeople } = cardInfo;
    return (
      <div className="col-md-4 sidebar">

            <div className="card">
                <h2>Reservation Summary</h2>
                <div className="clearfix">
                    <h5 className="pull-left">{cardName || cardNameLocalStorage || "Mini Dreamy Room"}</h5>
                    <div className="form-group pull-right">
                        <select className="pull-right" id="rooms"  onChange={this.handleNumberOfNights}>
                            <option value={numberOfNights} selected disabled hidden>{numberOfNights}</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                    </div>
                </div>

                <div className="clearfix">

                    <div className="card-content">
                        <p className="main">Check in</p>
                        <p className="base">From 15.00h</p>
                    </div>

                    <div className="card-content">
                        <p className="main">Check out</p>
                        <p className="base">Before 12.00h</p>
                    </div>

                    <div className="card-content">
                        <p className="main">Reservation date</p>
                        {(checkIn && checkout) || (checkoutLocalStorage && checkInLocalStorage) ? 
                            <p className="base">From <strong><span id="checkin-summary">{checkIn || checkInLocalStorage}
                            </span></strong> to <strong id="checkout-summary">{checkout || checkoutLocalStorage}</strong></p> :
                            <p className="summaryMessage">Place your Booking dates</p>
                        }
                    </div>

                    {adults || adultsLocalStorage ?  
                    <div className="card-content">
                        <p className="main">People</p>
                        <p className="base" id="adults-summary">{adults || adultsLocalStorage || 2} Adults</p>
                        <p className="base" id="children-summary">{children || childrenLocalStorage || 0} Children</p>
                    </div> :
                        <p className="main">{ cardPeople } People</p>
                    }

                    
                    <div className="card-checkout clearfix">
                        <div className="left pull-left">
                            <p className="main">Total</p>
                            <p className="base"><Link to="#">Price details ></Link></p>
                        </div>
                        <div className="right pull-right">
                            <p className="main">{this.totalPrice()}</p>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-group-justified" onClick={this.handleSaveInfo}>
                        Save
                    </button>
                </div>
            </div>


        </div>
    )
  }
}