import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CrudResourceService } from '@core/services/data';

@Injectable()
export class ResourceDataResolver implements Resolve<any> {

  constructor(private resourceService: CrudResourceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const resource = route.paramMap.get('resource');

    return this.resourceService.get(resource);
  }
}
