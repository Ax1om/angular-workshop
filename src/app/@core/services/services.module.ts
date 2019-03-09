import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { UserService } from './data/user.service';

const SERVICES = [
  InMemoryDataService,
  UserService
];

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 500, passThruUnknownUrl: true }
    )
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule {
}
