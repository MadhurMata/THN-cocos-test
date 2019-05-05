import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { statement } from '@babel/template';



export default class Summary extends Component {
    state = {
        numberOfNights: 1,
        defaultPrice: 350,
        areMissingDates: false,
        booking: {
            checkIn: "",
            checkout: "",
            adults: 0,
            children: 0,
            cardName: "",
            cardPrice: 0,
            totalPrice: 0,
            numberOfNights: 0,
            pricePromo: 0
        }
    };

    componentDidMount = () => {
       if(localStorage.length === 1){
            this.getInfo();  
        } 
    };

    handleNumberOfNights = event => {
        event.preventDefault();
        this.setState({ numberOfNights: parseInt(event.target.value)})
    };

   totalPrice = () => {
        const { cardPrice } = this.state.booking;
        const { numberOfNights, defaultPrice } = this.state;
        const OneNightPrice = this.props.cardInfo.cardPrice;

        if(OneNightPrice){
            return "€" + (numberOfNights * OneNightPrice)
        } else if (localStorage.booking) {
            return "€" + numberOfNights * cardPrice;
        } else if(numberOfNights === 1){
            return "€" + defaultPrice;
        }else{
            const totalPrice = numberOfNights * defaultPrice;
            return "€" + totalPrice;
        }
    };

    handleSaveInfo = () => {
        const {checkIn, checkout, adults, children} = this.props.summary;  
        console.log('object', this.state.booking)
        const {cardName, cardPrice, pricePromo } = this.props.cardInfo;
        const booking = {
            pricePromo,
            checkIn,
            checkout,
            adults,
            children,
            cardName,
            cardPrice: cardPrice || this.state.defaultPrice,
            totalPrice: this.totalPrice(),
            numberOfNights: parseInt(this.state.numberOfNights)
        };
        
        if (!adults && !checkIn && !checkout){
            this.setState({ areMissingDates: true }); 
        } else {
            this.setState({ areMissingDates: false }); 
            localStorage.setItem("booking", JSON.stringify(booking));
            this.setState({
                booking,
            })

        }
    };


    getInfo = () => {
        const storedInfo = JSON.parse(localStorage.getItem("booking"));
        const { cardPrice, checkIn, checkout, adults, children, cardName, totalPrice, numberOfNights} = storedInfo;
        
        this.setState({
            numberOfNights,
            booking: {
                checkIn,
                checkout,
                adults,
                children,
                cardName,
                totalPrice,
                cardPrice,
            }
        })
    }

    render() {
        const {
            cardName: cardNameLocalStorage,
            checkIn: checkInLocalStorage,
            checkout: checkoutLocalStorage,
            adults: adultsLocalStorage,
            children: childrenLocalStorage
        } = this.state.booking;
        const { numberOfNights, areMissingDates } = this.state
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

                    {areMissingDates ?  
                        <div>
                            <p className="main">{ cardPeople } People</p>
                            <p className="missing-dates">Missing Dates</p> 
                        </div> :
                        <div className="card-content">
                            <p className="main">People</p>
                            <p className="base" id="adults-summary">{adults || adultsLocalStorage || 2} Adults</p>
                            <p className="base" id="children-summary">{children || childrenLocalStorage || 0} Children</p>
                        </div> 
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