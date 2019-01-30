import { SET_USER, CLEAR_USER } from "../actions/currentUser";

const initialState = {
  uid: "",
  name: "",
  photoURL: "",
  joinedDate: "Joined in 2015",
  userDescription: "Matthew is a musician living in Nashville.",
  friends: [{ name: "name1" }, { name: "name2" }]
};

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { uid, displayName, photoURL } = action.payload.currentUser;
      return {
        ...state,
        uid: uid,
        name: displayName,
        photoURL: photoURL
      };
    case CLEAR_USER:
      return {
        ...state,
        uid: "",
        name: "",
        photoURL: ""
      };
    default:
      return state;
  }
};

export default authedUser;
