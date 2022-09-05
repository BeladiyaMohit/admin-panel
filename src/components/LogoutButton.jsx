import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';
import { LogoutAction } from '../Redux/Actions/LogoutAction';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  const navigate=useNavigate()
  const dispatch=useDispatch()
const LogOut=()=>{
  dispatch(LogoutAction())
  setIsClicked(initialState)
  setTimeout(()=>{
    navigate("/login")
  },1000)
  sessionStorage.clear()
}

  return (
    <button
      type="button"
      onClick={LogOut}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
