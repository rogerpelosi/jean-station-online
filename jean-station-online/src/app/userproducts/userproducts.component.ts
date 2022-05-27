import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrls: ['./userproducts.component.css']
})
export class UserproductsComponent implements OnInit {

  constructor(
    private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:success=>{
        console.log(success.reverse());
        this.productsArr = success.reverse();
        this.filteredProductsArr = success.reverse();
      },
      error:failure=>console.log(failure)
    })
  }

  productsArr: Product[] = [];
  filteredProductsArr: Product[] = [];
  role: string = '';

  handleAddToCart(product: Product){
    console.log(product);
  }

}
