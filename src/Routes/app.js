import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../Components/HomePage/homepage";
import AddProduct from "../Components/Products/addProduct"
import DeleteProduct from "../Components/Products/deleteProduct"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/deleteProduct" component={DeleteProduct} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(Routes);
