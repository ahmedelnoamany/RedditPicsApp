import { combineReducers } from "redux"


import registration from "./registrationReducer"
import posts from "./postsReducer"

export default combineReducers({
  registration,
  posts
})
