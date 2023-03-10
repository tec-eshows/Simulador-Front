import { HttpClient } from '../../infra/http/HttpClient'

const BASE_URL = 'https://apps.blueprojects.com.br/eshows/Integration/Save'
const BASE_URL_QUERY =
  'https://apps.blueprojects.com.br/eshows/Integration/Query'

export const getContent = {
  async styles() {
    const response = await HttpClient(BASE_URL_QUERY, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        auth: null,
      },
      body: {
        qid: 'SIMULADOR:GET_STYLES',
      },
    })

    return response.list
  },
  async getGroupStyles(id) {
    const response = await HttpClient(BASE_URL_QUERY, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        auth: null,
      },
      body: {
        qid: 'SIMULADOR:GET_STYLES_GROUP',
        conditions: [
          {
            filterid: 'FK_ESTILO',
            values: [id],
          },
        ],
      },
    })

    return response.list
  },
}
