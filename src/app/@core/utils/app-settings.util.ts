import { environment } from '../../../environments/environment';

export class AppSettingsUtil {
  static get baseApiUrl() {
    return environment.baseApi;
  }

  static resourceApi(resource: string) {
    return `${this.baseApiUrl}/${resource}`;
  }
}
