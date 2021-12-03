import { ArgsType, Field } from '@nestjs/graphql';
import { EmployeeRole } from '../enums/employee-role.enum';

@ArgsType()
export class EmployeesArgs {
  @Field(() => Boolean, { nullable: true })
  active?;

  @Field(() => EmployeeRole, { nullable: true })
  role?;

  @Field(() => String, { nullable: true })
  tag?;

  @Field(() => String, { nullable: true })
  githubAccount?;
}
