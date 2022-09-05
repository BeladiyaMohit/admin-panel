import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'

export const PublicRoute = () => {

  const isAuthenticated = sessionStorage.getItem("userAccessToken");

  return (
    <>
            {
                !isAuthenticated? <Outlet/> : <Navigate to={"/admin/company"} replace />
            }
    </>
  )
}