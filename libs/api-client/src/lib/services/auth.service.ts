import { BaseService } from './base.service';

const resourceName = '/auth/login';

class UserCredential {
  user: any;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<UserCredential> {
    const query = `${resourceName}`;

    const postData = {
      username,
      password,
    };

    console.log('login user', postData);

    const response = await this.postLogin(query, postData);
    this.saveToken(response.token);
    return response;
  }
}
