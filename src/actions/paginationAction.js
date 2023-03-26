import { SET_CURRENT_PAGE, SET_TOTAL_POSTS } from "../reducers/type";

export const setCurrentPage = (pageNumber) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  });
};

export const setTotalPosts = (total) => async (dispatch) => {
  dispatch({
    type: SET_TOTAL_POSTS,
    payload: total,
  });
};
