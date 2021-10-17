import { registerEnumType } from '@nestjs/graphql';

export enum BadgeDegree {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
}

registerEnumType(BadgeDegree, {
  name: 'BadgeDegree',
  description: 'Badge Degree can be Bronze, Silver or Gold',
});
