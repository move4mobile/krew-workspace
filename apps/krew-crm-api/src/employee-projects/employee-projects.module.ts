import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { EmployeesService } from '../../src/employees/employees.service';
import { ProjectsService } from '../../src/projects/projects.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { EmployeeProjectsResolver } from './employee-projects.resolver';
import { EmployeeProjectsService } from './employee-projects.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    EmployeeProjectsResolver,
    EmployeeProjectsService,
    ProjectsService,
    EmployeesService,
    DateScalar,
    DatabaseService,
  ],
})
export class EmployeeProjectsModule {}
