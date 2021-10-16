import { NotFoundException } from '@nestjs/common';
import { Parent, Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './models/project.model';
import { Employee } from '../employees/models/employee.model';
import { EmployeeProjectsService } from '../employee-projects/employee-projects.service';
import { EmployeesService } from '../employees/employees.service';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly employeesService: EmployeesService,
    private readonly employeeProjectsService: EmployeeProjectsService,
  ) {}

  @Query(() => Project)
  async project(@Args('id') id: string): Promise<Project> {
    const project = await this.projectsService.findOneById(id);
    if (!project) {
      throw new NotFoundException(id);
    }
    return project;
  }

  @Query(() => [Project])
  projects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @ResolveField('members', () => [Employee])
  async getMembers(@Parent() project: Project) {
    const { id } = project;

    const employeeProjects = await this.employeeProjectsService.findAll();
    const employeeIds = employeeProjects.filter((e) => e.projectId + '' === id).map((ep) => ep.employeeId);

    const employees = await this.employeesService.findAll();

    return employees.filter((e) => employeeIds.includes(e.id));
  }
}
