import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct, fetchProduct } from "../../Redux/Actions/product";
import "./style.css";

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchProduct();
  }
  render() {
    const products = this.props.products;
    return (
      <div className="containerProduct" key={products._id}>
        <div class="container p-4">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="card">
                <div class="card-body">
                  {this.props.products &&
                    this.props.products.map((productFetch) => {
                      return (
                        <div>
                          <div className="d-flex justify-content-center">
                            <h2 className="text-dark">{productFetch.name}</h2>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button
                              onClick={() =>
                                this.props.deleteProduct(productFetch._id)
                              }
                              className="btn btn-primary"
                            >
                              Delete
                            </button>
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
  deleteProduct,
  fetchProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
