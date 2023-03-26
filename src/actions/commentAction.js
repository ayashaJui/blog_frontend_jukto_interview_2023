import {
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
} from "../reducers/type";
import axios from "axios";

export const getPostComments = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_COMMENT_REQUEST,
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    dispatch({
      type: POST_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      payload: error.response,
    });
  }
};

export const createComment = (comment) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const { data } = await axios.post(
      `https://jsonplaceholder.typicode.com/posts/${comment.postId}/comments`,
      comment,
      config
    );

    dispatch({
      type: COMMENT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMMENT_CREATE_FAIL,
      payload: error.response,
    });
  }
};
