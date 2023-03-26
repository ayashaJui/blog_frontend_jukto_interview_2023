import axios from "axios";
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
} from "../reducers/type";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload: error.response,
    });
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

const getRandomNumber = (maxPost) => {
  return Math.floor(Math.random() * maxPost) + 1;
};

export const getRandomPost = (maxPost) => async (dispatch) => {
  let id = getRandomNumber(maxPost);

  try {
    dispatch({
      type: RANDOM_POST_REQUEST,
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: RANDOM_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RANDOM_POST_FAIL,
      payload: error.response,
    });
  }
};

export const deletePostById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });

    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    dispatch({
      type: POST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload: error.response,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const { data } = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      post,
      config
    );

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload: error.response,
    });
  }
};

export const updatePost = (post, id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      post,
      config
    );

    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: error.response,
    });
  }
};
