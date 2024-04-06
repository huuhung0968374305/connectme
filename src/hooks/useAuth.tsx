import React, { createContext, useState } from 'react'

import { UserInfo } from '../interfaces'
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem
} from '../utils/localStorage'

interface AuthContextProps {
  user: UserInfo | null
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>
  login: (user: UserInfo) => void
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
  const [user, setUser] = useState<UserInfo | null>(
    getLocalStorageItem<UserInfo>('user')
  )

  const login = (newUser: UserInfo) => {
    setUser(newUser)
    setLocalStorageItem('user', newUser)
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
