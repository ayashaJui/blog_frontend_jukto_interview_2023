import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "./type";

const initialState = {
  user: {},
  error: [],
  loading: true,
};
export const userDetailsReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        user: payload,
        loading: false,
      };
    case USER_DETAILS_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
