import axios from 'axios'
import { getLocalStorageItem } from '../utils/localStorage'
import { IUser } from '../interfaces'

const user: IUser | null = getLocalStorageItem('user')
const axiosClient = axios.create({
  baseURL: `http://localhost:5000/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + user?.accessToken
  }
})
export default axiosClient
