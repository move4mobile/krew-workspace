import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BadgesService } from '../../src/badges/badge.service';
import { Badge } from '../../src/badges/models/badge.model';
import { EmployeesService } from '../../src/employees/employees.service';
import { Employee } from '../../src/employees/models/employee.model';
import { EmployeeBadgesService } from './employee-badges.service';
import { EmployeeBadge } from './models/employee-badge.model';

@Resolver(() => EmployeeBadge)
export class EmployeeBadgesResolver {
  constructor(
    private readonly employeeBadgesService: EmployeeBadgesService,
    private readonly employeesService: EmployeesService,
    private readonly badgesService: BadgesService,
  ) {}

  @Query(() => [EmployeeBadge])
  employeeBadges(): Promise<EmployeeBadge[]> {
    return this.employeeBadgesService.findAll();
  }

  @ResolveField('employee', () => Employee)
  getProject(@Parent() employeeBadge: EmployeeBadge) {
    const { employeeId } = employeeBadge;
    return this.employeesService.findOneById(employeeId + '');
  }

  @ResolveField('badge', () => Badge)
  getBadge(@Parent() employeeBadge: EmployeeBadge) {
    const { badgeId } = employeeBadge;
    return this.badgesService.findOneById(badgeId + '');
  }
}
