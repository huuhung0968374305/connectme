import axiosClient from '../axios'

export type LoginBody = {
  email: string
  password: string
}
export type SignupBody = {
  username: string
} & LoginBody
export class AuthService {
  static async login(body: LoginBody | any) {
    try {
      const res = await axiosClient.post('/signin', body)
      return { token: res.data.token, id: res.data.id }
    } catch (_error: any) {
      const {
        response: {
          data: { error }
        }
      } = _error
      return { error }
    }
  }
  static async register({ email, username, password }: SignupBody | any) {
    try {
      await axiosClient.post('/signup', {
        email,
        username,
        password
      })
      return { created: true }
    } catch (_error: any) {
      console.log('_error', _error)
      const {
        response: {
          data: { error }
        }
      } = _error
      return { error }
    }
  }
}
