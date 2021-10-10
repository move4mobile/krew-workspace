import { Field, ID, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '../enums/employee-role.enum';
import { EmployeeAccounts } from './employee-accounts.model';
import { Project } from '../../../src/projects/models/project.model';
import { EmployeeBadge } from '../../../src/employee-badges/models/employee-badge.model';
import { splitString, parseDate, parseBirthday } from '../../common/utils/sheets-parser.utils';

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
  active: boolean;

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
