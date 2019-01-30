import firebase from "../firebase";
export const GET_POSTS = "GET_POSTS";
export const CLEAR_POSTS = "CLEAR_POSTS";
var db = firebase.firestore();

export const getPosts = currentUser => async dispatch => {
  const posts = [];
  db.collection("users")
    .doc(currentUser.uid)
    .collection("myPosts")
    .orderBy("createdAt", "desc")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        posts.push({
          id: doc.id,
          content: doc.data().content,
          user: {
            name: doc.data().user.name,
            photoURL: doc.data().user.photoURL
          }
        });
      });
    })
    .then(() => {
      dispatch({
        type: GET_POSTS,
        payload: {
          posts: posts
        }
      });
    });
};

export const clearPosts = () => ({
  type: CLEAR_POSTS
});
