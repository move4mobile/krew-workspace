import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../src/database/database.service';
import { Project } from '../../src/projects/models/project.model';
import { ProjectsService } from '../../src/projects/projects.service';
import { EmployeeProject } from './models/employee-project.model';

@Injectable()
export class EmployeeProjectsService {
  constructor(private databaseService: DatabaseService, private projectsService: ProjectsService) {}

  async findAll(): Promise<EmployeeProject[]> {
    return this.databaseService.getEmployeeProjects();
  }

  async findAllByEmployeeId(employeeId: string): Promise<Project[]> {
    const data = await this.databaseService.getEmployeeProjects();
    const projects = await this.projectsService.findAll();

    return data.filter((e) => e.employeeId === employeeId).map((e) => projects.find((p) => p.id === e.projectId));
  }
}
