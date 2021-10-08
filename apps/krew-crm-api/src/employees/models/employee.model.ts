import { DateTime } from 'luxon'; // TODO: move to utils class
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../enums/employee-role.enum';
import { EmployeeAccounts } from './employee-accounts.model';
import { Project } from 'src/projects/models/project.model';
import { EmployeeBadge } from 'src/employee-badges/models/employee-badge.model';

enum FieldMapping {
  ID = 'Id',
  GIVEN_NAME = 'GivenName',
  FAMILY_NAME = 'FamilyName',
  ROLE = 'Role',
  TAGS = 'Tags',
  PHOTO_URL = 'PhotoURL',
  EMAIL_LIST = 'Email',
  ACTIVE = 'Active',
  JOINED = 'MemberSince',
  BIRTHDAY = 'Birthday',
}

@ObjectType({ description: 'employee ' })
export class Employee {
  @Field((type) => ID)
  id: string;

  @Field()
  givenName: string;

  @Field()
  familyName: string;

  @Field((type) => [String])
  emailAddresses: string[];

  @Field((type) => [String])
  tags: string[];

  @Field((type) => EmployeeRole)
  role: EmployeeRole;

  @Field({ nullable: true })
  photoUrl?: string;

  @Field({ nullable: true })
  joined!: Date;

  @Field({ nullable: true })
  birthday!: string; // Format: DD/MM/YYYY where YYYY is optional

  @Field((type) => EmployeeAccounts)
  accounts: EmployeeAccounts;

  @Field()
  active: Boolean;

  /*
   ** Via Resolvers
   */

  @Field(() => [Project])
  projects: Project[];

  @Field(() => [EmployeeBadge])
  badges: EmployeeBadge[];

  get fullName() {
    return `${this.givenName} ${this.fullName}`;
  }

  static fromRow(data: any) {
    const obj = Object.assign(new Employee(), <Partial<Employee>>{
      id: data[FieldMapping.ID],
      givenName: data[FieldMapping.GIVEN_NAME],
      familyName: data[FieldMapping.FAMILY_NAME],
      role: data[FieldMapping.ROLE],
      tags: splitString(data[FieldMapping.TAGS]),
      photoUrl: data[FieldMapping.PHOTO_URL] || null,
      emailAddresses: splitString(data.Email),
      active: data[FieldMapping.ACTIVE] === 'TRUE',
      joined: parseDate(data[FieldMapping.JOINED]),
      birthday: parseBirthday(data[FieldMapping.BIRTHDAY]),
      accounts: EmployeeAccounts.fromRow(data),
    });

    return obj;
  }
}

// TODO: move to utils class
function parseDate(input: string): Date {
  if (!input) {
    return;
  }
  return new Date(input);
}

// TODO: move to utils class
function parseBirthday(input: string): string {
  const IGNORE_DATES = [1900];
  const date = DateTime.fromJSDate(new Date(input));
  if (!date.isValid) {
    return;
  }
  if (IGNORE_DATES.includes(date.year)) {
    return date.toFormat('dd/MM');
  }
  return date.toFormat('dd/MM/yyyy');
}

// TODO: move to utils class
function splitString(input: string): string[] {
  if (!input) {
    return [];
  }
  return input.split(',').map((s) => s.trim());
}
