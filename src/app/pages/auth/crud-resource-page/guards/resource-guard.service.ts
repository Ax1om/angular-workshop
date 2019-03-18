import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class ResourceGuardService implements CanActivate{

  availableResources = {
    'skills': true,
    'users': true
  };

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.resource && this.availableResources[route.params.resource]) {
      return true;
    } else {
      return this.router.parseUrl('/');
    }
  }
}
