import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './mock-data/users.data.mock';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    return {
      users: USERS
    };
  }
}
