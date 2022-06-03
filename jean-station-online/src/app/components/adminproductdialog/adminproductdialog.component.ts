import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-adminproductdialog',
  templateUrl: './adminproductdialog.component.html',
  styleUrls: ['./adminproductdialog.component.css']
})
export class AdminproductdialogComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AdminproductdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any){}

  ngOnInit(): void {
    // console.log(this.product)
  }

  product: Product = this.data.product;

  editProductForm: FormGroup = this.formBuilder.group({
    title: this.formBuilder.control(this.product.title, [Validators.required]),
    description: this.formBuilder.control(this.product.description, [Validators.required]),
    price: this.formBuilder.control(this.product.price, [Validators.min(1.00)]),
    url: this.formBuilder.control(this.product.url, [Validators.required])
  })

  edit(){
    this.product.title = this.editProductForm.value['title'];
    this.product.description = this.editProductForm.value['description'];
    this.product.price = this.editProductForm.value['price'];
    this.product.url = this.editProductForm.value['url'];
    this.dialogRef.close();
    this.productService.updateProduct(this.product).subscribe({
      // next:success=>console.log(success),
      // error:failure=>console.log(failure)
    })
  }

  cancelEdit(){
    this.dialogRef.close();
  }

}
