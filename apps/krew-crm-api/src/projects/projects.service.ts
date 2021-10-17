import { Injectable, Logger } from '@nestjs/common';
import { Project } from './models/project.model';
import { DatabaseService } from '../../src/database/database.service';
import { ProjectsArgs } from './dto/projects.args';

@Injectable()
export class ProjectsService {
  constructor(private databaseService: DatabaseService) {}
  async findOneById(id: number): Promise<Project> {
    Logger.log(`Getting project with id ${id}...`);

    const projects = await this.findAll();
    return projects.find((e) => e.id === id);
  }

  async findAll(projectsArgs: ProjectsArgs = {}): Promise<Project[]> {
    let data = await this.databaseService.getProjects();

    // Filter by JIRA Key
    data = this.filterByJiraKey(data, projectsArgs.jiraKey);

    return data;
  }

  private filterByJiraKey(projects: Project[], jiraKey: string): Project[] {
    if (!jiraKey) {
      return projects;
    }
    return projects.filter((p) => p.jiraKey === jiraKey);
  }
}
