import { registerEnumType } from '@nestjs/graphql';

export enum BadgeDegree {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
}

registerEnumType(BadgeDegree, {
  name: 'BadgeDegree',
  description: 'Degree of a Badge (e.g. Bronze)',
});
