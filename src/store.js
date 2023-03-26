import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createCommentReducers, postCommentReducers } from "./reducers/commentReducers";
import { paginationReducer } from "./reducers/paginationReducers";
import { createPostReducers, deletePostReducers, postDetailsReducers, postListReducers, randomPostReducers, updatePostReducers } from "./reducers/postReducers";
import { userDetailsReducers } from "./reducers/userReducers";

const reducers = combineReducers({
    postList: postListReducers,
    postDetails: postDetailsReducers,
    postComments: postCommentReducers,
    randomPostDetail: randomPostReducers,
    userDetails: userDetailsReducers,
    postDelete: deletePostReducers,
    postCreate: createPostReducers,
    postUpdate: updatePostReducers,
    commentCreate: createCommentReducers,
    pagination: paginationReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
