import { HttpClient } from '@angular/common/http';
import { AppSettingsUtil } from '../../utils/app-settings.util';

export class BaseResourceService {

  resourceUrl;

  constructor(resourceName: string, private http: HttpClient) {
    this.resourceUrl = AppSettingsUtil.resourceApi(resourceName);
  }

  get() {
    return this.http.get(this.resourceUrl);
  }

  getOneById(id: string) {
    const url = this.resourceUrl + '/' + id;
    return this.http.get(url);
  }

  save(resourceObject: any) {
    return this.http.post(this.resourceUrl, resourceObject);
  }
}
