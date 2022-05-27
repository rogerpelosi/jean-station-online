import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from '../models/UserAccount';
import { AdminRoutingService } from '../services/admin-routing.service';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';
import { UserRoutingService } from '../services/user-routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private admin: AdminRoutingService,
    private user: UserRoutingService){}

  ngOnInit(): void {}

  error?: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('',[Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  })

  login(){
    this.authentication.authenticateUser({username: this.loginForm.value['username'], password: this.loginForm.value['password']}).subscribe({

      //if username and password combo is found, set token and check for role
      next: success=>{
        this.error = '';
        this.authentication.setToken(success.token);
        this.authentication.authenticateToken(success.token).subscribe({
          next: authenticTokenResp=>{
            console.log(authenticTokenResp['userId']);
            this.httpClient.get<UserAccount>(`http://localhost:9000/api/v1/accounts/${authenticTokenResp['userId']}`).subscribe({
              next: user=>{
                user.role == 'admin' ? this.admin.adminLandingRouting() : this.user.userLandingRouting()
              },
              error: fail=>console.log(fail)
            });
          }
        });
      },

      error: failure=> {
        console.log(failure.error.message);
        this.error = failure.error.message;
      }

    });
  }

}
