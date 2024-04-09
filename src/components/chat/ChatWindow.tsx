import React, { useEffect, useRef, useState } from 'react'

import '../../css/ChatWindow.css'
import { Popover } from 'antd'
import { useAuth } from '../../hooks/useAuth'
import { IUser } from '../../interfaces'
import axiosClient from '../../axios'
import useSocket from '../../hooks/useSocket'
import { useChatContact } from '../../hooks/useChatContact'

const chatHeadIcons = [
  {
    key: 'telephone',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'></path>
      </svg>
    )
  },
  {
    key: 'camera',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z'></path>
      </svg>
    )
  },
  {
    key: 'search',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'></path>
      </svg>
    )
  },
  {
    key: 'toggle-chat',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z'></path>
        <path d='M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z'></path>
      </svg>
    )
  }
]

const chatBottomIcons = [
  {
    key: 'plus',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'></path>
      </svg>
    )
  },
  {
    key: 'gallary',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'></path>
        <path d='M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z'></path>
      </svg>
    )
  },
  {
    key: 'smile',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8'></path>
      </svg>
    )
  }
]

interface ChatContactsProps {
  curChatRoom: string | null
  curSeletedUser: IUser
}

type MessageType = {
  msg: string
  UserId: string
}

function ChatWindow({ curChatRoom, curSeletedUser }: ChatContactsProps) {
  const [showScrollbar, setShowScrollbar] = useState(false)
  const [msgValue, setMsgValue] = useState('')
  const [_, userRooms] = useChatContact() as any
  const { user: currentUser } = useAuth()
  const [allMessages, setAllMessages] = useState<MessageType[] | any>([])
  const messageRef = useRef<HTMLDivElement>(null)

  const [emitMsg] = useSocket({ userRooms, allMessages, setAllMessages })
  const handleMouseEnter = () => setShowScrollbar(true)
  const handleMouseLeave = () => setShowScrollbar(false)
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current?.lastElementChild?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [allMessages])
  const getMsgs = async () => {
    const res = await axiosClient.get(`/chat/findMsgs?roomId=${curChatRoom}`)
    setAllMessages(res.data.data as MessageType[])
  }
  useEffect(() => {
    if (curChatRoom) {
      getMsgs()
    }
  }, [curChatRoom])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsgValue(event.target.value)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (msgValue.trim() === '' || !curChatRoom) {
      return
    }
    if (event.code === 'Enter') {
      emitMsg({
        msg: msgValue,
        RoomId: curChatRoom || '',
        UserId: currentUser!.id
      })
      setAllMessages([
        ...allMessages,
        { msg: msgValue, UserId: currentUser?.id }
      ])
      setMsgValue('') // Optional: Clear input after Enter
    }
  }

  if (!curSeletedUser) return <></>
  return (
    <div className='flex-grow flex flex-col w-full'>
      <div className='flex flex-grow flex-col w-full'>
        {/* chat head */}
        <div className='px-6 h-24 flex items-center'>
          <div className='chat-head w-full flex items-center justify-between'>
            <div className='custom-contact flex py-3 px-6 space-x-3 text-gray-500'>
              <div className='w-12 h-12 rounded-2xl'>
                <img
                  src={curSeletedUser?.imageUrl}
                  alt=''
                  className='w-full h-full rounded-md'
                />
              </div>
              <div className='flex flex-col space-y-1'>
                <div className='text-sm font-bold'>
                  {curSeletedUser?.username}
                </div>
                <div className='flex text-xs'>
                  <div className=' w-[156px] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>
                    active
                  </div>
                </div>
              </div>
            </div>

            <ul className='flex space-x-4'>
              {chatHeadIcons.map((icon) => {
                return (
                  <li
                    className='w-10 h-10 hover:text-blue-500 hover:bg-blue-100 rounded-sm text-gray-600 bg-gray-200 flex items-center justify-center'
                    key={icon.key}>
                    {icon.el}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* message  */}
        <div
          ref={messageRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`custom-message-container-web pb-8 custom-scrollbar w-full flex-grow px-6 ${
            showScrollbar ? 'overflow-y-scroll' : 'overflow-hidden pr-8'
          } bg-[#dbeafe]`}>
          {allMessages &&
            allMessages?.length > 0 &&
            allMessages.map((messageInfo, index) => {
              return (
                <div key={index} className='flex mt-5 w-full'>
                  {messageInfo.UserId !== currentUser?.id && (
                    <div className='flex min-w-[32px] h-8'>
                      <img
                        className='rounded-full w-8 h-8'
                        src={curSeletedUser.imageUrl}
                        alt=''
                      />
                    </div>
                  )}
                  <div className='ml-2 text-[0.83rem] max-w-full flex-grow'>
                    <div
                      className={`rounded-md break-words max-w-[60%] text-gray-500 bg-white px-4 py-3 ${
                        messageInfo.UserId === currentUser?.id
                          ? 'float-right text-white bg-[#2563eb]'
                          : 'float-left'
                      } `}>
                      {messageInfo.msg}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div className='chat-bottom w-full flex min-h-[88px]'>
        <div className='flex'>
          <ul className='flex items-center justify-center px-[28px] py-[24px] space-x-2'>
            {chatBottomIcons.map((icon) => {
              if (icon.key === 'plus') {
                return (
                  <Popover
                    key={icon.key}
                    arrow={false}
                    trigger={'click'}
                    placement='topLeft'
                    style={{ borderWidth: '2px', borderColor: 'blue' }}
                    content={
                      <>
                        <div className='flex items-center text-gray-500 cursor-pointer space-x-4 px-[12px] py-2 text-xs font-semibold hover:text-blue-500'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'></path>
                            <path d='M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM1 3a1 1 0 0 1 1-1h2v2H1zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3zm-4-2h3v2H2a1 1 0 0 1-1-1zm3-1H1V8h3zm0-3H1V5h3z'></path>
                          </svg>
                          <span>New Group</span>
                        </div>
                        <div className='flex items-center text-gray-500 cursor-pointer space-x-4 px-[12px] py-2 text-xs font-semibold hover:text-blue-500'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5'></path>
                            <path d='M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3'></path>
                          </svg>
                          <span>Voice clip</span>
                        </div>
                      </>
                    }>
                    <li
                      className='w-8 h-8 text-gray-600  hover:bg-blue-200 hover:text-blue-500 rounded-full bg-gray-200 flex items-center justify-center'
                      key={icon.key}>
                      {icon.el}
                    </li>
                  </Popover>
                )
              }
              return (
                <li
                  className='w-8 h-8 text-gray-600  hover:bg-blue-200 hover:text-blue-500 rounded-full bg-gray-200 flex items-center justify-center'
                  key={icon.key}>
                  {icon.el}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex justify-center items-center w-full mr-[88px]'>
          <input
            type='text'
            value={msgValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className='focus:outline-none rounded-lg w-full text-sm text-gray-600  bg-gray-200 h-10 px-[14px] py-[8px]'></input>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
