import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Engine extends Component {
  render() {
    return (
      <div className="engine text-center">

        <div className="engine-wrapper">
          <div className="container text-center">

            <form id="search" className="form-inline" action="">

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkin" type="text" className="form-control" placeholder="Check in" />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>

              <div className="form-group">
                  <div className="input-group date" data-date-format="dd/mm/yyyy">
                      <input id="checkout" type="text" className="form-control" placeholder="Checkout" />
                      <div className="input-group-addon" >
                          <span className="glyphicon glyphicon-calendar"></span>
                      </div>
                  </div>
              </div>


              <div className="form-group select-inline">
                  <select className="form-control" placeholder="Adults" id="adults" defaultValue="Adults">
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
                  <select className="form-control" placeholder="Children" id="children" defaultValue="Children">
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
                  <Link to="#" className="btn btn-primary">Modify</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
