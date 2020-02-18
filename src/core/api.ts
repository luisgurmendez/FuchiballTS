import axios from 'axios';
import { NavigatorService } from './navigation';
import { Tokens, Auth } from './Auth';


axios.interceptors.response.use((response) => {
  try {
    response.data = JSON.parse(response.data);
  } catch (e) {
    console.log('Un parsable', response.data);
  }
  return response;
}, function (error) {
  if (error.response.status === 401) {
    // Refresh token?
  }

  return Promise.reject(error.response.data);
});

interface ServerResponseData<T> {
  data: T
}

const baseUrl = 'http://localhost:3001';

export class Api {

  private static instance: Api;
  private baseUrl: string;
  public authToken: string | undefined;
  public refreshToken: string | undefined;

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

  post<T = any>(url: string, data: any = {}) {
    return axios.post<T>(url, data, { headers: this.getHeaders(), baseURL: this.baseUrl })
  }

  get<T = any>(url: string, data?: any) {
    return axios.get<T>(url, {
      headers: this.getHeaders(),
      baseURL: this.baseUrl,
      transformResponse: (res: ServerResponseData<T>) => res
    })
  }
}

export function initApi(tokens: Tokens) {
  const api = Api.getInstance();
  api.setTokens(tokens);
}
