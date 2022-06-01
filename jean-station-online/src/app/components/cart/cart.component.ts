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

  // UserAccount: any;
  userCart: Cart;
  productsArr: ProductDTO[] = [];
  usercartid: number;
  emptyCart?:boolean = true;

  cartTotal: number = 0;

  constructor( private cartService: CartService,
    private dialog: MatDialog,
    private authentication: AuthenticationService,
    ) { }

    @Input() role: string;
    @Input() oneCart: Cart;
    // @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();
    // @Output() handleUpdate: EventEmitter<Cart> = new EventEmitter<Cart>();
    

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
            this.productsArr.length > 0? this.emptyCart = false: this.emptyCart == true
            this.productsArr.forEach(product=>this.cartTotal+=product.price)
          },
          error:fail=>console.log(fail)
        })
      },
      error:fail=>console.log(fail)
    })
  }

  removeProduct(id:number){
    //console.log(`delete ${id} from productsARR`)
    let removedProduct = this.productsArr.find(prod=>prod.productId == id);
    this.productsArr = this.productsArr.filter(prod=>prod.productId !== id);
    this.userCart.products = this.userCart.products.filter(prod=>prod.productId !== id);
    if(this.productsArr.length < 1){
      this.clearCart();
    }else if(removedProduct){
      this.cartTotal = this.cartTotal - removedProduct.price;
      this.cartTotal.toPrecision()
    }
    //console.log(this.userCart)
    this.cartService.updateCart(this.userCart).subscribe({})
  }

  clearCart(){
    this.productsArr = [];
    this.cartTotal = 0;
    this.userCart.products = [];
    this.emptyCart = true
    this.cartService.updateCart(this.userCart).subscribe({})
  }

  checkOut(){
    console.log(this.userCart)
  }

  
}
