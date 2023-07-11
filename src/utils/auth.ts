import { User } from 'src/types/user.types'

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearFromLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}

export const getProfileLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
