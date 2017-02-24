import { combineReducers } from "redux"


import registration from "./registrationReducer"
import posts from "./postsReducer"
import app from "./appReducer"

export default combineReducers({
  registration,
  posts,
  app
})
