import { BaseService } from './base.service';

const resourceName = 'token';

class UserCredential {
  user: any;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<UserCredential> {
    console.log(`login user ${username} ${password}`);

    let query = `${resourceName}`;
    query += '?limit=5&offset=0';

    const postData = {
      grant_type: 'password',
    };

    return this.postLogin(query, postData);
  }
}
