import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesService } from '../../src/employees/employees.service';
import { Employee } from '../../src/employees/models/employee.model';
import { Project } from '../../src/projects/models/project.model';
import { ProjectsService } from '../../src/projects/projects.service';
import { EmployeeProjectsService } from './employee-projects.service';
import { EmployeeProject } from './models/employee-project.model';

@Resolver(() => EmployeeProject)
export class EmployeeProjectsResolver {
  constructor(
    private readonly employeeProjectsService: EmployeeProjectsService,
    private readonly projectsService: ProjectsService,
    private readonly employeesService: EmployeesService,
  ) {}

  @Query(() => [EmployeeProject])
  employeeProjects(): Promise<EmployeeProject[]> {
    return this.employeeProjectsService.findAll();
  }

  @ResolveField('employee', () => Employee)
  getEmployee(@Parent() employeeProject: EmployeeProject) {
    const { employeeId } = employeeProject;
    return this.employeesService.findOneById(employeeId + '');
  }
  @ResolveField('project', () => Project)
  getProject(@Parent() employeeProject: EmployeeProject) {
    const { projectId } = employeeProject;
    return this.projectsService.findOneById(projectId + '');
  }
}
