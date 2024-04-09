import React, { useEffect, useState } from 'react'

import axiosClient from '../axios'
import AppBar from '../components/chat/AppBar'
import ChatContacts from '../components/chat/ChatContacts'
import ChatWindow from '../components/chat/ChatWindow'
import { IUser } from '../interfaces'

const ChatPage = () => {
  const [curChatRoom, setCurChatRoom] = useState<string | null>(null)
  const [curSeletedUser, setCurSeletedUser] = useState<IUser | null | any>(null)

  return (
    <div className='h-screen flex flex-col'>
      <AppBar />
      <div className='flex flex-grow'>
        <ChatContacts
          setCurChatRoom={setCurChatRoom}
          setCurSeletedUser={setCurSeletedUser}
        />
        <ChatWindow curChatRoom={curChatRoom} curSeletedUser={curSeletedUser} />
      </div>
    </div>
  )
}

export default ChatPage
