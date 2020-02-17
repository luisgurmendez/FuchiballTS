import { AsyncStorage } from 'react-native';

/**
 * Storage wrapper
 */
export class Storage {

  static async setItem(key: string, value: string): Promise<void> {
    return await AsyncStorage.setItem(key, value);
  }

  static async getItem(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }

  static async removeItem(key: string): Promise<void> {
    return await AsyncStorage.removeItem(key);
  }
}