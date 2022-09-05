import React from 'react'
import { LoginConstant } from '../Constants/Constant'

export const LoginAction = (value) => {
  const {email,password}=value
  return{
    type:LoginConstant.LOGIN_REQUEST,
    payload:{
        email,password
    }
  } 

}
