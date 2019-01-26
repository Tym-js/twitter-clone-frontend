import { combineReducers } from "redux"
import authedUser from "./authedUser"
import users from "./users"
import tweetModal from "./tweetModal"

export default combineReducers({
  authedUser,
  users,
  tweetModal
})
