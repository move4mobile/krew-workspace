import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3001);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
