import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import AuthContext from '../hooks/useAuth'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/login' replace /> // Redirect to login
  }

  return <Outlet />
}

export default PrivateRoute
