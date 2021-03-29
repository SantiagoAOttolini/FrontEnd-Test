import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct, fetchProduct } from "../../../Redux/Actions/product";
import axios from "axios";
import "../style.css";

class SelectProduct extends Component {
constructor(props){
  super(props);
  this.state = {
  }
}

componentDidMount(){
  this.props.fetchProduct()
}
  render() {
    const products = this.props.products;
    return (
      <div className="containerProduct" key={products._id}>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-body">
                  {this.props.products &&
                    this.props.products.map((productFetch) => {
                      return (
                        <div>
                          <div className="d-flex justify-content-center">
                            <h2 className="text-dark">{productFetch.name}</h2>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Link to={`/editProduct/${productFetch._id}`}>
                              <button className="btn btn-primary text-white">
                                Edit
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productIndex.products,
  };
};
//Call  actions
const mapDispatchToProps = {
  fetchProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct);
