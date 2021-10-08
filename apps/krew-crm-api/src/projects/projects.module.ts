import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../src/database/database.module';
import { DatabaseService } from '../../src/database/database.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProjectsResolver, ProjectsService, DatabaseService, DateScalar],
})
export class ProjectsModule {}
