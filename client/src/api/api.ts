import axios, { AxiosInstance } from 'axios'

const local = 'http://localhost:4000/'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: `${local}`,
      timeout: 10000
    })
  }
}

const api = new Http().instance
export default api
