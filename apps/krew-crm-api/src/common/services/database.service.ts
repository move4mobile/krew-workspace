const { GoogleSpreadsheet } = require('google-spreadsheet');
import { Logger } from '@nestjs/common';

export interface IDatabaseService {
  getWorksheetRows(worksheet: string): Promise<any[]>;
}

// TODO: refactor into proper NestJS service (so that we can inject Cache manager)
export class Database implements IDatabaseService {
  private static instance: Database;

  private constructor(private doc: any) {}

  static async connect(docId: string, creds: any = null): Promise<Database> {
    if (!Database.instance) {
      const _doc = new GoogleSpreadsheet(docId);
      if (creds) {
        await _doc.useServiceAccountAuth(creds);
      } else {
        await _doc.useServiceAccountAuth({
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
        });
      }

      await _doc.loadInfo();

      Database.instance = new Database(_doc);
      return Database.instance;
    }

    throw Error('Already connected');
  }

  static getInstance(): Database {
    if (!Database.instance) {
      throw Error('Connect to the database fiirst');
    }

    return Database.instance;
  }

  public getWorksheetRows(worksheet: string) {
    Logger.debug(`getWorksheetRows("${worksheet}")`);
    const sheet = this.doc.sheetsByTitle[worksheet];
    return sheet.getRows();
  }
}
