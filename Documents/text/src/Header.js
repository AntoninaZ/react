import React, {
  Component
} from 'react';

import './Header.css'
import logo from './logo.png'

class Header extends Component {
  render() {
    return (
      <header className="header"> 
        <a href="#" className="logo">
          <img scr={logo} alt={logo}/>
        </a>
        <div className="header-wrapper">
          <div className="header-inner">
            <ul className="header-main-navigation">
              <li className="main-navigation-item">
                <a className="main-navigation-link" href="#">Program</a>
              </li>
              <li className="main-navigation-item">
                <a className="main-navigation-link" href="#">Gallery</a>
              </li>
              <li className="main-navigation-item">
                <a className="main-navigation-link" href="#">Reviews</a>
              </li>
              <li className="main-navigation-item">
                <a className="main-navigation-link" href="#">Partners</a>
              </li>
              <li className="main-navigation-item">
                <a className="main-navigation-link" href="#">Contact</a>
              </li>
            </ul>
            <a href="tel:+3800997788843" className="header-phone">+380(099)77-888-43</a>
          </div>
        </div>
      </header>);
  }
}

export default Header;