import { combineReducers } from '@reduxjs/toolkit'

import userReducer from "./user/user-reducer";

export default combineReducers({
  users: userReducer
})