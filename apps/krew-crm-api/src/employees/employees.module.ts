import { Module } from '@nestjs/common';
import { BadgesService } from '../../src/badges/badge.service';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { EmployeeBadgesService } from '../../src/employee-badges/employee-badges.service';
import { EmployeeProjectsService } from '../../src/employee-projects/employee-projects.service';
import { ProjectsService } from '../../src/projects/projects.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    DateScalar,
    DatabaseService,
    ProjectsService,
    BadgesService,
    EmployeesResolver,
    EmployeesService,
    EmployeeProjectsService,
    EmployeeBadgesService,
  ],
})
export class EmployeesModule {}
