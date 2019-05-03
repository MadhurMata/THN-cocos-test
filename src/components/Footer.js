import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">

    <span className="ico ico-logo"></span>
    <span className="ico ico-social"></span>

    <div className="text-left col-left">
        <ul className="inline-block">
            <li>
                <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
                <Link to="#">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#">About Us</Link>
            </li>
            <li>
                <Link to="#">Partners</Link>
            </li>
        </ul>
    </div>
    <div className="text-right col-right">
        <ul className="inline-block">
            <li className="link">
                <Link to="#">reservations@loscocosbungalows.com</Link>
            </li>
            <li className="link">
                <Link to="#">Tlf: +34 987 675 432</Link>
            </li>
        </ul>
    </div>

</footer>
  )
}