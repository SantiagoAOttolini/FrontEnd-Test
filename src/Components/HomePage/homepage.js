import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Homepage extends Component {
  render() {
    return (
      <div className="containerMenu">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check">
          <div className="fas fa-bars" id="btn"></div>
          <div className="btnCancel fas fa-times" id="cancel"></div>
        </label>
        <div className="sidebar">
          <header>My App</header>
          <ul>
            <li>
              <Link to="/addProduct">
                <i className="fas fa-qrcode"></i>Add products
              </Link>
            </li>
            <li>
              <Link to="/deleteProduct">
                <i className="fas fa-qrcode"></i>Delete products
              </Link>
            </li>
          </ul>
        </div>
        <section></section>
      </div>
    );
  }
}

export default Homepage;
