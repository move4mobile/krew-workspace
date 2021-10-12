import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { BadgesResolver } from './badges.resolver';
import { BadgesService } from './badge.service';

@Module({
  imports: [DatabaseModule],
  providers: [BadgesResolver, BadgesService, DatabaseService, DateScalar],
})
export class BadgesModule {}
