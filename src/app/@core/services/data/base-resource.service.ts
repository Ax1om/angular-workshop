import { HttpClient } from '@angular/common/http';

export class BaseResourceService {

  resourceUrl;

  constructor(resourceName: string, private http: HttpClient) {
    this.resourceUrl = '/api/' + resourceName;
  }

  get() {
    return this.http.get(this.resourceUrl);
  }

  getOneById(id: string) {
    const url = this.resourceUrl + '/' + id;
    return this.http.get(url);
  }
}
