import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './models/project.model';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

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
}
