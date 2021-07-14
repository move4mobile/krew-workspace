import { BaseService } from './base.service';

const resourceName = '/auth/login';

class UserCredential {
  user: any;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<UserCredential> {
    console.log(`login user ${username} ${password}`);

    const query = `${resourceName}`;

    const postData = {
      grant_type: 'password',
    };

    return this.postLogin(query, postData);
  }
}
