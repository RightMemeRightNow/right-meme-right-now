import axios from "axios";

export class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  fetch(url, options = { headers: {} }) {
    return axios.create({
      baseURL: `${this.baseUrl}${url}`,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    })
  }
}
