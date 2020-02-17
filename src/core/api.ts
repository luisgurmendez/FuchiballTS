import axios from 'axios';
import { NavigatorService } from './navigation';
import { Tokens } from './Auth';

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

export class Api {

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

  async setTokens(tokens: Tokens) {
    this.authToken = tokens.authToken;
    this.refreshToken = tokens.refreshToken;
  }

  post(url: string, data: any = {}) {
    return axios.post(url, data, { headers: this.getHeaders(), baseURL: this.baseUrl })
  }

  get(url: string, data?: any) {
    return axios.get(url, { headers: this.getHeaders(), baseURL: this.baseUrl })
  }
}

export function initApi(tokens: Tokens) {
  const api = Api.getInstance();
  api.setTokens(tokens);
}
