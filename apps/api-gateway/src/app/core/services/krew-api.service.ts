import { Injectable } from '@nestjs/common';
import { GatewaySettingsService } from '.';
import { ConfigService } from '@nestjs/config';
import { createKrewClient, IKrewClient, NewsItem } from '@krew/api-client';

@Injectable()
export class KrewApiService {
  private krewClient: IKrewClient;

  constructor(
    private readonly gatewaySettingsService: GatewaySettingsService,
    private readonly configService: ConfigService
  ) {
    this.krewClient = createKrewClient({ sandbox: false, storageMode: 'MEMORY' });
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
