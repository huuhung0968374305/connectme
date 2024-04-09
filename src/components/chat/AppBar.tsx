import { Badge, Popover } from 'antd'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const appBarStartIcons = [
  {
    key: 'chat-text',
    selected: true,
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='18'
        onMouseOver={(e: any) => e.target.setAttribute('fill', '#00f')}
        fill='blue'
        viewBox='0 0 16 16'>
        <path d='M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z'></path>
      </svg>
    )
  },
  {
    key: 'person-line',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z'></path>
      </svg>
    )
  },
  {
    key: 'bi-robot',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135'></path>
        <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5'></path>
      </svg>
    ),
    hideOnMobile: true
  },
  {
    key: 'person-bounding',
    hasBadge: true,
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5'></path>
        <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0'></path>
      </svg>
    ),
    hideOnMobile: true
  },
  {
    key: 'bi-subtract',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z'></path>
      </svg>
    ),
    hideOnMobile: true
  }
]

const appBarEndIcons = [
  {
    key: 'bi-grid',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z'></path>
      </svg>
    )
  },
  {
    key: 'bi-app-indicator',
    el: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z'></path>
        <path d='M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0'></path>
      </svg>
    )
  }
]

function AppBar({ isMobile }: any) {
  const { user, logout } = useAuth()

  return (
    <div
      className={`app-bar-wrap h-[72px] max-h-[72px] ${
        isMobile && 'h-16'
      } border-blue-200  border-b border-solid flex flex-row max-w-[100vw] overflow-x-hidden`}>
      <div className='min-w-[92px] h-full flex items-center justify-center border-r border-blue-200'>
        <div className='w-[43px] h-[40px]'>
          <svg
            viewBox='0 0 43 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z'
              fill='#60A5FA'></path>
            <path
              d='M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z'
              fill='#2563EB'></path>
          </svg>
        </div>
      </div>
      <div className='flex flex-grow flex-row justify-between mr-5'>
        <div className='w-auto flex flex-row items-center'>
          <ul className='flex flex-row items-center text-gray-500'>
            {appBarStartIcons.map((icon) => {
              if (isMobile && icon.hideOnMobile) return []
              if (icon.hasBadge)
                return (
                  <Badge
                    count={2}
                    color='rgba(37, 99, 235)'
                    offset={[0, 10]}
                    key={icon.key}>
                    <li
                      key={icon.key}
                      className='min-w-[66px] min-h-12 cursor-pointer'>
                      <div className='w-12 ml-[18px] hover:bg-blue-200 h-12 rounded-full bg-blue-100 flex justify-center items-center'>
                        {icon.el}
                      </div>
                    </li>
                  </Badge>
                )
              return (
                <li
                  key={icon.key}
                  className={`
                ${isMobile ? 'w-10 h-10 ml-[8px]' : 'w-12 h-12 ml-[18px]'}
                `}>
                  <div
                    className={`w-full h-full  hover:bg-blue-200 cursor-pointer  
                    rounded-full bg-blue-100 flex justify-center items-center 
                    ${icon.selected && 'bg-blue-200'}
                  `}>
                    {icon.el}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='w-auto h-full flex items-end'>
          <div className='h-full'>
            <div className='w-auto h-full flex flex-row items-center'>
              <ul className='flex flex-row items-center'>
                {appBarEndIcons.map((icon) => {
                  return (
                    <li
                      key={icon.key}
                      className={`${
                        isMobile
                          ? 'w-10 h-10  ml-[8px]'
                          : 'w-12 h-12  ml-[18px]'
                      }   cursor-pointer`}>
                      <div className='w-full h-full hover:bg-blue-200 rounded-full bg-blue-100 flex justify-center items-center'>
                        {icon.el}
                      </div>
                    </li>
                  )
                })}
                <Popover
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
                          <path d='M7.5 1v7h1V1z'></path>
                          <path d='M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812'></path>
                        </svg>
                        <span onClick={() => logout()}>Log Out</span>
                      </div>
                    </>
                  }>
                  <li className={`${isMobile ? 'ml-[8px]' : 'ml-[18px]'} `}>
                    <div
                      className={`
                     cursor-pointer w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center`}>
                      <img
                        className='w-full h-full rounded-full'
                        src={user?.imageUrl}
                        alt=''
                      />
                    </div>
                  </li>
                </Popover>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBar
