import { BaseService } from './base.service';

const resourceName = 'oauth';

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<any> {
    console.log(`login user ${username} ${password}`);
    throw new Error('Method not implemented.');
  }
}
