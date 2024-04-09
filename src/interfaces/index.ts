export * from './User.interface'

export type ApiResponse<T> = {
  status: 'true' // Status will always be "true" in this case
  data: T
}
