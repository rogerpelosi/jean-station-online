import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/models/Cart';
import { CartProduct } from 'src/app/models/CartProduct';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  UserAccount: any;
  userCart: Cart;
  productsArr: ProductDTO[] = [];
  usercartid: number;

  

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
    ({
      next:authToken=>{
        this.usercartid = authToken.userId;
        this.cartService.getCartById(this.usercartid).subscribe({
          next:cart=>{
            console.log(cart);
            this.userCart = cart;
            this.productsArr = cart.products;
          },
          error:fail=>console.log(fail)
        })
      },
      error:fail=>console.log(fail)
    })
    // console.log(this.usercartid)
    // this.cartService.getCartById(this.usercartid).subscribe({
    //   next:success=>console.log(success),
    //   error:fail=>console.log(fail)
    // })
    // this.cartService.getCartById(this.UserAccount.userId).subscribe({
    //   next:(cart)=>{
    //     console.log(cart);
    //   }
    // })
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

  removeProduct(id: number){
    //console.log(`delete ${id} from productsARR`)
    this.productsArr = this.productsArr.filter(prod=>prod.productId !== id);
    this.userCart.products = this.userCart.products.filter(prod=>prod.productId !== id);
    //console.log(this.userCart)
    this.cartService.updateCart(this.userCart).subscribe({})
  }

  

}
