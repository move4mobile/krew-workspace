import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ProjectsArgs {
  @Field(() => String, { nullable: true })
  jiraKey?: string;
}
