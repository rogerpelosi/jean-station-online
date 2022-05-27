import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminproductdialogComponent } from '../adminproductdialog/adminproductdialog.component';
import { Product } from '../models/Product';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private dialog: MatDialog){}

  ngOnInit(): void {
    console.log(this.role);
    // if(this.role == 'admin'){this.admin == true && this.user == false}
    // console.log(this.admin)
    // console.log(this.user)
  }

  @Input() role: string;
  @Input() oneProduct: Product;
  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();
  // admin?: boolean = this.role == 'admin'? true : false;
  // user?: boolean;

  edit(){
    console.log(`edit product with id: ${this.oneProduct.id}`);
    this.dialog.open(AdminproductdialogComponent, {
      width: '300px',
      data: {product: this.oneProduct}
    })
  }

  delete(){
    console.log(`delete product with id: ${this.oneProduct.id}`);
    let id: number = this.oneProduct.id;
    this.productService.deleteProduct(id).subscribe({
      next:success=>console.log(success),
      error:failure=>{
        console.log(failure);
        if(failure.error.text == "Product Deleted"){
          this.handleDelete.emit(id);
        }
      }
    })
  }

  addToCart(){
    console.log(`adding ${this.oneProduct.id} to cart`)
  }

}
