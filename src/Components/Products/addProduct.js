import React, { Component, useState } from "react";
import axios from "axios";
import "./style.css";

const Product = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [postDate, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      price,
      postDate,
    };
    axios.post("http://localhost:5000/api/product/", body).then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="containerProduct" >
    <div class="container p-4">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <form onSubmit={submitHandler}>
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autofocus
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="postdate"
                    value={postDate}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                    class="form-control"
                  />
                </div>

                <button class="btn btn-primary btn-block">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
{
  /* <form onSubmit={submitHandler}>
<div className='d-flex justify-content-center mt-4'>
  <input
    className='text-center w-25 form-control form-control-sm'
    type='password'
    required
    pattern='(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{6,}'
    name='password'
    value={password}
    onChange={e => setPassword(e.target.value)}
    placeholder='Nueva contraseña'
  />
</div>

<div className='d-flex justify-content-center'>
  <button className='mt-3 btn btn-info'>Guardar</button>
</div>
<h6 className='text-center mt-5 text-danger'>
  <p className='text-center mt-5 text-info'>[Formato]</p> La contraseña
  debe tener al menos 1 letra mayuscula, 1 numero y minimo 6 caracteres.
</h6>
</form>  */
}
