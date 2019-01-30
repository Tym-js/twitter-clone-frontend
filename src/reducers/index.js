import { combineReducers } from "redux";
import currentUser from "./currentUser";
import users from "./users";
import posts from "./posts";
import tweetModal from "./tweetModal";

export default combineReducers({
  currentUser,
  posts,
  users,
  tweetModal
});
