import { Field, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../../../src/employees/enums/employee-role.enum';
import { Employee } from '../../../src/employees/models/employee.model';
import { Project } from '../../../src/projects/models/project.model';
import { parseString, parseNumber, parseDate } from '../../common/utils/sheets-parser.utils';

enum FieldMapping {
  EMPLOYEE_ID = 'EmployeeId',
  PROJECT_ID = 'ProjectId',
  START_DATE = 'StartDate',
  END_DATE = 'EndDate',
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

  @Field(() => EmployeeRole)
  role: EmployeeRole;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  get active() {
    // Easiest check to get started; definitely not rock solid (yet)
    if (this.endDate) {
      return false;
    }
    return true;
  }

  static fromRow(data: any) {
    const obj = Object.assign(new EmployeeProject(), <Partial<EmployeeProject>>{
      employeeId: parseString(data[FieldMapping.EMPLOYEE_ID]),
      projectId: parseNumber(data[FieldMapping.PROJECT_ID]),
      startDate: parseDate(data[FieldMapping.START_DATE]),
      endDate: parseDate(data[FieldMapping.END_DATE]),
      role: data[FieldMapping.ROLE],
    });

    return obj;
  }
}
