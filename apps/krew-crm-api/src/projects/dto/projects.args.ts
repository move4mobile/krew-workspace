import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class EmployeesArgs {
  @Field(() => Boolean, { nullable: true })
  active?;
}
