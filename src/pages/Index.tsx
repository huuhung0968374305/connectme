import React, { useEffect, useLayoutEffect, useState } from 'react'

import AppBar from '../components/chat/AppBar'
import ChatContacts from '../components/chat/ChatContacts'
import ChatWindow from '../components/chat/ChatWindow'
import { IUser } from '../interfaces'

const ChatPage = () => {
  const [curChatRoom, setCurChatRoom] = useState<string | null>(null)
  const [curSeletedUser, setCurSeletedUser] = useState<IUser | null | any>(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  // only used in mobile mode
  const [showChatWindow, setShowChatWindow] = useState(false)

  useEffect(() => {
    document.title = 'Messages'
  }, [])
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='h-screen flex flex-col'>
      <AppBar isMobile={isMobile} />
      {!isMobile ? (
        <div className='flex flex-grow'>
          <ChatContacts
            setCurChatRoom={setCurChatRoom}
            setCurSeletedUser={setCurSeletedUser}
          />
          <ChatWindow
            curChatRoom={curChatRoom}
            curSeletedUser={curSeletedUser}
          />
        </div>
      ) : (
        <>
          {!showChatWindow ? (
            <ChatContacts
              isMobile={isMobile}
              setShowChatWindow={setShowChatWindow}
              setCurChatRoom={setCurChatRoom}
              setCurSeletedUser={setCurSeletedUser}
            />
          ) : (
            <ChatWindow
              setShowChatWindow={setShowChatWindow}
              isMobile={isMobile}
              curChatRoom={curChatRoom}
              curSeletedUser={curSeletedUser}
            />
          )}
        </>
      )}
    </div>
  )
}

export default ChatPage
