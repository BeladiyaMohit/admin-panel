import React from 'react'
import { LoginConstant, LogoutConstant } from '../Constants/Constant'

const initialState = {
  data: {},
  authenticating: false,
  message: "",
  status: 0,
}; 

export const LoginReducer = (state=initialState,action) => {
  switch(action.type){
    case LoginConstant.SAGA_LOGIN_REQUEST:
      return state={...state,authenticating:true}
      case LoginConstant.SAGA_LOGIN_SUCCESS:
        // console.log("reducer",action.ApiData);
        return state={
          ...state,
          data:action.ApiData.data,
          status:action.ApiData.status,
          message:action.ApiData.message
        }
      case LogoutConstant.LOGOUT_SUCCESS:
        // console.log("reducer",action.ApiData);
        return state=initialState
    default:
        return state
      }
    }




