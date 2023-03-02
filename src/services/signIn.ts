import { HttpClient } from '../infra/http/HttpClient'
import { parseCookies } from 'nookies'
import moment from 'moment'
const baseURL = 'https://apps.blueprojects.com.br/eshows/Security/CreateUser'
const BASE_URL = 'https://apps.blueprojects.com.br/eshows/Integration/Save'
export const signupService = {
  async signup(data) {
    const response = await HttpClient(baseURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        LOGIN: data.EMAIL,
        EMAIL: data.EMAIL,
        PASSWORD: data.PASSWORD,
        FULL_NAME: data.FULL_NAME,
      },
    })

    return response
  },

  async signUpData({
    birthDate,
    userId,
    whatsapp,
    cep,
    logradouro,
    number,
    uf,
    complement,
    city,
  }) {
    const cookies = parseCookies()
    const token = cookies.LOGIN_COOKIE_APP_TOKEN
    const response = await HttpClient(BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        auth: token,
      },
      body: {
        tid: 'VF9BRE1JTl9VU0VSU19EQURPUzoxNDk1MTg=',
        fid: 193,
        type: 1,
        data: {
          DATA_DE_NASCIMENTO: `${moment(birthDate).format(
            'YYYY-MM-DDTHH:mm',
          )}:00-03:00`,
          FK_USUARIO: userId,
          CELULAR: whatsapp,
          CEP: cep,
          UF: uf,
          LOGRADOURO: logradouro,
          NUMERO: number,
          COMPLEMENTO: complement,
          CIDADE: city,
        },
      },
    })

    return response
  },
}
