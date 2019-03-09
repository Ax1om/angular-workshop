import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class UserService extends BaseResourceService {

  constructor(http: HttpClient) {
    super('users', http);
  }

}
