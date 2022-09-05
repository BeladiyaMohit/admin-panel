import React from 'react'
import { LogoutConstant } from '../Constants/Constant'

export const LogoutAction = () => {
  return{
    type:LogoutConstant.LOGOUT_SUCCESS,
    payload:{}
  }
}
