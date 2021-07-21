import { BaseService } from './base.service';

const resourceName = '/auth/login';

class AuthResponse {
  token: string;
  refresh_token: string;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<AuthResponse> {
    if (!username || !password) {
      throw new Error('Username or password is null');
    }

    const query = `${resourceName}`;

    const postData = {
      username,
      password,
    };

    const response: AuthResponse = await this.postLogin(query, postData);
    this.saveToken(response.token);

    return response;
  }

  get isLoggedIn(): boolean {
    return Boolean(this.getToken());
  }
}
