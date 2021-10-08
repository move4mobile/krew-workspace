import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { EmployeesArgs } from './dto/employees.args';
import { EmployeeRole } from './enums/employee-role.enum';
import { Employee } from './models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private databaseService: DatabaseService) {}
  async findOneById(id: string): Promise<Employee> {
    const employees = await this.findAll();

    return employees.find((e) => e.id === id);
  }

  async findAll(employeesArgs: EmployeesArgs = {}): Promise<Employee[]> {
    let data = await this.databaseService.getEmployees();

    // Filter by status
    data = this.filterByStatus(data, employeesArgs.active);

    // Filter by role
    data = this.filterByRole(data, employeesArgs.role);

    // Filter by tag
    data = this.filterByTag(data, employeesArgs.tag);

    // Filter by accounts
    data = this.filterByAccount(data, 'github', employeesArgs.githubAccount);

    return data;
  }

  private filterByStatus(employees: Employee[], status: boolean): Employee[] {
    if (status !== true && status !== false) {
      return employees;
    }

    return employees.filter((e) => e.active === status);
  }

  private filterByRole(employees: Employee[], role: EmployeeRole): Employee[] {
    if (!role) {
      return employees;
    }
    return employees.filter((e) => e.role === role);
  }

  private filterByTag(employees: Employee[], tag: string): Employee[] {
    if (!tag) {
      return employees;
    }
    return employees.filter((e) =>
      e.tags
        .map((t) => t.toLocaleLowerCase())
        .includes(tag.toLocaleLowerCase()),
    );
  }

  private filterByAccount(
    employees: Employee[],
    accountType: string,
    accountId: string,
  ): Employee[] {
    if (!accountId) {
      return employees;
    }

    switch (accountType) {
      case 'github': {
        return employees.filter((e) => e.accounts.github === accountId);
      }
    }

    return employees;
  }
}
