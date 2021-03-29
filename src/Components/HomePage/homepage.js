import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Homepage extends Component {
  render() {
    return (
      <div className="containerMenu">
        <div className="main">
          <span className="text1 container d-flex justify-content-center mt-5 display-1">
            Bienvenidos
          </span>
          <span className="text2 text-light">Test endpoints</span>
        </div>
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
            <li>
              <Link to="/selectProduct">
                <i className="fas fa-qrcode"></i>Edit products
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
