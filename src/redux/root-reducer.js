import { combineReducers } from '@reduxjs/toolkit'

import userReducer from "./user/user-reducer";
import cartReducer from './cart/cartReducers'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})