import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Engine extends Component {
  state = {
    checkIn: "",
    checkout: "",
    adults: 0,
    children: 0,
    isMissing: false
  };

  handleChange = event => { 
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { checkIn, checkOut, adults } = this.state;
    if (!checkIn || !checkOut || !adults){
      this.setState({ isMissing: true });
    } else {
      this.props.handleBooking(this.state);
      this.setState({
        isMissing: false
      })
    }
  }

  render() {
    const { isMissing } = this.state
    return (
      <div className="engine text-center">

        <div className="engine-wrapper">
          <div className="container text-center">

            <form id="search" className="form-inline" onSubmit={this.handleSubmit} >

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkin" type="text" className="form-control" placeholder="Check in" name="checkIn" onChange={this.handleChange} />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkout" type="text" className="form-control" placeholder="Checkout" name="checkOut" onChange={this.handleChange} />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>


              <div className="form-group select-inline">
                  <select className="form-control" placeholder="Adults" id="adults" defaultValue="Adults" name="adults" onChange={this.handleChange}>
                      <option value="">Adults</option>
                      <option value="1">Adults: 1</option>
                      <option value="2">Adults: 2</option>
                      <option value="3">Adults: 3</option>
                      <option value="4">Adults: 4</option>
                      <option value="5">Adults: 5</option>
                      <option value="6">Adults: 6</option>
                      <option value="7">Adults: 7</option>
                      <option value="8">Adults: 8</option>
                      <option value="9">Adults: 9</option>
                  </select>
              </div>
              <div className="form-group select-inline">
                  <select className="form-control" placeholder="Children" id="children" defaultValue="Children" name="children" onChange={this.handleChange}>
                      <option value="">Children</option>
                      <option value="1">Children: 1</option>
                      <option value="2">Children: 2</option>
                      <option value="3">Children: 3</option>
                      <option value="4">Children: 4</option>
                      <option value="5">Children: 5</option>
                      <option value="6">Children: 6</option>
                      <option value="7">Children: 7</option>
                      <option value="8">Children: 8</option>
                      <option value="9">Children: 9</option>
                  </select>
              </div>


              <div className="form-group">
                  <button type="submit" className="btn btn-primary">Modify</button>
              </div>
            </form>

          </div>
        {isMissing ? <p className="isMissing">Missing fill fields</p> : null }
        </div>
      </div>
    )
  }
}
