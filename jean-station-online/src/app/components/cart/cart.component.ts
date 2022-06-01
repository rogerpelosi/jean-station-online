import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/models/Cart';
import { CartProduct } from 'src/app/models/CartProduct';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductsArr: CartProduct[] = [];
  UserAccount: any;
  

  constructor( private cartService: CartService,
    private dialog: MatDialog,
    private authentication: AuthenticationService,
    ) { }

    @Input() role: string;
    @Input() oneCart: Cart;
    @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();
    @Output() handleUpdate: EventEmitter<Cart> = new EventEmitter<Cart>();
    

  ngOnInit(): void {
    //Get request for cart.
    this.authentication.authenticateToken(this.authentication.getToken()).subscribe
    ({next: x=> console.log(x)})
    this.cartService.getCartById(this.UserAccount.userId).subscribe({
      next:(cart)=>{
        console.log(cart);
      }
    })
  }

  

  deleteCart(){
    let id:number = this.oneCart.cartId;
    this.cartService.deleteCart(id).subscribe({
      next:success=>console.log(success),
      error:failure=>{
        console.log(failure);
        if(failure.error.text === "Cart Deleted"){
          this.handleDelete.emit(id);
        }
      }
    })
  }

  updateCart(){

    
  }

  

}
