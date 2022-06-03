import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminproductdialogComponent } from '../adminproductdialog/adminproductdialog.component';
import { Product } from '../../models/Product';
import { AuthenticationService } from '../../services/authentication.service';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cartService: any;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private auth: AuthenticationService,
    private cart: CartService){}

  ngOnInit(): void {
    // console.log(this.role);
    // console.log(this.usercartid)
  }

  productDTO: ProductDTO = new ProductDTO();
  usercartid: number;

  @Input() role: string;
  @Input() oneProduct: Product;
  // @Input() usercartid: number;
  
  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() handleAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

  edit(){
    // console.log(`edit product with id: ${this.oneProduct.id}`);
    this.dialog.open(AdminproductdialogComponent, {
      width: '300px',
      panelClass: 'custom-dialog',
      data: {product: this.oneProduct}
    })
  }

  delete(){
    // console.log(`delete product with id: ${this.oneProduct.id}`);
    let id: number = this.oneProduct.id;
    this.productService.deleteProduct(id).subscribe({
      next:success=>console.log(success),
      error:failure=>{
        // console.log(failure);
        if(failure.error.text == "Product Deleted"){
          this.handleDelete.emit(id);
        }
      }
    })
  }

  addToCart(){
    //console.log(`adding ${this.oneProduct.id} to cart`);
    // this.auth.authenticateToken(this.auth.getToken()).subscribe({
    //   next:authToken=>{
    //     this.usercartid = authToken.userId;
    //     this.cart.updateCart
    //     console.log(this.usercartid)
    //   },
    //   error:fail=> console.log(fail)
    // })

    this.handleAddToCart.emit(this.oneProduct);
    // this.cartService.updateCart(this.oneProduct);
  }

}
