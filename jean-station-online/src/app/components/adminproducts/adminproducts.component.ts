import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/Product';
import { AuthenticationService } from '../../services/authentication.service';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:success=>{
        success.reverse();
        this.productsArr = success.reverse();
        this.filteredProductsArr = success.reverse();
      },
      error:failure=>console.log(failure)
    })
  }

  productsArr: Product[] = [];
  filteredProductsArr: Product[] = [];
  newProduct: Product = new Product();
  role: string = 'admin';

  newProductForm: FormGroup = this.formBuilder.group({
    title: this.formBuilder.control('', [Validators.required]),
    description: this.formBuilder.control('', [Validators.required]),
    price: this.formBuilder.control('', [Validators.required]),
    url: this.formBuilder.control('', [Validators.required])
  });

  deleteProduct(id: number){
    this.ngOnInit();
  }

  addProduct(){
    this.newProduct.title = this.newProductForm.value['title'];
    this.newProduct.description = this.newProductForm.value['description'];
    this.newProduct.price = this.newProductForm.value['price'];
    this.newProduct.url = this.newProductForm.value['url'];
    // console.log(this.newProduct);
    this.productService.addNewProduct(this.newProduct).subscribe({
      next:success=>{
        // console.log(success),
        this.newProductForm.reset();
        this.filteredProductsArr.unshift(success);
      },
      error:failure=>console.log(failure)
    })
  }

}
