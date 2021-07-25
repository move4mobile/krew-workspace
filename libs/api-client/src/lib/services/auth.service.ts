import { BaseService } from './base.service';

const loginResourceName = '/auth/login';
const refreshResourceName = '/auth/refresh';

class AuthResponse {
  token: string;
  refresh_token: string;
}

export class AuthService extends BaseService {
  async login(username: string, password: string): Promise<AuthResponse> {
    if (!username || !password) {
      throw new Error('Username or password is null');
    }

    const query = `${loginResourceName}`;

    const postData = {
      username,
      password,
    };

    const response: AuthResponse = await this.requestWithoutBearer(query, postData);
    this.saveToken(response.token, response.refresh_token);
    return response;
  }

  async refresh(): Promise<AuthResponse> {
    if (!this.getRefreshToken()) {
      throw new Error('RefreshToken is not set');
    }

    const query = `${refreshResourceName}`;

    const postData = {
      refresh_token: this.getRefreshToken()
    };

    const response: AuthResponse = await this.requestWithoutBearer(query, postData);
    this.saveToken(response.token, response.refresh_token);
    return response;
  }
}
