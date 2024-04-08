import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function PublicRoute() {
  const { user } = useAuth()

  if (!user) {
    return <Outlet />
  } else {
    return <Navigate to='/index' />
  }
}

export default PublicRoute
