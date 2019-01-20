import { combineReducers } from "redux";
import authedUser from "./authedUser";
import tweets from "./tweets";
import users from "./users";
import tweetModal from "./tweetModal";

export default combineReducers({
  authedUser,
  tweets,
  users,
  tweetModal
});
