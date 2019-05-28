import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_LISTINGS,
  LISTING_ERROR,
  GET_LISTING,
  TOOGLE_FAVS,
  GET_PROFILE
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
export const favListing = (e, listingId) => async dispatch => {
  e.preventDefault();
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
