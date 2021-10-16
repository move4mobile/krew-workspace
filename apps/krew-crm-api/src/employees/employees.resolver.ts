import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeeBadgesService } from '../../src/employee-badges/employee-badges.service';
import { EmployeeBadge } from '../../src/employee-badges/models/employee-badge.model';
import { EmployeeProjectsService } from '../../src/employee-projects/employee-projects.service';
import { Project } from '../../src/projects/models/project.model';
import { EmployeeProject } from '../employee-projects/models/employee-project.model';
import { EmployeesArgs } from './dto/employees.args';
import { EmployeesService } from './employees.service';
import { Employee } from './models/employee.model';

@Resolver((of) => Employee)
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly employeeProjectsService: EmployeeProjectsService,
    private readonly employeeBadgesService: EmployeeBadgesService,
  ) {}

  @Query((returns) => Employee)
  async employee(@Args('id') id: string): Promise<Employee> {
    const employee = await this.employeesService.findOneById(id);
    if (!employee) {
      throw new NotFoundException(id);
    }
    return employee;
  }

  @Query((returns) => [Employee])
  employees(@Args() employeesArgs: EmployeesArgs): Promise<Employee[]> {
    return this.employeesService.findAll(employeesArgs);
  }

  @ResolveField('fullName', () => String)
  async getFullName(@Parent() employee: Employee) {
    return employee.fullName;
  }

  @ResolveField('projects', () => [EmployeeProject])
  async getProjects(@Parent() employee: Employee) {
    const { id } = employee;

    const allEmployeeProjects = await this.employeeProjectsService.findAll();
    return allEmployeeProjects.filter((project) => project.employeeId === id);
  }

  @ResolveField('badges', () => [EmployeeBadge])
  async getEmployeeBadges(@Parent() employee: Employee) {
    const { id } = employee;

    const allEmployeeBadges = await this.employeeBadgesService.findAll();
    return allEmployeeBadges.filter((badge) => badge.employeeId === id);
  }
}
