import axios from "axios";
import { GET_PRODUCTS, PRODUCT_ERROR, PRODUCT_RESET } from "./actionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_RESET,
  });
  try {
    const res = await axios.get("/api/products", config);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
