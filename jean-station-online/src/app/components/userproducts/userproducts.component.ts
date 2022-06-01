import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrls: ['./userproducts.component.css']
})
export class UserproductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private auth: AuthenticationService,
    private cartService: CartService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:success=>{
        // console.log(success.reverse());
        this.productsArr = success.reverse();
        this.filteredProductsArr = success.reverse();
      },
      error:failure=>console.log(failure)
    })
    this.auth.authenticateToken(this.auth.getToken()).subscribe({
      next:authToken=>{
        this.usercartid = authToken.userId;
        this.cartService.getCartById(this.usercartid).subscribe({
          next:cart=>this.usercart = cart,
          error:fail=>console.log(fail)
        })
      },
      error:fail=>console.log(fail)
    })
  }

  productsArr: Product[] = [];
  filteredProductsArr: Product[] = [];

  role: string = '';

  usercartid: number;
  usercart: Cart;

  handleAddToCart(product: Product){
    let newProduct = new ProductDTO();
    newProduct.productId = product.id;
    newProduct.title = product.title;
    newProduct.price = product.price;
    //console.log(newProduct);
    this.usercart.products.push(newProduct);
    //console.log(this.usercart)
    this.cartService.updateCart(this.usercart).subscribe({
      // next:cart=>console.log(cart),
      // error:fail=>console.log(fail)
    })
  }

}
