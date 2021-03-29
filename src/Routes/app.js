import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../Components/HomePage/homepage";
import AddProduct from "../Components/Products/addProduct"
import DeleteProduct from "../Components/Products/deleteProduct"
import SelectProduct from "../Components/Products/Edit product/selectProduct"
import EditProduct from "../Components/Products/Edit product/editProduct"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/deleteProduct" component={DeleteProduct} />
          <Route exact path="/selectProduct" component={SelectProduct} />
          <Route exact path="/editProduct/:id" component={EditProduct} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(Routes);
