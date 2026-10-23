export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'travel-marketplace-api',
      timestamp: new Date().toISOString(),
    };
  }
}
