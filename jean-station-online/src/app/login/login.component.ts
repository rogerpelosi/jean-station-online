import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private routing: RoutingService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {}

  error?: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('',[Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  })

  login(){
    this.authentication.authenticateUser({username: this.loginForm.value['username'], password: this.loginForm.value['password']}).subscribe({
      next: success=>{
        this.error = '';
        console.log(success);
        this.authentication.setToken(success.token);
        console.log(this.authentication.getToken());
        console.log(this.authentication.authenticateToken(this.authentication.getToken()).subscribe({
          next: success=>{
            console.log(success);
            //make call to useraccount/id to get user role
            //if role = consumer make call to orders where id = user id
          },
          error: fail=>console.log(fail)
        }))
      },
      error: failure=> {
        console.log(failure.error.message);
        this.error = failure.error.message;
      }
    });
  }

}
