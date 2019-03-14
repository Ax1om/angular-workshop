import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './mock-data/users.data.mock';
declare var Math;
@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    return {
      users: USERS
    };
  }

  genId() {
    return Math.random().toString(36).substring(2);
  }
}
