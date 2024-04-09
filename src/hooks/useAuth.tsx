import React, { createContext, useContext, useState } from 'react'

import axiosClient from '../axios'
import { IUser } from '../interfaces'
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem
} from '../utils/localStorage'

interface AuthContextProps {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  login: (user: IUser) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {
    return
  },
  login: () => {
    return
  },
  logout: () => {
    return
  }
})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(
    getLocalStorageItem<IUser>('user')
  )

  const login = (newUser: IUser) => {
    setUser(newUser)
    setLocalStorageItem('user', newUser)
    axiosClient.defaults.headers['Authorization'] =
      'Bearer ' + newUser.accessToken
  }

  const logout = () => {
    setUser(null)
    removeLocalStorageItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

export const useAuth = () => {
  return useContext(AuthContext)
}
