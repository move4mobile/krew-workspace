import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { EmployeeProjectsService } from '../employee-projects/employee-projects.service';
import { EmployeesService } from '../employees/employees.service';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ProjectsResolver,
    ProjectsService,
    EmployeesService,
    EmployeeProjectsService,
    DatabaseService,
    DateScalar,
  ],
  exports: [ProjectsService],
})
export class ProjectsModule {}
