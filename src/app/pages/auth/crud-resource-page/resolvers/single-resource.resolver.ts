import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { CrudResourceService } from '@core/services/data';

@Injectable()
export class SingleResourceResolver implements Resolve<any> {

  constructor(private resourceService: CrudResourceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    const resource = route.paramMap.get('resource');

    return this.resourceService.getOneById(resource, id).pipe(
      catchError((err) => {
        this.router.navigate(['/pages/auth/user-crud/new'],  { replaceUrl: true });
        return EMPTY;
      })
    );
  }
}
