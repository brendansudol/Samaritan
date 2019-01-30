import { AsyncStorage } from 'react-native'

export const USER_KEY = 'temp-auth-key'

export const signInTemp = () => AsyncStorage.setItem(USER_KEY, 'foo')

export const signOutTemp = () => AsyncStorage.clear()

export const checkAuth = async () => {
  const user = await AsyncStorage.getItem(USER_KEY)
  return !!user
}
