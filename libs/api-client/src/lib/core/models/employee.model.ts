import { EmployeeRole } from '../enums';

export class Employee {
  id: string;
  email: string;
  roles: EmployeeRole[];
  firstName: string;
  infix?: string;
  lastName: string;
  title: string;

  // MORE TO BE ADDED
}
