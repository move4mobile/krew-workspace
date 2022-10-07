import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '../core/decorators';
import { FirebaseAuthGuard } from '../core/guards';
import { GatewaySettingsService } from '../core/services';

@Controller('')
export class AuthController {
  constructor(private readonly gatewaySettingsService: GatewaySettingsService) {}

  @UseGuards(FirebaseAuthGuard)
  @Get('me')
  async getData(@User() loggedInUser) {
    const config = await this.gatewaySettingsService.getRemoteConfig();
    console.log('configuration', config);

    return loggedInUser;
  }
}
