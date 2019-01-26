import { SET_USER, CLEAR_USER } from "../actions/authedUser";

const initialState = {
  name: "",
  photoURL: "",
  joinedDate: "Joined in 2015",
  userDescription: "Matthew is a musician living in Nashville.",
  friends: [{ name: "name1" }, { name: "name2" }]
};

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { displayName, photoURL } = action.payload.authedUser;
      return {
        ...state,
        name: displayName,
        photoURL: photoURL
      };
    case CLEAR_USER:
      return {
        ...state,
        name: "",
        photoURL: ""
      };
    default:
      return state;
  }
};

export default authedUser;
