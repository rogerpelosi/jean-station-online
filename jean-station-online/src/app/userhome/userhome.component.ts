import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private routing: RoutingService){}

  ngOnInit(): void {
  }

  logout(){
    this.authentication.removeToken();
    this.routing.loginRouting();
  }
  
}
