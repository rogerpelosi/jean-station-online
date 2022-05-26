import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {MatDialog} from "@angular/material/dialog";
import {ProductService} from "../services/product.service";
import {UpdateproductComponent} from "../updateproduct/updateproduct.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-landing',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {


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

  add(){
    console.log("Add method is invoked");

    if( this.product.description != "" && this.product.title != "" && this.product.price !=0 ){

      this.productService.addNewProduct(this.product).subscribe({
        next:(product)=>{
          this.products.push(product);
          this.errorMessage = "";
        },
        error:(errorResponse)=>{
          console.log(errorResponse);
          this.errorMessage = errorResponse.error;
        }
      });
    }
    else{
      this.errorMessage = "Fields Cannot be empty or Zero";
    }
  }

  delete(product: Product){
    let deleteProduct = Object.assign({},product)
     this.productService.deleteProduct(deleteProduct).subscribe({error:()=>{
       this.ngOnInit()
       }});
  }

  update(product: Product) {
    let employeeCopy = Object.assign({},product);
    this.dialog.open(UpdateproductComponent, {
      width: "250px",
      data:employeeCopy
    }).afterClosed().subscribe(()=>{
      this.ngOnInit()
    })
  }



}

