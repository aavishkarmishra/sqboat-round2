import axios from "axios";
import { set } from "mongoose";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = async (email, password, setAuth) => {
  try {
    const body = JSON.stringify({ email, password });
    const res = await axios.post(`/api/auth`, body, config);
    localStorage.setItem("token", res.data.token);
    setAuth(true)
  } catch (error) {
    localStorage.removeItem("token");
    setAuth(false)
    
  }
};
