import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './controllers/auth.controller';
import { NewsController } from './controllers/news.controller';
import { DataService, GatewaySettingsService, KrewApiService } from './core/services';
import { FirebaseAuthStrategy } from './core/strategies/firebase-auth.strategy';
import { configuration } from './core/config/configuration';
import { validationSchema } from './core/config/validation';

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
  providers: [FirebaseAuthStrategy, DataService, GatewaySettingsService, KrewApiService],
})
export class AppModule {}
