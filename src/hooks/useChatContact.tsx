import React, { useEffect, useState } from 'react'

import axiosClient from '../axios'
import { ApiResponse, IUser } from '../interfaces'
import { useAuth } from './useAuth'

export const useChatContact = () => {
  const { user: currentUser } = useAuth() // current user
  const [users, setUsers] = useState<IUser[]>()
  const [userRooms, setUserRooms] = useState<Array<string>>([])
  const fetchAllUser = async () => {
    try {
      const [allUsersRes, userRoomsRes] = await Promise.all([
        axiosClient.get<ApiResponse<IUser[]>>('/chat/getAllUsers'),
        axiosClient.get<ApiResponse<any>>('/chat/getAllUserRooms')
      ])
      setUsers(
        allUsersRes.data.data.filter((user) => {
          return user.id !== currentUser?.id
        })
      )
      setUserRooms(userRoomsRes.data.data.map((room) => room.RoomId))
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    fetchAllUser()
  }, [])

  return [users, userRooms]
}
