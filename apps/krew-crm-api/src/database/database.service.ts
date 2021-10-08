import { Injectable, Inject, Logger, CACHE_MANAGER } from '@nestjs/common';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { Badge } from '../../src/badges/models/badge.model';
import { CACHE_WORKSHEET_DEFAULT_TTL } from '../../src/common/constants';
import { EmployeeBadge } from '../../src/employee-badges/models/employee-badge.model';
import { EmployeeProject } from '../../src/employee-projects/models/employee-project.model';
import { Employee } from '../../src/employees/models/employee.model';
import { Project } from '../../src/projects/models/project.model';

const TAB_EMPLOYEES = 'Employees';
const TAB_EMPLOYEE_BADGES = 'EmployeeBadges';
const TAB_EMPLOYEE_PROJECTS = 'EmployeeProjects';
const TAB_PROJECTS = 'Projects';
const TAB_BADGES = 'Badges';

interface IDatabaseService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeBadges(): Promise<EmployeeBadge[]>;
  getEmployeeProjects(): Promise<EmployeeProject[]>;
  getProjects(): Promise<Project[]>;
  getBadges(): Promise<Badge[]>;
}

@Injectable()
export class DatabaseService implements IDatabaseService {
  #doc: GoogleSpreadsheet;
  constructor(@Inject('DatabaseProvider') doc, @Inject(CACHE_MANAGER) protected readonly cacheManager) {
    this.#doc = doc;
  }

  async getProjects(): Promise<Project[]> {
    const rows = await this.getSpreadsheetRows(TAB_PROJECTS);
    return rows.map((row: any) => Project.fromRow(row)).filter((p) => !!p.id);
  }

  async getBadges(): Promise<Badge[]> {
    const rows = await this.getSpreadsheetRows(TAB_BADGES);
    return rows.map((row: any) => Badge.fromRow(row)).filter((p) => !!p.id);
  }

  async getEmployees(): Promise<Employee[]> {
    const rows = await this.getSpreadsheetRows(TAB_EMPLOYEES);
    return rows.map((row: any) => Employee.fromRow(row)).filter((e) => e.id);
  }

  async getEmployeeBadges(): Promise<EmployeeBadge[]> {
    const rows = await this.getSpreadsheetRows(TAB_EMPLOYEE_BADGES);
    return rows.map((row: any) => EmployeeBadge.fromRow(row)).filter((e) => e.employeeId);
  }

  async getEmployeeProjects(): Promise<EmployeeProject[]> {
    const rows = await this.getSpreadsheetRows(TAB_EMPLOYEE_PROJECTS);
    return rows.map((row: any) => EmployeeProject.fromRow(row)).filter((e) => e.employeeId);
  }

  protected async getSpreadsheetRows(sheetTitle: string): Promise<GoogleSpreadsheetRow[]> {
    let spreadSheetRows: GoogleSpreadsheetRow[] = await this.cacheManager.get(sheetTitle);
    if (spreadSheetRows) {
      Logger.debug(`Loading ${sheetTitle} from cache`);
      return spreadSheetRows;
    }

    Logger.debug(`Loading ${sheetTitle} from database`);

    spreadSheetRows = await this.#doc.sheetsByTitle[sheetTitle].getRows();
    this.cacheManager.set(sheetTitle, spreadSheetRows, {
      ttl: CACHE_WORKSHEET_DEFAULT_TTL,
    });
    return spreadSheetRows;
  }
}
