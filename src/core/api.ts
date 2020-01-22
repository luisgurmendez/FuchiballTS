import axios from 'axios';
import { getTokens, setTokens } from './storage';
import { NavigatorService } from './navigation';
import { Alert } from 'react-native';

axios.interceptors.response.use((response) => {
  return response;
}, function (error) {

  if (error.response.status === 401 || error.response.status === 403) {
    //TODO: Authorization vs authentication?
    NavigatorService.getInstance().navigate('Login')
  }

  return Promise.reject(error.response.data);
});

const baseUrl = 'http://localhost:3001';

class Api {

  private static instance: Api;
  private baseUrl: string;
  private authToken: string | undefined;
  private refreshToken: string | undefined;

  public static getInstance(): Api {

    if (!this.instance) {
      this.instance = new Api();
    }
    return this.instance;
  }

  constructor() {
    this.baseUrl = baseUrl;
  }

  private getHeaders() {
    let headers = {
      ['Content-Type']: 'application/json',
      ['authorization']: this.authToken
    }
    return headers;
  }

  async setUpTokens() {
    let tokens = await getTokens();
    if (tokens !== undefined) {
      this.authToken = tokens.authToken;
      this.refreshToken = tokens.refreshToken;
    }
  }

  post(url: string, data: any = {}) {
    return axios.post(url, data, { headers: this.getHeaders(), baseURL: this.baseUrl })
  }

  get(url: string, data?: any) {
    return axios.get(url, { headers: this.getHeaders(), baseURL: this.baseUrl })
  }
}

export function initApi() {
  const api = Api.getInstance();
  api.setUpTokens();
}

export function login(username: string, password: string) {
  const api = Api.getInstance();
  return api.post('/login', { username: username, password: password }).then(data => {
    if (data.status === 200) {
      setTokens(data.data.token, data.data.refreshToken).then(() => {
        api.setUpTokens();
      })
    }
  })
}

export function refreshToken(token: string, refreshToken: string) {

  const api = Api.getInstance();
  return api.post('/refresh', { token: token, refreshToken: refreshToken }).then(data => {
    if (data.status === 200) {
      setTokens(data.data.token, data.data.refreshToken).then(() => {
        api.setUpTokens();
      })
    }
  })
}

export function getUsers() {
  return Api.getInstance().get('/user/all')
}
