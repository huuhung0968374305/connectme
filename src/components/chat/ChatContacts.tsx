import React, { useState } from 'react'
import '../../css/ChatContact.css'
import { Search } from '../Search'

function ChatContacts() {
  const [showScrollbar, setShowScrollbar] = useState(false)

  const handleMouseEnter = () => setShowScrollbar(true)
  const handleMouseLeave = () => setShowScrollbar(false)
  const arr = Array.from({ length: 30 })
    .fill(1)
    .map((value, index) => value + index)

  return (
    <div className='min-w-[320px] flex flex-col bg-white border-r border-solid border-blue-20'>
      <div className='chat-head h-16 flex flex-row justify-between items-center px-5 py-6'>
        <div className='font-semibold text-gray-500 text-2xl'>Chats</div>
        <div className='flex flex-row justify-center gap-4'>
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
          {arr.map((el) => {
            return (
              <div className='custom-contact flex py-3 px-6 space-x-3 text-gray-500'>
                <div className='w-12 h-12 rounded-2xl'>
                  <img
                    src='https://connectme-html.themeyn.com/images/avatar/1.jpg'
                    alt=''
                    className='rounded-md'
                  />
                </div>
                <div className='flex flex-col space-y-1'>
                  <div className='text-sm font-bold'>Jasmine thompson</div>
                  <div className='flex text-xs'>
                    <div className=' w-[156px] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>
                      text msgdsjakjdkalsjdkasjsasqjkjsqklj
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
    </div>
  )
}

export default ChatContacts
