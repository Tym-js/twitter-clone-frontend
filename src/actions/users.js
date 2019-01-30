import firebase from "../firebase";
export const GET_USERS = "GET_USERS";
var db = firebase.firestore();

export const getUsers = () => async dispatch => {
  const users = [];
  db.collection("users")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        users.push({
          uid: doc.id,
          name: doc.data().name,
          photoURL: doc.data().photoURL
        });
      });
    })
    .then(() => {
      dispatch({
        type: GET_USERS,
        payload: {
          users: users
        }
      });
    });
};
