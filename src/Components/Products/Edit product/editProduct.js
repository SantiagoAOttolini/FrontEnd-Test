import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../../Redux/Actions/product";
import axios from "axios";
import "../style.css";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params._id;
    this.state = {
      id,
      name: "",
      description: "",
      price: "",
      postDate: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    this.getProduct();
  }
  getProduct() {
    const productId = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/api/product/${productId}`)
      .then((response) => {
        this.setState(
          {
            id: response.data._id,
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
            postDate: response.data.postDate,
          },
          () => console.log(this.state)
        );
      });
  }
  onSubmit(e) {
    const newProduct = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      price: this.refs.price.value,
      postDate: this.refs.postDate.value,
    };
    this.editProduct(newProduct);
    e.preventDefault();
  }
  editProduct(newProduct) {
    const productId = this.props.match.params.id;
    axios
      .request({
        method: "put",
        url: `http://localhost:5000/api/product/${productId}`,
        data: newProduct,
      })
      .then(() => {
        this.porps.history.push("/selectProduct");
      })
      .catch((err) => console.log(err));
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <div className="containerProduct">
          <div class="container p-4">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <div class="card">
                  <div class="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          ref="name"
                          class="form-control"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                          autofocus
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="description"
                          ref="description"
                          placeholder="Description"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          class="form-control"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="price"
                          ref="price"
                          placeholder="Price"
                          value={this.state.price}
                          onChange={this.handleInputChange}
                          class="form-control"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="postDate"
                          ref="postDate"
                          placeholder="Date"
                          value={this.state.postDate}
                          onChange={this.handleInputChange}
                          class="form-control"
                        />
                      </div>
                      <div>
                      <button class="btn btn-primary btn-block">Modify</button>                      
                      </div>                     
                    </form>
                  </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
