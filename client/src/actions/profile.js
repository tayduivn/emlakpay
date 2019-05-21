import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  SET_ALERT,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";
import { dispatch } from "rxjs/internal/observable/pairs";

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update profile

export const createProfile = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert("Profiliniz başarıyla düzenlendi.", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(e => dispatch(setAlert(e.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Account and Profile
export const deleteAccount = () => async dispatch => {
  if (
    window.confirm(
      "Hesabınız, profiliniz ve tüm listelemeleriniz silinecektir. Bu işlem geri alınamaz."
    )
  ) {
    try {
      const res = await axios.delete("/api/profile");
      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Hesabınız başarıyla silindi", "danger"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
