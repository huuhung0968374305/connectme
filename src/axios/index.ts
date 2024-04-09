import axios from 'axios'
import { getLocalStorageItem } from '../utils/localStorage'
import { IUser } from '../interfaces'

const user: IUser | null = getLocalStorageItem('user')
const axiosClient = axios.create({
  baseURL: `https://connectmebe-55e70cc703c6.herokuapp.com/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + user?.accessToken
  }
})
export default axiosClient
