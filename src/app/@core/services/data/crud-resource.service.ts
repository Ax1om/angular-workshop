import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettingsUtil } from '@core/utils/app-settings.util';

@Injectable()
export class CrudResourceService {
  constructor(private http: HttpClient) {}

  private _getResouceUrl(resourceName) {
    return AppSettingsUtil.resourceApi(resourceName);
  }

  get(resourceName) {
    return this.http.get(this._getResouceUrl(resourceName));
  }

  getOneById(resourceName, id: string) {
    const url = this._getResouceUrl(resourceName) + '/' + id;
    return this.http.get(url);
  }

  save(resourceName, resourceObject: any) {
    return this.http.post(this._getResouceUrl(resourceName), resourceObject);
  }

  delete(resourceName, id: string) {
    const url = this._getResouceUrl(resourceName) + '/' + id;
    return this.http.delete(url);
  }
}
