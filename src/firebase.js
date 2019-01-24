import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

var config = {
  apiKey: "AIzaSyC6_vgESAaqoqyPTfOYiNmIkVGQpBWgs6A",
  authDomain: "twitter-clone-bcac4.firebaseapp.com",
  databaseURL: "https://twitter-clone-bcac4.firebaseio.com",
  projectId: "twitter-clone-bcac4",
  storageBucket: "twitter-clone-bcac4.appspot.com",
  messagingSenderId: "934185855763"
}
firebase.initializeApp(config)
export default firebase
