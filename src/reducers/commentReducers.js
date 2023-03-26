import {
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
} from "./type";

const initialState = {
  loading: true,
  comments: [],
  comment: {},
  error: [],
  success: false,
};

export const postCommentReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_COMMENT_REQUEST:
      return {
        loading: true,
        comments: [],
      };
    case POST_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: payload,
      };
    case POST_COMMENT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const createCommentReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COMMENT_CREATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        loading: false,
        comment: payload,
        success: true,
      };
    case COMMENT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
