import { CacheModule, Injectable, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BadgesModule } from './badges/badges.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeBadgesModule } from './employee-badges/employee-badges.module';
import { EmployeeProjectsModule } from './employee-projects/employee-projects.module';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';

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
export class AppModule {}
