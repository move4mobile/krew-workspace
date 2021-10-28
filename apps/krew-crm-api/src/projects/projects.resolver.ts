import { NotFoundException } from '@nestjs/common';
import { Parent, Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './models/project.model';
import { EmployeeProjectsService } from '../employee-projects/employee-projects.service';
import { ProjectsArgs } from './dto/projects.args';
import { EmployeeProject } from '../employee-projects/models/employee-project.model';
import { FilterStatus } from '../common/enums/filter-status.enum';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly employeeProjectsService: EmployeeProjectsService,
  ) {}

  @Query(() => Project)
  async project(@Args('id') id: number): Promise<Project> {
    const project = await this.projectsService.findOneById(id);
    if (!project) {
      throw new NotFoundException(id);
    }
    return project;
  }

  @Query(() => [Project])
  projects(@Args() projectsArgs: ProjectsArgs): Promise<Project[]> {
    return this.projectsService.findAll(projectsArgs);
  }

  @ResolveField('members', () => [EmployeeProject])
  async getMembers(
    @Args('status', { nullable: true, type: () => FilterStatus }) status: FilterStatus = FilterStatus.ACTIVE,
    @Parent() project: Project,
  ) {
    const { id } = project;

    const employeeProjects = await this.employeeProjectsService.findAll();
    return employeeProjects.filter(
      (e) =>
        e.projectId === id &&
        (status === FilterStatus.ALL ||
          (status == FilterStatus.ACTIVE && e.active === true) ||
          (status == FilterStatus.INACTIVE && e.active === false)),
    );
  }
}
