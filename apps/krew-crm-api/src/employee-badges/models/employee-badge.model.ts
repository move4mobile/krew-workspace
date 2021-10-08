import { Field, ObjectType } from '@nestjs/graphql';
import { Badge } from '../../../src/badges/models/badge.model';
import { Employee } from '../../../src/employees/models/employee.model';

enum FieldMapping {
  EMPLOYEE = 'Employee',
  EMPLOYEE_ID = 'EmployeeId',
  BADGE = 'Badge',
  BADGE_ID = 'BadgeId',
}

@ObjectType({ description: 'employee ' })
export class EmployeeBadge {
  @Field()
  employeeId: string;

  @Field(() => Employee)
  employee: Employee;

  @Field()
  badgeId: number;

  @Field(() => Badge)
  badge: Badge;

  static fromRow(data: any) {
    const obj = Object.assign(new EmployeeBadge(), <Partial<EmployeeBadge>>{
      employeeId: parseString(data[FieldMapping.EMPLOYEE_ID]),
      badgeId: parseNumber(data[FieldMapping.BADGE_ID]),
      // creationDate: data[FieldMapping.ROLE],
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
