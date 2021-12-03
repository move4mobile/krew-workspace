import { registerEnumType } from '@nestjs/graphql';

export enum FilterStatus {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

registerEnumType(FilterStatus, {
  name: 'FilterStatus',
  description: 'Filter object on status',
});
