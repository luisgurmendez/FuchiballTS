import { User } from 'types/models';
import AsyncStorage from '@react-native-community/async-storage';

export async function getUser(): Promise<User | undefined> {
  try {
    const user = await AsyncStorage.getItem('user') || '';
    return JSON.parse(user) as User;
  } catch (e) {
    return undefined
  }
}

export function setUser(user: User) {
  return AsyncStorage.setItem('user', JSON.stringify(user))
}