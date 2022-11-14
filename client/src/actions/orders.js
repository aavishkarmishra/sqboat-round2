import axios from "axios";
import { toast } from "react-toastify";
import { CREATE_ORDER, ORDER_ERROR, ORDER_RESET } from "./actionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const settings = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const createOrder = (productId) => async (dispatch) => {
  dispatch({
    type: ORDER_RESET,
  });
  try {
    const res = await axios.post(`/api/orders/${productId}`, config);
    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });
    window.location.replace(`/confirm/order?id=${res.data._id}`);
  } catch (err) {
    toast.error(err.response.statusText, settings);
    dispatch({
      type: ORDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getOrder = (orderId) => async (dispatch) => {
  dispatch({
    type: ORDER_RESET,
  });
  try {
    const res = await axios.get(`/api/orders/${orderId}`, config);
   
    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });
    
  } catch (err) {
    toast.error(err.response.statusText, settings);
    dispatch({
      type: ORDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};