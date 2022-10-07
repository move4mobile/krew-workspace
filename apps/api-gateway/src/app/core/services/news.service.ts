import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GatewaySettingsService } from './';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom, map, tap } from 'rxjs';

// interface IRemoteConfig {
//   apiKey: string;
// }

@Injectable()
export class NewsService {
  protected API_PATH = '/news';

  constructor(
    private readonly httpService: HttpService,
    private readonly gatewaySettingsService: GatewaySettingsService,
    private readonly configService: ConfigService
  ) {}

  async all() {
    return this.get();
  }

  private async get() {
    const query = 'limit=10&offset=0';

    const urlPath = this.API_PATH;
    const baseUrl = this.configService.get('apiBaseUrl');
    const apiKey = await this.getApiKey();
    console.log({ urlPath, baseUrl });
    const request = this.httpService
      .get(`${baseUrl}${urlPath}?${query}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .pipe(map(res => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      );

    // return this.httpService
    //   .get(this.API_PATH, {
    //     baseURL: baseUrl,
    //     headers: {
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //   })
    //   .toPromise();

    const items = await lastValueFrom(request);
    console.log(items);

    return {
      data: {
        items,
      },
    };
  }

  private async getApiKey() {
    const config = await this.gatewaySettingsService.getRemoteConfig();
    return config.apiKey;
  }
}
