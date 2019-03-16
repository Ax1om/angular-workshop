import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '@core/services/data/user.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');

    return this.userService.getOneById(id).pipe(
      catchError((err) => {
        this.router.navigate(['/pages/auth/user-crud/new'],  { replaceUrl: true });
        return EMPTY;
      })
    );
  }
}
