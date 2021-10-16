import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { BadgesService } from './badge.service';
import { Badge } from './models/badge.model';

@Resolver(() => Badge)
export class BadgesResolver {
  constructor(private readonly badgesService: BadgesService) {}

  @Query(() => Badge)
  async badge(@Args('id') id: string): Promise<Badge> {
    const badge = await this.badgesService.findOneById(id);
    if (!badge) {
      throw new NotFoundException(id);
    }
    return badge;
  }

  @Query(() => [Badge])
  badges(): Promise<Badge[]> {
    return this.badgesService.findAll();
  }
}
