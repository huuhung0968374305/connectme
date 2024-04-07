import React, { useState, useEffect } from 'react'

import io from 'socket.io-client'

const socket = io('http://localhost:5000', {
  transports: ['websocket']
})

function Home() {
  const token = ''
  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('connect to socket')
  //   })
  //   socket.on('disconnect', () => {
  //     console.log('disconnect')
  //   })
  //   socket.emit('join-room', { room: '1231231' })
  //   if (token) {
  //     socket.auth = { token } // Attach token to socket handshake
  //     socket.connect() // Reconnect with authentication
  //   }
  //   // return () => socket.disconnect()
  // }, [])
  return <div>Home</div>
}

export default Home
