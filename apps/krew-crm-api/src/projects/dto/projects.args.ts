import { ArgsType, Field } from '@nestjs/graphql';
import { JiraProjectStatus } from '../../common/enums/jira-project-status.enum';

@ArgsType()
export class ProjectsArgs {
  @Field(() => JiraProjectStatus, { nullable: true, name: 'status' })
  jiraProjectStatus?: JiraProjectStatus;

  @Field(() => String, { nullable: true })
  jiraKey?: string;
}
