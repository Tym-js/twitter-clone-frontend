import { GET_POSTS, CLEAR_POSTS } from "../actions/posts";

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: []
      };
    default:
      return state;
  }
};
