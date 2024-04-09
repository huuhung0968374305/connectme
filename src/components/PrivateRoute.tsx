import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to='/login' replace /> // Redirect to login
  }

  return children as any
}

export default PrivateRoute
