import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  errorMessage: string = "";
  product: Product = this.data;

  constructor(@Inject(MAT_DIALOG_DATA)private data:any, private productService: ProductService, private  dialogRef: MatDialogRef<UpdateproductComponent>) { }

  ngOnInit(): void {
  }

  edit(){
    this.productService.updateProduct(this.product).subscribe({
      next:()=>{
        this.dialogRef.close()
      }
    });
  }


}

