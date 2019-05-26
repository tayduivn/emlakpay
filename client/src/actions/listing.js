import axios from "axios";
import { setAlert } from "./alert";
import { GET_LISTINGS, LISTING_ERROR } from "./types";

export const getListings = () => async dispatch => {
  try {
    const res = await axios.get("/api/listings");
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
