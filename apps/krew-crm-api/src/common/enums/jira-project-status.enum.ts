import { registerEnumType } from '@nestjs/graphql';

export enum JiraProjectStatus {
  RUNNING = 'RUNNING',
  CLOSED = 'CLOSED',
}

registerEnumType(JiraProjectStatus, {
  name: 'JiraProjectStatus',
  description: 'Status of a JIRA project',
});
