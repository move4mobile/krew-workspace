import { Injectable } from '@nestjs/common';
import { BadgesService } from 'src/badges/badge.service';
import { Badge } from 'src/badges/models/badge.model';
import { DatabaseService } from 'src/database/database.service';
import { EmployeeBadge } from './models/employee-badge.model';

@Injectable()
export class EmployeeBadgesService {
  constructor(
    private databaseService: DatabaseService,
    private badgesService: BadgesService,
  ) {}

  async findAll(): Promise<EmployeeBadge[]> {
    return this.databaseService.getEmployeeBadges();
  }

  async findAllByEmployeeId(employeeId: string): Promise<Badge[]> {
    let data = await this.databaseService.getEmployeeBadges();
    let badges = await this.badgesService.findAll();

    return data
      .filter((e) => e.employeeId === employeeId)
      .map((e) => badges.find((p) => p.id === '' + e.badgeId));
  }
}
