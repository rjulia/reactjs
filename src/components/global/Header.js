
//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//assets
import logo from './img/logo.svg';
import './css/Header.css';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const{title, items} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>

          <ul className="Menu">
              {items && items.map((item, key) => <li key={key}> {item.title} </li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
