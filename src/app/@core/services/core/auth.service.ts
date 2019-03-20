import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from '@core/services/core/storage.service';
import { HttpClient } from '@angular/common/http';
import { AppSettingsUtil } from '@core/utils/app-settings.util';
import { tap } from 'rxjs/operators';

export abstract class AuthService {
  abstract login(credentials: any): Observable<any>;
  abstract logout(): Observable<boolean>;
  abstract getAccount(): Observable<any>;
  abstract isAuthenticated(): boolean;
}
@Injectable()
export class AuthMockService extends AuthService {

  constructor(private http: HttpClient) {super();}

  login(credentials: any): Observable<any> {
    return of({
      id_token: 'dummy-token'
    }).pipe(
      tap(resp => StorageService.saveToken(resp))
    );
  }

  logout(): Observable<boolean> {
    return new Observable(observer => {
      StorageService.deleteCurrentUser();
      StorageService.deleteCurrentLang();
      StorageService.deleteToken();
      observer.next(true);
    });
  }

  getAccount(): Observable<any> {
    return of({
      username: 'jon.snow',
      name: 'Jon',
      lastName: 'Snow'
    });
  }

  isAuthenticated(): boolean {
    return !!StorageService.getToken();
  }

}


@Injectable()
export class AuthBEService extends AuthService {
  constructor(private http: HttpClient) {super();}

  login(credentials: any): Observable<any> {
    return this.http.post(AppSettingsUtil.baseApiUrl + '/login', credentials).pipe(
      tap(resp => StorageService.saveToken(resp))
    );
  }

  logout(): Observable<boolean> {
    return new Observable(observer => {
      StorageService.deleteCurrentUser();
      StorageService.deleteCurrentLang();
      StorageService.deleteToken();
      observer.next(true);
    });
  }

  getAccount(): Observable<any> {
    return this.http.get(AppSettingsUtil.baseApiUrl + '/account');
  }

  isAuthenticated(): boolean {
    return !!StorageService.getToken();
  }
}