import { environment } from '../../../environments/environment';

export class AppSettingsUtil {
  static get baseApiUrl() {
    const { baseApi  } = environment.api;
    return this.baseUrl + '/' + baseApi;
  }

  static get baseUrl() {
    const { protocol, host, port  } = environment.api;
    return protocol + '://' + host + ':' + port;
  }

  static resourceApi(resource: string) {
    return this.baseApiUrl + '/' +  resource;
  }

  static get baseApiPath() {
    return environment.api.baseApi;
  }

  static get shouldMockApi() {
    return environment.mockApi;
  }
}
