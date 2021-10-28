import { CacheModule, Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { DatabaseService } from './database.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [],
  providers: [DatabaseProvider, DatabaseService],
  exports: [DatabaseProvider, DatabaseService, CacheModule],
})
export class DatabaseModule {}
