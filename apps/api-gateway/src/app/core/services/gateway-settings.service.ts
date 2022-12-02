import { Injectable } from '@nestjs/common';
import { DataService } from './data.service';

const SETTINGS_COLLECTION = 'settings';

interface IRemoteConfig {
  apiKey: string;
}

@Injectable()
export class GatewaySettingsService {
  constructor(private readonly data: DataService) {}

  async getRemoteConfig(): Promise<IRemoteConfig> {
    const docRef = this.data.collection(SETTINGS_COLLECTION).doc('config');
    const snapshot = await docRef.get();
    if (snapshot === null) {
      return null;
    }

    return <IRemoteConfig>snapshot.data();
  }
}
