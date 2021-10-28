import { Field, ID, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../enums/employee-role.enum';
import { EmployeeAccounts } from './employee-accounts.model';
import { EmployeeBadge } from '../../../src/employee-badges/models/employee-badge.model';
import { splitString, parseDate, parseBirthday } from '../../common/utils/sheets-parser.utils';
import { EmployeeProject } from '../../employee-projects/models/employee-project.model';

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
  @Field(() => ID)
  id: string;

  @Field()
  givenName: string;

  @Field()
  familyName: string;

  @Field(() => [String])
  emailAddresses: string[];

  @Field(() => [String])
  tags: string[];

  @Field(() => EmployeeRole)
  role: EmployeeRole;

  @Field({ nullable: true })
  photoUrl?: string;

  @Field({ nullable: true })
  joined!: Date;

  @Field({ nullable: true })
  birthday!: string; // Format: DD/MM/YYYY where YYYY is optional

  @Field(() => EmployeeAccounts)
  accounts: EmployeeAccounts;

  @Field()
  active: boolean;

  /*
   ** Via Resolvers
   */

  @Field(() => [EmployeeProject])
  projects: EmployeeProject[];

  @Field(() => [EmployeeBadge])
  badges: EmployeeBadge[];

  get fullName() {
    return `${this.givenName} ${this.familyName}`;
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
