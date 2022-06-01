import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthenticationService } from '../../services/authentication.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  CartService: any;

  constructor(
    private authentication: AuthenticationService,
    private routing: RoutingService,
    private cartService: CartService){}

    ngOnInit(): void {
      //Create a cart - post request. Fetch userID
      //UserID = CartID  
      //this.CartService.cartId = this.UserAccount.userId;
      this.authentication.authenticateToken(this.authentication.getToken()).subscribe({
       next:authToken=> {
        console.log(authToken.userId);
        this.cartService.createNewCart(this.CartService.cart).subscribe({
          //this.CartService.cartId === this.UserAccount.userId,
        })
       }
      })
     
      
    }

  logout(){
    this.authentication.removeToken();
    this.routing.loginRouting();
  }
  
}
