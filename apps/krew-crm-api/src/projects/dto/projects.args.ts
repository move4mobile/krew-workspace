import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class EmployeesArgs {
  @Field((type) => Boolean, { nullable: true })
  active?;
}
