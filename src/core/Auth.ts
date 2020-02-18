import { Api } from './Api';
import { Storage } from './Storage';
import jwtDecode from 'jwt-decode';

export class NoTokenError extends Error {
  constructor(m?: string) {
    super(m)
  }
};

export class RefreshTokenError extends Error {
  constructor(m?: string) {
    super(m)
  }
}

export class LoginError extends Error {
  constructor(m?: string) {
    super(m)
  }
}

export interface Tokens {
  authToken: string;
  refreshToken: string;
}

export class Auth {

  static async getStoredTokens(): Promise<Tokens> {
    let tokens = await Storage.getItem('tokens');

    if (tokens !== null && tokens !== undefined) {
      tokens = JSON.parse(tokens);
      return {
        authToken: tokens![0],
        refreshToken: tokens![1]
      }
    }

    throw new NoTokenError();
  }

  static async login(username: string, password: string) {
    const api = Api.getInstance();
    const data = await api.post('/auth/login', { username: username, password: password });
    if (data.status === 200) {
      this.setTokens(data.data.token, data.data.refreshToken)
    } else {
      throw new LoginError(data.data.message)
    }
    return data;
  }

  static async refreshToken(token: string, refreshToken: string) {
    const api = Api.getInstance();
    const data = await api.post('/auth/refresh', { token: token, refreshToken: refreshToken })
    if (data.status === 200) {
      this.setTokens(data.data.token, data.data.refreshToken)
    } else {
      throw new RefreshTokenError(data.data.message);
    }
    return data;
  }

  static validateToken(token?: string): boolean {
    if (token !== undefined) {
      const tokenData = jwtDecode<{ exp: number }>(token);
      if (tokenData !== null && typeof tokenData === 'object') {
        if (Date.now() < tokenData!.exp * 1000) {
          return true;
        }
      }
    }
    return false
  }

  private static setTokens(authToken: string, refreshToken: string) {
    Storage.setItem('tokens', JSON.stringify([authToken, refreshToken])).then(() => {
      Api.getInstance().setTokens({ authToken: authToken, refreshToken: refreshToken });
    });
  }

}