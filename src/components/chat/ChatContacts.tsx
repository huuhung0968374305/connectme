/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../css/ChatContact.css'

import { Modal } from 'antd'
import React, { useCallback, useState } from 'react'

import axiosClient from '../../axios'
import { useAuth } from '../../hooks/useAuth'
import { useChatContact } from '../../hooks/useChatContact'
import { ApiResponse, IUser } from '../../interfaces'
import { IUserChatRoom } from '../../interfaces/Room.interface'
import { Search } from '../Search'

interface ChatContactsProps {
  setCurChatRoom: React.Dispatch<React.SetStateAction<string | null>> // Function to update current chat room
  setCurSeletedUser: React.Dispatch<React.SetStateAction<IUser | null>> // Function to update current chat room
  setShowChatWindow?: React.Dispatch<React.SetStateAction<boolean>> // Function to update current chat room
  isMobile?: Boolean
}
const ChatContacts: React.FC<ChatContactsProps> = ({
  setCurChatRoom,
  setCurSeletedUser,
  setShowChatWindow,
  isMobile
}) => {
  const [showScrollbar, setShowScrollbar] = useState(false)
  const { user: currentUser } = useAuth()
  const [allUsers] = useChatContact()
  const [isOpenSearhContactModal, setIsOpenSearhContactModal] = useState(false)

  const handleMouseEnter = () => setShowScrollbar(true)
  const handleMouseLeave = () => setShowScrollbar(false)

  const handleOpenChatRoom = useCallback(async (userClicked: IUser) => {
    if (setShowChatWindow) {
      setShowChatWindow(true)
    }
    const response = await axiosClient.post<ApiResponse<IUserChatRoom[]>>(
      '/chat/createRoom',
      {
        userIds: [currentUser?.id, userClicked.id]
      }
    )
    setCurSeletedUser(userClicked)
    setCurChatRoom(response.data.data[0].RoomId)
  }, [])
  return (
    <div
      className={`${
        !isMobile ? ' min-w-[360px]' : 'w-screen'
      } flex flex-col bg-white flex-grow border-r border-solid border-blue-20`}>
      <div className='chat-head h-16 flex flex-row justify-between items-center px-5 py-6'>
        <div className='font-semibold text-gray-600 text-2xl'>Chats</div>
        <div
          onClick={() => setIsOpenSearhContactModal(true)}
          className='flex flex-row justify-center gap-4'>
          <div className='hover:text-blue-500 text-gray-500 flex flex-row items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'></path>
            </svg>

            <span className='ml-1 font-medium text-xs'>New</span>
          </div>
          <div className='hover:text-blue-500 text-gray-500 flex flex-row items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5'></path>
            </svg>

            <span className='ml-1 font-medium text-xs'>Filter</span>
          </div>
        </div>
      </div>
      <div
        className={`custom-scrollbar h-20 flex-grow ${
          showScrollbar ? 'overflow-auto' : 'overflow-hidden'
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className='w-full sticky top-0 bg-white'>
          <div className='search mx-5 mb-4 overflow-hidden'>
            <Search placeholder='Search contact / chat' />
          </div>
        </div>
        <div className='contacts'>
          {allUsers?.map((user: any) => {
            return (
              <div
                key={user?.id}
                onClick={() => handleOpenChatRoom(user)}
                className='cursor-pointer custom-contact flex py-3 px-6 space-x-3 text-gray-500'>
                <div className='w-12 h-12 rounded-2xl'>
                  <img
                    src={user.imageUrl}
                    alt=''
                    className='min-w-[48px] h-[48px] rounded-md'
                  />
                </div>
                <div className='flex flex-col space-y-1'>
                  <div className='text-sm font-bold'>{user.username}</div>
                  <div className='flex text-xs'>
                    <div className='w-[156px] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>
                      last message: not implemented yet
                    </div>
                    <div className='ml-[18px] flex text-gray-400 items-center'>
                      <p className='whitespace-nowrap'>1 day</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Modal
        maskClosable={false}
        title='Basic Modal'
        open={isOpenSearhContactModal}
        footer={null}
        onCancel={() => setIsOpenSearhContactModal(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default ChatContacts
