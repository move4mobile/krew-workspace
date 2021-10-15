import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeRole {
  OTHER = 'OTHER',
  DEVELOPER = 'DEVELOPER',
  DELIVERY_MANAGER = 'DELIVERY_MANAGER',
  DESIGNER = 'DESIGNER',
  HR = 'HR',
  TESTER = 'TESTER',
}

registerEnumType(EmployeeRole, {
  name: 'EmployeeRole',
  description: 'Role of an employee',
  valuesMap: {
    DEVELOPER: {
      description: 'Squirrels',
    },
    DESIGNER: {
      deprecationReason: 'Who needs designers',
    },
  },
});
