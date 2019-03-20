import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/core/auth.service';
import { tap } from 'rxjs/operators';
import { StorageService } from '@core/services/core/storage.service';

@Injectable()
export class AccountResolver implements Resolve<any> {

  constructor(private authService: AuthService) {}

  resolve() {
    return this.authService.getAccount().pipe(
      tap(resp => StorageService.setCurrentUser(resp))
    );
  }
}
