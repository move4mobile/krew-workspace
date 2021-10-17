import { Field, ID, ObjectType } from '@nestjs/graphql';
import { JiraProjectStatus } from '../../common/enums/jira-project-status.enum';
import { parseNumber } from '../../common/utils/sheets-parser.utils';

enum FieldMapping {
  ID = 'ID',
  NAME = 'Name',
  DESCRIPTION = 'Description',
  STATUS = 'Status',
  JIRA_KEY = 'JiraKey',
}

@ObjectType({ description: 'project ' })
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  jiraKey: string;

  @Field(() => JiraProjectStatus, { nullable: true })
  status: JiraProjectStatus;

  static fromRow(data: any) {
    const obj = Object.assign(new Project(), <Partial<Project>>{
      id: parseNumber(data[FieldMapping.ID]),
      name: data[FieldMapping.NAME],
      description: data[FieldMapping.DESCRIPTION],
      jiraKey: data[FieldMapping.JIRA_KEY],
      status: data[FieldMapping.STATUS] ? (data[FieldMapping.STATUS] as JiraProjectStatus) : undefined,
    });

    return obj;
  }
}
