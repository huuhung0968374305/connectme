import React from 'react'

import AppBar from '../components/chat/AppBar'
import ChatContacts from '../components/chat/ChatContacts'
import ChatWindow from '../components/chat/ChatWindow'

const ChatPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <AppBar />
      <div className='flex flex-grow'>
        <ChatContacts />
        <ChatWindow />
      </div>
    </div>
  )
}

export default ChatPage
