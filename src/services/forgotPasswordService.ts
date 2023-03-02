import { HttpClient } from '../infra/http/HttpClient'

const BASE_URL =
  'https://apps.blueprojects.com.br/eshows/Integration/ForgotPassword'
const API_BASE_URL_RESET_PASSWORD =
  'https://apps.blueprojects.com.br/eshows/Security/ChangePasswordJson'
export const forgotPassword = {
  async forgot({ email }) {
    const response = await HttpClient(BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: {
        login: email,
      },
    })

    return response
  },
  async changePassword({ token, oldPassword, password }) {
    const response = await HttpClient(API_BASE_URL_RESET_PASSWORD, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        auth: token,
      },
      body: {
        oldpassword: oldPassword,
        newpassword: password,
      },
    })

    return response
  },
}
