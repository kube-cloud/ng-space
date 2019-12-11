import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RocketGuard implements CanActivate {
  private readonly rocket_ids = ['falcon1', 'falcon9', 'falconheavy', 'bfr']

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    if (this.rocket_ids.includes(id)) {
      return true
    } else {
      this.router.navigate(['notfound']);
      return false;
    }
  }
}
