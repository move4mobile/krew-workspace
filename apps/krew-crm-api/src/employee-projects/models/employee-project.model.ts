import { Field, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../../../src/employees/enums/employee-role.enum';
import { Employee } from '../../../src/employees/models/employee.model';
import { Project } from '../../../src/projects/models/project.model';
import { parseString, parseNumber } from '../../common/utils/sheets-parser.utils';

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
