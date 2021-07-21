import { BaseService } from './base.service';

const resourceName = '/auth/login';

class UserCredential {
  user: any;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<UserCredential> {
    if (!username || !password) {
      throw new Error('sername or password is null');
    }

    const query = `${resourceName}`;

    const postData = {
      username,
      password,
    };

    const response = await this.postLogin(query, postData);
    this.saveToken(response.token);
    return response;
  }
}
