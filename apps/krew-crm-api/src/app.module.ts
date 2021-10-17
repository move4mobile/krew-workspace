import { CacheModule, Injectable, Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BadgesModule } from './badges/badges.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { EmployeeBadgesModule } from './employee-badges/employee-badges.module';
import { EmployeeBadgesService } from './employee-badges/employee-badges.service';
import { EmployeeProjectsModule } from './employee-projects/employee-projects.module';
import { EmployeeProjectsService } from './employee-projects/employee-projects.service';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsService } from './projects/projects.service';

@Module({
  imports: [
    DatabaseModule,
    EmployeesModule,
    ProjectsModule,
    BadgesModule,
    EmployeeBadgesModule,
    EmployeeProjectsModule,
    CacheModule.register(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/krew-crm-api/src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
@Injectable()
export class AppModule {
  constructor(private readonly databaseService: DatabaseService) {
    this.preloadDatabase();
  }

  private async preloadDatabase() {
    Logger.debug('Preload database');
    Promise.all([this.databaseService.preloadDatabase()]);
  }
}
