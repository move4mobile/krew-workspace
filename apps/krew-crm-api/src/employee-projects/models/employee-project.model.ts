import { Field, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../../../src/employees/enums/employee-role.enum';
import { Employee } from '../../../src/employees/models/employee.model';
import { Project } from '../../../src/projects/models/project.model';

enum FieldMapping {
  EMPLOYEE_ID = 'EmployeeId',
  PROJECT_ID = 'ProjectId',
  ROLE = 'Role',
}

@ObjectType({ description: 'employeeProject ' })
export class EmployeeProject {
  @Field()
  employeeId: string;

  @Field(() => Employee)
  employee: Employee;

  @Field()
  projectId: number;

  @Field(() => Project)
  project: Project;

  @Field((type) => EmployeeRole)
  role: EmployeeRole;

  static fromRow(data: any) {
    const obj = Object.assign(new EmployeeProject(), <Partial<EmployeeProject>>{
      employeeId: parseString(data[FieldMapping.EMPLOYEE_ID]),
      projectId: parseNumber(data[FieldMapping.PROJECT_ID]),
      role: data[FieldMapping.ROLE],
    });

    return obj;
  }
}

// TODO: move to utils
function parseString(input: string): string {
  if (!input || input == '#N/A') {
    return;
  }
  return input;
}

// TODO: move to utils
function parseNumber(input: string): Number {
  if (!input) {
    return;
  }
  const number = Number.parseInt(input);
  if (isNaN(number)) {
    return;
  }
  return number;
}
