import { SET_CURRENT_PAGE, SET_TOTAL_POSTS } from "./type";

const initialState = {
  currentPage: 0,
  postsPerPage: 6,
  totalPosts: 0,
};

export const paginationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_TOTAL_POSTS:
      return {
        ...state,
        totalPosts: payload,
      };
    default:
      return state;
  }
};
