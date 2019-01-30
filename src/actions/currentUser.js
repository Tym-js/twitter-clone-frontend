import firebase from "../firebase";
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
var db = firebase.firestore();

export const setUser = user => async dispatch => {
  db.collection("users")
    .doc(user.uid)
    .set({
      id: user.uid,
      name: user.displayName,
      photoURL: user.photoURL
    })
    .then(() => {
      dispatch({
        type: SET_USER,
        payload: {
          currentUser: user
        }
      });
    });
};

export const clearUser = () => ({
  type: CLEAR_USER
});
