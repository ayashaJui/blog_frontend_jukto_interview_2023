import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  RANDOM_POST_REQUEST,
  RANDOM_POST_SUCCESS,
  RANDOM_POST_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
} from "./type";

const initialState = {
  posts: [],
  post: {},
  error: [],
  randomPost: {},
  loading: true,
  success: false,
};

export const postListReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_LIST_REQUEST:
      return {
        posts: [],
        loading: true,
      };
    case POST_LIST_SUCCESS:
      return {
        posts: payload,
        loading: false,
        success: true,
      };
    case POST_LIST_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const postDetailsReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_DETAILS_SUCCESS:
      return {
        post: payload,
        loading: false,
      };
    case POST_DETAILS_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const randomPostReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RANDOM_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RANDOM_POST_SUCCESS:
      return {
        randomPost: payload,
        loading: false,
      };
    case RANDOM_POST_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deletePostReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_DELETE_REQUEST:
      return {
        loading: true,
      };
    case POST_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case POST_DELETE_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const createPostReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_CREATE_REQUEST:
      return {
        loading: true,
      };
    case POST_CREATE_SUCCESS:
      return {
        loading: false,
        post: payload,
        success: true,
      };
    case POST_CREATE_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const updatePostReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case POST_UPDATE_SUCCESS:
      return {
        loading: false,
        post: payload,
        success: true,
      };
    case POST_UPDATE_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
