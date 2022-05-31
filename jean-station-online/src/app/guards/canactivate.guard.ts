import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  constructor(
    private authentication: AuthenticationService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.router.navigate(['']);
      return false;
      
    let token = this.authentication.getToken();

    return this.authentication.authenticateToken(token).pipe(map((res:any)=>{
      console.log(`authentic token?: ${res['isAuthenticated']}`);
      return res['isAuthenticated'];
    }));

  }
  
}
