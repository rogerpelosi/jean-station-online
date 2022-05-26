import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  routeToHome() {
    this.router.navigate(['home']);
  }
  routeToLogin(){
    this.router.navigate(['login']);
  }
  routeToSignup() {
    this.router.navigate(['signup']);
  }
}
