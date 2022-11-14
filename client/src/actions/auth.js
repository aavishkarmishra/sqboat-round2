import axios from "axios";
import { toast } from "react-toastify";
import setAuthToken from "../utils/setAuthToken";
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOGOUT,
  AUTH_RESET,
} from "./actionTypes";

const settings = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Load user
export const loadUser = () => async (dispatch) => {
  dispatch({
    type: AUTH_RESET,
  });
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    // get user data
    const res = await axios.get(`/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: AUTH_RESET,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });
  try {
    const res = await axios.post(`/api/auth`, body, config);
    toast.success("Logged In Successfully !", settings);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error("Invalid Credentials !", settings);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: AUTH_RESET,
  });
  setAuthToken(null);
  dispatch({
    type: LOGOUT,
  });
  toast.success("Logged Out Successfully !", settings);
};
