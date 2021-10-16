import { Field, ID, ObjectType } from '@nestjs/graphql';

enum FieldMapping {
  ID = 'ID',
  NAME = 'Name',
}

@ObjectType({ description: 'project ' })
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  static fromRow(data: any) {
    const obj = Object.assign(new Project(), <Partial<Project>>{
      id: data[FieldMapping.ID],
      name: data[FieldMapping.NAME],
    });

    return obj;
  }
}
