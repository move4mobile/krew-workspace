import { Field, ObjectType } from '@nestjs/graphql';

enum FieldMapping {
  GOOGLE = 'Id',
  TWITTER = 'Twitter',
  GITHUB = 'GitHub',
  TEMPO = 'Tempo',
  SLACK = 'Slack',
}

@ObjectType({ description: 'employee account ' })
export class EmployeeAccounts {
  @Field({ nullable: true })
  google!: string;

  @Field({ nullable: true })
  github!: string;

  @Field({ nullable: true })
  twitter!: string;

  @Field({ nullable: true })
  tempo!: string;

  @Field({ nullable: true })
  slack!: string;

  static fromRow(data: any) {
    const obj = Object.assign(new EmployeeAccounts(), <
      Partial<EmployeeAccounts>
    >{
      google: data[FieldMapping.GOOGLE],
      github: data[FieldMapping.GITHUB],
      twitter: data[FieldMapping.TWITTER],
      tempo: data[FieldMapping.TEMPO],
      slack: data[FieldMapping.SLACK],
    });

    return obj;
  }
}
