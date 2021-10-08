import { Module } from '@nestjs/common';
import { BadgesService } from '../../src/badges/badge.service';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { EmployeesService } from '../../src/employees/employees.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { EmployeeBadgesResolver } from './employee-badges.resolver';
import { EmployeeBadgesService } from './employee-badges.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    EmployeeBadgesResolver,
    EmployeeBadgesService,
    BadgesService,
    EmployeesService,
    DateScalar,
    DatabaseService,
  ],
})
export class EmployeeBadgesModule {}
