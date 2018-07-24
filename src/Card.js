import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
    <div className="Card">
      <div className="Card-header">
        <div className="Card-header-image"></div>
        <div className="Card-header-content">
          <p className="Card-text">Alex Guerrero</p>
          <p className="Card-text">Lunes 26 de Junio de 2017</p>  
        </div>
      </div>
      <div className="Card-main Card-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className="Card-footer">
        <p className="Card-text">Leer mas...</p>
        <p className="Card-text"> 37 <span className="Card-icon" > <i className="fas fa-heart"></i> </span> </p>
      </div>
    </div>
    );
  }
}


export default Card;