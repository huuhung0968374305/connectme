import React, { useState } from 'react'

import '../../css/ChatWindow.css'

function ChatWindow() {
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
  const [showScrollbar, setShowScrollbar] = useState(false)

  const handleMouseEnter = () => setShowScrollbar(true)
  const handleMouseLeave = () => setShowScrollbar(false)
  const arr = Array.from({ length: 100 }).fill(0)
  return (
    <div className='flex-grow flex flex-col w-full'>
      <div className='flex flex-grow flex-col w-full'>
        {/* chat head */}
        <div className='px-6 h-24 flex items-center'>
          <div className='chat-head w-full flex items-center justify-between'>
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`custom-message-container-web custom-scrollbar w-full flex-grow px-6 ${
            showScrollbar ? 'overflow-y-scroll' : 'overflow-hidden'
          } bg-[#dbeafe]`}>
          {arr.map((el, index) => {
            return (
              <div className='flex mt-5 w-full'>
                {index % 2 !== 0 && (
                  <div className='w-8 h-8'>
                    <img
                      className='rounded-full'
                      src={
                        'https://connectme-html.themeyn.com/images/avatar/2.jpg'
                      }
                      alt=''
                    />
                  </div>
                )}
                <div className='ml-2 max-w-full flex-grow'>
                  <div
                    className={`rounded-md break-words max-w-[60%] bg-white px-4 py-3 ${
                      index % 2 === 0 && 'float-right'
                    } `}>
                    msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg
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
            className='focus:outline-none rounded-lg w-full text-sm text-gray-600  bg-gray-200 h-10 px-[14px] py-[8px]'></input>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
