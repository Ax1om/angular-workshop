import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { UserService } from './data/user.service';
import { AppSettingsUtil } from '../utils/app-settings.util';

const SERVICES = [
  InMemoryDataService,
  UserService
];

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
  ],
})
export class ServicesModule {
}
