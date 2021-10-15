import { ArgsType, Field } from '@nestjs/graphql';
import { EmployeeRole } from '../enums/employee-role.enum';

@ArgsType()
export class EmployeesArgs {
  @Field((type) => Boolean, { nullable: true })
  active?;

  @Field((type) => EmployeeRole, { nullable: true })
  role?;

  @Field((type) => String, { nullable: true })
  tag?;

  @Field((type) => String, { nullable: true })
  githubAccount?;
}
