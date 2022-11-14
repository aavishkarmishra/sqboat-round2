import axios from "axios";
import { toast } from "react-toastify";
import { REGISTER_FAIL, REGISTER_SUCCESS, AUTH_RESET } from "./actionTypes";
import { loadUser } from "./auth";

const settings = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Register User
export const register = (username, email, password) => async (dispatch) => {
  dispatch({
    type: AUTH_RESET,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    username,
    email,
    password,
  });
  try {
    const res = await axios.post(`/api/users`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    toast.success("Registered Successfully !", settings);
    dispatch(loadUser());
  } catch (err) {
    if (err.response.status === 409) {
      toast.error("User already exists !", settings);
    } else {
      toast.error("Unable to Register !", settings);
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
