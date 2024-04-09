import React, { useEffect } from 'react'
import io from 'socket.io-client'

import { IMessage } from '../interfaces/Message.interface'
import { CryptoHelper } from '../utils/Crypto'

const socket = io('https://connectmebe-55e70cc703c6.herokuapp.com', {
  transports: ['websocket']
})
type IUseSocket = {
  userRooms: string[]
  setAllMessages: React.Dispatch<React.SetStateAction<IMessage | any>>
  allMessages: any
}

function useSocket({ userRooms, allMessages, setAllMessages }: IUseSocket) {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect to socket')
    })
    socket.on('disconnect', () => {
      console.log('disconnect')
    })

    socket.on('room-new-message', (data) => {
      const decryptedData = CryptoHelper.decryptMsg(data)
      console.log('decryptedData', decryptedData)
      setAllMessages([...allMessages, decryptedData])
    })
  }, [allMessages])

  useEffect(() => {
    if (userRooms.length > 0) {
      for (const roomId of userRooms) {
        socket.emit('join-room', roomId)
      }
    }
  }, [userRooms])
  const emitMsg = (msg: IMessage) => {
    socket.emit('create-msg', CryptoHelper.encryptMsg(msg))
  }
  return [emitMsg]
}

export default useSocket
