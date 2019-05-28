import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_LISTINGS,
  LISTING_ERROR,
  GET_LISTING,
  TOOGLE_FAVS,
  GET_PROFILE,
  ADD_LISTING
} from "./types";
export const getListings = () => async dispatch => {
  try {
    const res = await axios.get("/api/listing");
    dispatch({
      type: GET_LISTINGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getListingById = listingId => async dispatch => {
  try {
    const res = await axios.get(`/api/listing/${listingId}`);
    dispatch({
      type: GET_LISTING,
      payload: res.data.listing
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data.profile
    });
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get profile by id
export const favListing = listingId => async dispatch => {
  try {
    const res = await axios.put(`/api/listing/fav/${listingId}`);
    dispatch({
      type: TOOGLE_FAVS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//add listing
export const addListing = formData => async dispatch => {
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/post", formData, config);
    dispatch({
      type: ADD_LISTING,
      payload: res.data
    });

    dispatch(setAlert("İlan Eklendi", "success"));
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};