import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products: Product[] = [];

  product: Product = new Product()
  search : String =this.product.title;
  private errorMessage: string = "";

  constructor(private productService : ProductService, private dialog: MatDialog, httpClient: HttpClient) { }

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next:(products)=>{
        this.products = products;
      }
    })
  }
  searchBar(product: Product){
    this.productService.getProductById(product.id).subscribe({
      next:(product)=>{
        console.log(product);
        this.product = product;
      }
    })
  }
}
