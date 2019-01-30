import { GET_USERS } from "../actions/users";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        state: action.payload.users
      };
    default:
      return state;
  }
};

export default users;
