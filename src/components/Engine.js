import React, { Component } from 'react'


export default class Engine extends Component {
  state = {
    checkIn: "",
    checkout: "",
    adults: 0,
    children: 0,
    isMissingFields: false
  };

  componentDidMount () {
    this.getDates();
  };

  getDates = () => {
    const currentDate = new Date();
    const todayDateFormated = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();
    const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const tomorrowDateFormated = tomorrowDate.getDate()+'/'+(tomorrowDate.getMonth()+1)+'/'+tomorrowDate.getFullYear();
    if(localStorage.length === 0){
      this.setState({
        checkIn: todayDateFormated,
        checkout: tomorrowDateFormated
      });
    } else {
      const storedInfo = JSON.parse(localStorage.getItem("booking"));
      const { checkIn, checkout, adults } = storedInfo;
      this.setState({
        checkIn,
        checkout,
        adults
        });
    }
  };

  handleChange = event => { 
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { checkIn, checkout, adults } = this.state;
    
    if (!checkIn || !checkout || !adults){
      this.setState({ isMissingFields: true });
    } else {
      this.props.handleBooking(this.state);
      this.setState({
        isMissingFields: false
      });
    };
  };

  render() {
    const { checkIn, checkout, adults, children, isMissingFields } = this.state;
    return (
      <div className="engine text-center">

        <div className="engine-wrapper">
          <div className="container text-center">

            <form id="search" className="form-inline" onSubmit={this.handleSubmit} >

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkin" type="text" className="form-control" placeholder={checkIn} name="checkIn" onChange={this.handleChange} />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkout" type="text" className="form-control" placeholder={checkout} name="checkout" onChange={this.handleChange} />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>


              <div className="form-group select-inline">
                  <select className="form-control" placeholder="Adults" id="adults" defaultValue={"Adults"} name="adults" onChange={this.handleChange}>
                      <option value="">{"Adults: " + adults}</option>
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
                      <option value="">{"Children: " + children}</option>
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
        {isMissingFields ? 
        <div className="text-container">
          <p className="isMissing">Missing fields</p> 
        </div> 
        : null }
        </div>
      </div>
    )
  }
}
