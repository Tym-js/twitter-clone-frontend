import { combineReducers } from "redux"
import authedUser from "./authedUser"
import posts from "./posts"
import users from "./users"
import tweetModal from "./tweetModal"

export default combineReducers({
  authedUser,
  posts,
  users,
  tweetModal
})
