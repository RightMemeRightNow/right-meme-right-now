export class ZzalService {
  httpClient;
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getFinalImage(tags) {
    try {
      const response = await this.httpClient.fetch(`/api/getFinalImage`).get(`?tags=${tags}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
