import { Employee } from '../core';
import { BaseService } from './base.service';

const resourceName = '/me';

export class MeService extends BaseService {
  async get(): Promise<Employee> {
    let query = `${resourceName}`;

    return this.request<Employee>(Employee, query);
  }
}
