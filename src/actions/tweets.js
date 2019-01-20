export const ADD_POST = "ADD_POST";

export const addPost = content => ({
  type: ADD_POST,
  payload: {
    content
  }
});
