import { InjectionToken, NgModule, Provider } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { AppSettingsUtil } from '../utils/app-settings.util';
import { CrudResourceService, UserService } from './data';
import { AuthBEService, AuthMockService, AuthService } from '@core/services/core/auth.service';

const SERVICES = [
  InMemoryDataService,
  CrudResourceService,
  UserService
];

export function createAuthService(http: HttpClient): AuthService {
  return AppSettingsUtil.shouldMockApi ? new AuthMockService(http) : new AuthBEService(http);
}

@NgModule({
  imports: [
    HttpClientModule,
    AppSettingsUtil.shouldMockApi ? HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 500,
        passThruUnknownUrl: true,
        apiBase: AppSettingsUtil.baseApiPath,
        host: AppSettingsUtil.baseUrl
      }
    ) : []
  ],
  providers: [
    ...SERVICES,
    { provide: AuthService, useFactory: createAuthService, deps: [HttpClient] }
  ],
})
export class ServicesModule {
}
