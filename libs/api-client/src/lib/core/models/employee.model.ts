import { Exclude, Expose, Transform } from 'class-transformer';
import { EmployeeRole } from '../enums';

export class Employee {
  id: string;

  email: string;

  roles: EmployeeRole[];

  @Expose({ name: 'first_name' })
  firstName: string;

  infix?: string;

  @Expose({ name: 'last_name' })
  lastName: string;

  title: string;

  // MORE TO BE ADDED
}
