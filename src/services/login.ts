import { setCookie, destroyCookie } from 'nookies'
import { HttpClient } from '../infra/http/HttpClient'

const BASE_URL = 'https://apps.blueprojects.com.br/eshows/Security'

export const loginService = {
  async login(username, password) {
    const response = await HttpClient(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
        loginSource: 1,
      },
    })

    return response
  },
}
