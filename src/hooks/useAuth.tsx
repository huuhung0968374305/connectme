import React, { createContext, useContext, useEffect, useState } from 'react'
import { getToken } from 'firebase/messaging'

import { messaging } from '../firebase/messaging'

import { IUser } from '../interfaces'
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem
} from '../utils/localStorage'
import axiosClient from '../axios'

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
const VITE_APP_VAPID_KEY =
  'BGt6oEOuHOd2acdR2HKN2PesacQ82xS-jyDrZCYQmzwjIvxovlz50a9UD0GsMKMVTrN9JjQyXPxc-RYp5TtHXgU'

export const AuthProvider = ({ children }: any) => {
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission()

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY
      })

      //We can send token to server
      console.log('Token generated : ', token)
    } else if (permission === 'denied') {
      //notifications are blocked
      alert('You denied for the notification')
    }
  }
  useEffect(() => {
    requestPermission()
  }, [])
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
