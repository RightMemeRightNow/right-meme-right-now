export class TestService {
  httpClient;
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getTodos(id) {
    try {
      const response = await this.httpClient.fetch(`/todos`).get(`/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
