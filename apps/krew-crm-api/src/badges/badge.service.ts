import { Injectable, Logger } from '@nestjs/common';
import { Badge } from './models/badge.model';
import { DatabaseService } from '../../src/database/database.service';

@Injectable()
export class BadgesService {
  constructor(private databaseService: DatabaseService) {}
  async findOneById(id: string): Promise<Badge> {
    Logger.log(`Getting badge with id ${id}...`);

    const badges = await this.findAll();
    return badges.find((e) => e.id === id);
  }

  async findAll(): Promise<Badge[]> {
    return await this.databaseService.getBadges();
  }
}
