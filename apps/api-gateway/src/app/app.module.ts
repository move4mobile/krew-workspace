import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FirebaseAuthStrategy } from './core/strategies/firebase-auth.strategy';
import { AuthController, NewsController } from './controllers';
import { configuration } from './core/config/configuration';
import { validationSchema } from './core/config/validation';
import { AuthService, DataService, GatewaySettingsService, KrewApiService } from './core/services';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
  controllers: [AuthController, NewsController],
  providers: [FirebaseAuthStrategy, AuthService, DataService, GatewaySettingsService, KrewApiService],
})
export class AppModule {}
