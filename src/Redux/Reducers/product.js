import { FETCH_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "../Actions/types";

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_PRODUCT:
      return { ...state, addProduct: action.payload };

    case DELETE_PRODUCT:
      console.log(action.payload);
      const newProduct = [...state.products];
      const productToDelete = newProduct.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newProduct.splice(productToDelete, 1);
      return {
        ...state,
        isLoading: false,
        products: newProduct,
      };
    default:
      return state;
  }
}
