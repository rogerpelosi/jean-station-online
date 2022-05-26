import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private route: Router){}

  // loginRouting(){
  //   this.route.navigate(['login']);
  // }

  adminOrderRouting(){
    this.route.navigate(['admin', 'orders']);
  }

  userOrderRouting(){
    this.route.navigate(['user', 'orders'])
  }

}
