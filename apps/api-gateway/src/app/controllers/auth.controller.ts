import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '../core/decorators';
import { FirebaseAuthGuard } from '../core/guards';
import { AuthService, GatewaySettingsService } from '../core/services';

@Controller('')
export class AuthController {
  constructor(
    private readonly gatewaySettingsService: GatewaySettingsService,
    private readonly authService: AuthService
  ) {}

  @UseGuards(FirebaseAuthGuard)
  @Get('me')
  async getData(@User() loggedInUser) {
    const config = await this.gatewaySettingsService.getRemoteConfig();
    console.log('configuration', config);

    const USER_ID = null;
    const user = await this.authService.getUserByFirebaseUserId(USER_ID);
    console.log(user);

    return {
      ...loggedInUser,
      ...user,
    };
  }

  @Get('account')
  async getAccount(@User() loggedInUser) {
    const config = await this.gatewaySettingsService.getRemoteConfig();
    console.log('configuration', config);

    const account = await this.authService.getUserByFirebaseUserId(null);
    return account;
  }
}
