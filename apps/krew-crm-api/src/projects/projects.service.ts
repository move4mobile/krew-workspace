import { Injectable, Logger } from '@nestjs/common';
import { Project } from './models/project.model';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProjectsService {
  constructor(private databaseService: DatabaseService) {}
  async findOneById(id: string): Promise<Project> {
    Logger.log(`Getting project with id ${id}...`);

    const projects = await this.findAll();
    return projects.find((e) => e.id === id);
  }

  async findAll(): Promise<Project[]> {
    return this.databaseService.getProjects();
  }
}
