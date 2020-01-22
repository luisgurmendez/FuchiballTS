import { User } from 'types/models';
import { AsyncStorage, Alert } from 'react-native';

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

export async function getTokens(): Promise<{ authToken: string, refreshToken: string } | undefined> {
  let tokens = await AsyncStorage.getItem('tokens');

  if (tokens !== null) {
    tokens = JSON.parse(tokens);
    return {
      authToken: tokens![0],
      refreshToken: tokens![1]
    }
  } else {
    return undefined
  }
}

export function setTokens(authToken: string, refreshToken: string) {
  return AsyncStorage.setItem('tokens', JSON.stringify([authToken, refreshToken]));
}