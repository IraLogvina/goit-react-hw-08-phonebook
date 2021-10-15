import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./actions";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));

    // if (error.response.status === 400) {
    //   toast.error("This user is already exist!");
    // } else if (error.response.status === 500) {
    //   toast.error("Server error! Please try again later!");
    // } else {
     { toast.error("Oops, something is wrong!");
    }
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
    toast.error("Invalid email or password!");
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));

    // if (error.response.status === 500) {
    //   toast.error("Server error! Please try again later!");
    // } else 
    {
      toast.error("Opps, something is wrong! Please reload the page!");
    }
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
    token.unset();
    toast.info("Your session is over. Please login again!");
  }
};
