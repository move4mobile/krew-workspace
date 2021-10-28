import { Field, ObjectType } from '@nestjs/graphql';
import { Badge } from '../../../src/badges/models/badge.model';
import { Employee } from '../../../src/employees/models/employee.model';
import { parseString, parseNumber, parseDate } from '../../common/utils/sheets-parser.utils';

enum FieldMapping {
  EMPLOYEE = 'Employee',
  EMPLOYEE_ID = 'EmployeeId',
  BADGE = 'Badge',
  BADGE_ID = 'BadgeId',
  AWARDED_COUNT = 'AwardedCount',
  AWARDED_DATE = 'AwardedDate',
}

@ObjectType({ description: 'employee badge ' })
export class EmployeeBadge {
  @Field()
  employeeId: string;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Number)
  badgeId: number;

  @Field(() => Badge)
  badge: Badge;

  @Field()
  awarded: number;

  @Field({ nullable: true })
  awardedDate?: Date;

  static fromRow(data: any) {
    const obj = Object.assign(new EmployeeBadge(), <Partial<EmployeeBadge>>{
      employeeId: parseString(data[FieldMapping.EMPLOYEE_ID]),
      badgeId: parseNumber(data[FieldMapping.BADGE_ID]),
      awarded: parseNumber(data[FieldMapping.AWARDED_COUNT] || 0),
      awardedDate: data[FieldMapping.AWARDED_DATE] ? parseDate(data[FieldMapping.AWARDED_DATE]) : undefined,
    });

    return obj;
  }
}
