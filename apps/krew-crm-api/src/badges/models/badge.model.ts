import { Field, ID, ObjectType } from '@nestjs/graphql';

enum FieldMapping {
  ID = 'ID',
  NAME = 'Name',
  CATEGORY = 'Category',
  IMAGE_URL = 'Image',
  DESCRIPTION = 'Description',
  NOTE = 'Note',
}

@ObjectType({ description: 'badge ' })
export class Badge {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  static fromRow(data: any) {
    const obj = Object.assign(new Badge(), <Partial<Badge>>{
      id: data[FieldMapping.ID] + '',
      name: data[FieldMapping.NAME],
      description: data[FieldMapping.DESCRIPTION],
    });

    return obj;
  }
}
