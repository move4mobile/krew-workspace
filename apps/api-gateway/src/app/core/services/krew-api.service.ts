import { Injectable } from '@nestjs/common';
import { GatewaySettingsService } from '.';
import { createKrewClient, Employee, IKrewClient, NewsItem } from '@krew/api-client';

@Injectable()
export class KrewApiService {
  private krewClient: IKrewClient;

  constructor(private readonly gatewaySettingsService: GatewaySettingsService) {
    this.krewClient = createKrewClient({ sandbox: false, storageMode: 'MEMORY' });
  }

  async getMe(): Promise<Employee> {
    this.krewClient.me().setAccessToken(await this.getApiKey());

    return this.krewClient.me().get();
  }

  async getNews(): Promise<NewsItem[]> {
    this.krewClient.news().setAccessToken(await this.getApiKey());

    return this.krewClient.news().all();
  }

  private async getApiKey() {
    const config = await this.gatewaySettingsService.getRemoteConfig();
    return config.apiKey;
  }
}
