import { AuthResponse } from 'src/types/auth.types'
import http from 'src/utils/http'

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/register', body)
}

export const loginAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/login', body)
}

export const logout = () => {
  return http.post<AuthResponse>('/logout')
}
