import { BaseService } from './base.service';

const resourceName = 'oauth';

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
