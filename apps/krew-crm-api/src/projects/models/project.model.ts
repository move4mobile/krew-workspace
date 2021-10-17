import { Field, ID, ObjectType } from '@nestjs/graphql';
import { parseNumber } from '../../common/utils/sheets-parser.utils';

enum FieldMapping {
  ID = 'ID',
  NAME = 'Name',
  JIRA_KEY = 'JiraKey',
}

@ObjectType({ description: 'project ' })
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  jiraKey: string;

  static fromRow(data: any) {
    const obj = Object.assign(new Project(), <Partial<Project>>{
      id: parseNumber(data[FieldMapping.ID]),
      name: data[FieldMapping.NAME],
      jiraKey: data[FieldMapping.JIRA_KEY],
    });

    return obj;
  }
}
