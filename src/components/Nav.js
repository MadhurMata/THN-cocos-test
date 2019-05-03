import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-fixed-top text-center">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand visible-xs-block" to="index.html">
                <img src="images/cocos/logo_mobile.png" alt="LosCocos" height="36" />
            </Link>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">Rooms</Link></li>
                  <li><Link to="#">Restaurant</Link></li>

                  <li className="hidden-xs">
                      <Link to="index.html">
                          <img src="images/cocos/logo.png" alt="LosCocos" height="36" />
                      </Link>
                  </li>

                  <li><Link to="#">Weddings</Link></li>
                  <li><Link to="#">Membership</Link></li>
                  <li><Link to="#">Contact</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}