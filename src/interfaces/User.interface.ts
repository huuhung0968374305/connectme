export interface IUser {
  accessToken: string
  id: string
  username: string
  firstName: string | null
  lastName: string | null
  email: string
  phoneNumber: string | null
  country: string | null
  imageUrl: string
  createdAt: string
  updatedAt: string
}
