import {
  GET_LISTINGS,
  LISTING_ERROR,
  GET_LISTING,
  TOOGLE_FAVS
} from "../actions/types";

const initialState = {
  listings: [],
  listing: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: payload,
        loading: false
      };
    case LISTING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_LISTING:
    case TOOGLE_FAVS:
      return {
        ...state,
        listing: payload,
        loading: false
      };
    default:
      return state;
  }
}
