import { FETCH_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "./types";
import axios from 'axios'

export const fetchProduct = () => (dispatch) => {
  fetch("http://localhost:5000/api/product/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_PRODUCT, payload: data });
    });
};

export function addProduct(dataToSubmit) {
    const request = axios
      .post(`http://localhost:5000/api/product`, dataToSubmit)
      .then(response => response.data)
    return {
      type: ADD_PRODUCT,
      payload: request
    }
  }
  export const deleteProduct = (code) => {
    return (dispatch) => {
      const options = {
        timeout: 25000,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      return fetch(`http://localhost:5000/api/product/${code}`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("DELETE PRODUCT", data);
          if (!Object.entries(data).length) {
            return Promise.reject(data);
          }
  
          return dispatch({
            type: DELETE_PRODUCT,
            payload: data,
          });
        });
    };
  };